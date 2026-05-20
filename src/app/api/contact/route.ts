import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactEmail } from '@/lib/emailSender';

// 1. Define strict Zod validation schema for input safety & anti-spam
const DetailItemSchema = z.object({
  label: z.string().min(1, 'Label cannot be empty'),
  value: z.string().min(1, 'Value cannot be empty'),
});

const ContactRequestSchema = z.object({
  studentName: z.string().trim().min(2, "Student's Full Name must be at least 2 characters"),
  studentAge: z.string().trim().min(1, 'Student age is required'),
  studentGrade: z.string().trim().min(1, 'Current grade is required'),
  location: z.string().trim().min(2, 'City, State, Country is required'),
  parentName: z.string().trim().min(2, "Parent's Full Name must be at least 2 characters"),
  zoomEmail: z.string().trim().email('Invalid email address for Zoom Class'),
  parentEmail: z.string().trim().email('Invalid Parent Email').optional().or(z.literal('')),
  parentPhone: z.string().trim().optional(),
  programType: z.enum(['computer', 'academics', 'personal']),
  details: z.array(DetailItemSchema),
  extraNotes: z.string().trim().optional(),
}).passthrough();

// Clean, strongly typed response structures for client consumption
export type ContactApiResponse = 
  | { ok: true; via: string }
  | { ok: false; error: string; validationErrors?: Record<string, string[] | undefined> };

export async function POST(request: Request) {
  console.log('[Contact API] Received stateless inquiry submission request.');

  try {
    // 2. Parse request body safely
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json<ContactApiResponse>(
        { ok: false, error: 'Invalid JSON request body payload.' },
        { status: 400 }
      );
    }

    // 3. Validate input with Zod
    const validation = ContactRequestSchema.safeParse(body);
    if (!validation.success) {
      // Format validation errors into a client-friendly map
      const validationErrors = validation.error.flatten().fieldErrors;
      console.warn('[Contact API] Validation failed:', validationErrors);
      return NextResponse.json<ContactApiResponse>(
        { ok: false, error: 'Validation failed.', validationErrors },
        { status: 400 }
      );
    }

    const payload = validation.data;
    console.log(`[Contact API] Form validated successfully for student: ${payload.studentName}, program: ${payload.programType}`);

    // 4. Send email statelessly using the refactored sender (Resend / fallbacks)
    const result = await sendContactEmail(payload);

    if (!result.ok) {
      console.error('[Contact API] Stateless email sending failed:', result.error);
      return NextResponse.json<ContactApiResponse>(
        { ok: false, error: result.error || 'Stateless contact inquiry email delivery failed.' },
        { status: 500 }
      );
    }

    console.log(`[Contact API] Contact inquiry sent successfully via: ${result.via}`);
    return NextResponse.json<ContactApiResponse>(
      { ok: true, via: result.via || 'unknown' },
      { status: 200 }
    );

  } catch (error) {
    console.error('[Contact API] Unexpected error in POST handler:', error);
    return NextResponse.json<ContactApiResponse>(
      { ok: false, error: 'An unexpected server error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
