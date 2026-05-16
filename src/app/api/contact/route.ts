import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/emailSender';
import { writeMessages, readMessages } from '@/lib/emailStore';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { studentName, zoomEmail } = data;
    if (!studentName || !zoomEmail) return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });

    const payload = { ...data, receivedAt: new Date().toISOString() };

    // store submission
    const stored = await readMessages('submissions');
    stored.unshift(payload);
    await writeMessages('submissions', stored.slice(0, 500));

    // send
    const result = await sendContactEmail(payload);

    if (!result.ok) {
      return NextResponse.json({ ok: false, error: result.error || 'send_failed' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, via: result.via || 'unknown' });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
