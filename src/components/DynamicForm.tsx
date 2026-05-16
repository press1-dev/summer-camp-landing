"use client";

import { useState, useEffect } from "react";
import { User, Mail, Phone, Smile, MessageSquare, ChevronRight, ChevronLeft, Calendar, Info, Target, Layout, Monitor, Globe, ChevronDown } from "lucide-react";

type FieldType = "text" | "email" | "tel" | "select" | "radio" | "textarea";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  options?: string[];
  required?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
  halfWidth?: boolean;
}

export interface FormStep {
  title: string;
  subtitle: string;
  fields: FormField[];
}

const COMMON_STEPS: FormStep[] = [
  {
    title: "Student Details",
    subtitle: "Tell us about the learner",
    fields: [
      { name: "studentName", label: "Student's Full Name", type: "text", required: true, icon: <User size={16} />, halfWidth: true },
      { name: "studentAge", label: "Student Age", type: "text", required: true, icon: <Smile size={16} />, halfWidth: true },
      { name: "studentGrade", label: "Current Grade", type: "text", required: true, icon: <Target size={16} />, halfWidth: true },
      { name: "location", label: "City, State, Country", type: "text", required: true, icon: <Globe size={16} />, halfWidth: true },
    ]
  },
  {
    title: "Contact Info",
    subtitle: "How can we reach you?",
    fields: [
      { name: "parentName", label: "Parent's Full Name", type: "text", required: true, icon: <User size={16} />, halfWidth: true },
      { name: "zoomEmail", label: "Email for Zoom Class", type: "email", required: true, icon: <Monitor size={16} />, halfWidth: true },
      { name: "parentEmail", label: "Parent's Email (Optional)", type: "email", icon: <Mail size={16} />, halfWidth: true },
      { name: "parentPhone", label: "Parent's Phone (WhatsApp preferred)", type: "tel", icon: <Phone size={16} />, halfWidth: true },
    ]
  }
];

const PROGRAM_SCHEMAS: Record<string, FormStep[]> = {
  computer: [
    {
      title: "Computer Class Survey",
      subtitle: "Help us tailor the tech experience",
      fields: [
        { name: "computer_tool", label: "Which tool do you want to start with?", type: "select", options: ["HTML/CSS", "Python", "Word packages", "Figma", "Any"], halfWidth: true },
        { name: "computer_pace", label: "Preferred learning pace?", type: "select", options: ["Slow and Steady", "Fast Paced", "Flexible"], halfWidth: true },
        { name: "computer_device", label: "Which device will you use?", type: "select", options: ["Laptop", "Desktop", "Tablet", "Smartphone"], required: true, halfWidth: true },
        { name: "computer_aware", label: "Heard about programming before?", type: "radio", options: ["Yes", "No"], required: true, halfWidth: true },
        { name: "computer_design", label: "Enjoy designing creative things?", type: "select", options: ["Yes, I love designing!", "I've never tried, but want to learn.", "No, I'm more interested in other topics."] },
        { name: "computer_apps", label: "Want to learn app development?", type: "select", options: ["Yes, that sounds exciting!", "Maybe, I want to know more.", "No, I prefer using apps."] },
        { name: "computer_prev", label: "Taken online computer class before?", type: "radio", options: ["Yes", "No"], required: true, halfWidth: true },
        { name: "computer_ai", label: "Interested in learning AI basics?", type: "radio", options: ["Yes", "No"], required: true, halfWidth: true },
        { name: "computer_software", label: "Used software like Scratch/Photoshop? Specify:", type: "textarea", required: true },
      ]
    }
  ],
  academics: [
    {
      title: "Academic Background",
      subtitle: "Understanding your child's needs",
      fields: [
        { name: "academic_prev", label: "Taken online classes before?", type: "radio", options: ["Yes", "No"], halfWidth: true },
        { name: "academic_strong", label: "What are your child's strong points?", type: "textarea" },
        { name: "academic_weak", label: "What are your child's weak points?", type: "textarea" },
        { name: "academic_expect", label: "What is your expectation as a parent?", type: "textarea" },
      ]
    }
  ],
  personal: [
    {
      title: "Personal Development",
      subtitle: "Focusing on personal growth",
      fields: [
        { name: "personal_challenge", label: "Biggest personal challenge right now?", type: "select", options: ["Communication", "Confidence", "Time management", "Public speaking", "Other"] },
      ]
    }
  ]
};

const FINAL_STEP: FormStep = {
  title: "Final Details",
  subtitle: "Almost there!",
  fields: [
    { name: "demoTime", label: "Preferred Day/Time for Demo Class?", type: "text", icon: <Calendar size={16} />, placeholder: "e.g., Wed 5pm, Weekend 10am" },
    { name: "extraNotes", label: "Anything else we should know?", type: "textarea", icon: <MessageSquare size={16} /> },
  ]
};

interface DynamicFormProps {
  programId: string;
  accent: string;
}

const inputCls = "w-full px-4 py-3 bg-cream/50 border-2 border-line rounded-xl text-ink font-semibold text-[14px] transition-all duration-200 focus:outline-none focus:bg-white placeholder:text-ink-mute placeholder:font-normal";
const selectCls = "w-full px-4 py-3 bg-cream/50 border-2 border-line rounded-xl text-ink font-semibold text-[14px] transition-all duration-200 focus:outline-none focus:bg-white appearance-none cursor-pointer pr-10";
const radioGroupCls = "flex gap-3";
const radioLabelCls = "flex-1 flex items-center justify-center gap-2 px-3 py-2.5 border-2 border-line rounded-xl cursor-pointer transition-all duration-200 select-none text-[13px] font-semibold text-navy bg-cream/50 hover:bg-cream";

const getAccentStyles = (accent: string) => {
  switch (accent) {
    case 'coral': return {
      text: 'text-coral', bg: 'bg-coral', border: 'border-coral', 
      focus: 'focus:border-coral focus:shadow-[0_0_0_4px_rgba(242,90,90,0.1)]',
      activeBg: 'bg-coral/10 border-coral', radioDot: 'bg-coral'
    };
    case 'navy': return {
      text: 'text-navy', bg: 'bg-navy', border: 'border-navy', 
      focus: 'focus:border-navy focus:shadow-[0_0_0_4px_rgba(31,24,64,0.1)]',
      activeBg: 'bg-navy/10 border-navy', radioDot: 'bg-navy'
    };
    case 'green': return {
      text: 'text-green', bg: 'bg-green', border: 'border-green', 
      focus: 'focus:border-green focus:shadow-[0_0_0_4px_rgba(45,110,18,0.1)]',
      activeBg: 'bg-green/10 border-green', radioDot: 'bg-green'
    };
    default: return {
      text: 'text-navy', bg: 'bg-navy', border: 'border-navy', 
      focus: 'focus:border-navy focus:shadow-[0_0_0_3px_rgba(31,24,64,0.1)]',
      activeBg: 'bg-navy/5 border-navy', radioDot: 'bg-navy'
    };
  }
};

export default function DynamicForm({ programId, accent }: DynamicFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const styles = getAccentStyles(accent);

  // Reset form when switching tabs, but keep step 0 if they haven't started. 
  // Alternatively, keep common data like name/email to not annoy users if they switch.
  useEffect(() => {
    setCurrentStep(0);
    setErrors({});
    setStatus("idle");
  }, [programId]);

  const steps = [...COMMON_STEPS, ...(PROGRAM_SCHEMAS[programId] || []), FINAL_STEP];
  const activeStep = steps[currentStep];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" })); // clear error
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    activeStep.fields.forEach(field => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = "Required";
      }
      if (field.type === "email" && formData[field.name]) {
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData[field.name])) {
          newErrors[field.name] = "Invalid email";
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(p => Math.min(p + 1, steps.length - 1));
    }
  };

  const handlePrev = () => {
    setCurrentStep(p => Math.max(p - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setStatus("submitting");
    try {
      const payload = { ...formData, programType: programId };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        setFormData({});
        setTimeout(() => {
          setStatus("idle");
          setCurrentStep(0);
        }, 6000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8 animate-in fade-in slide-in-from-bottom-4">
        <div className="w-20 h-20 rounded-full bg-green/10 flex items-center justify-center text-green mb-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
        </div>
        <h3 className="font-display font-bold text-[28px] text-navy mb-2">Inquiry Received!</h3>
        <p className="text-[15px] text-ink-soft">Thank you for your interest. Our counselors will be in touch with you shortly.</p>
      </div>
    );
  }

  const renderField = (field: FormField) => {
    const value = formData[field.name] || "";
    const hasError = !!errors[field.name];

    const inputStyle = `${inputCls} ${hasError ? "border-coral focus:border-coral bg-coral/5" : styles.focus}`;
    const selStyle = `${selectCls} ${hasError ? "border-coral focus:border-coral bg-coral/5" : styles.focus}`;

    return (
      <div key={field.name} className={`flex flex-col gap-1.5 ${field.halfWidth ? "sm:col-span-1" : "sm:col-span-2"}`}>
        <label htmlFor={field.name} className="flex items-center gap-1.5 text-[10px] font-black text-navy uppercase tracking-[0.12em] pl-1">
          {field.icon ? <span className="text-navy/40">{field.icon}</span> : <span className="text-navy/40"><Info size={14} /></span>}
          {field.label} {field.required && <span className="text-coral">*</span>}
        </label>
        
        {field.type === "text" || field.type === "email" || field.type === "tel" ? (
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={value}
            onChange={handleInputChange}
            placeholder={field.placeholder || ""}
            className={inputStyle}
          />
        ) : field.type === "textarea" ? (
          <textarea
            id={field.name}
            name={field.name}
            value={value}
            onChange={handleInputChange}
            placeholder={field.placeholder || ""}
            rows={3}
            className={`${inputStyle} resize-none`}
          />
        ) : field.type === "select" ? (
          <div className="relative">
            <select id={field.name} name={field.name} value={value} onChange={handleInputChange} className={selStyle}>
              <option value="" disabled>Select option</option>
              {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ink-mute"><ChevronDown size={14} strokeWidth={2.5} /></span>
          </div>
        ) : field.type === "radio" ? (
          <div className={radioGroupCls}>
            {field.options?.map(opt => (
              <label key={opt} className={`${radioLabelCls} ${value === opt ? styles.activeBg : "hover:bg-cream"}`}>
                <input
                  type="radio"
                  name={field.name}
                  value={opt}
                  checked={value === opt}
                  onChange={handleInputChange}
                  className="hidden"
                />
                {value === opt && <div className={`w-2 h-2 rounded-full ${styles.radioDot}`} />}
                {opt}
              </label>
            ))}
          </div>
        ) : null}

        {hasError && (
          <span className="flex items-center gap-1.5 pl-1 text-[11px] text-coral font-bold mt-0.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" /></svg>
            {errors[field.name]}
          </span>
        )}
      </div>
    );
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="flex-1 flex flex-col animate-in fade-in zoom-in-95 duration-300">
      {/* Progress Bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-ink-mute mb-2">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span className={styles.text}>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 w-full bg-line rounded-full overflow-hidden">
          <div 
            className={`h-full ${styles.bg} rounded-full transition-all duration-500 ease-out`} 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-[20px] font-display font-bold text-navy leading-tight">{activeStep.title}</h3>
        <p className="text-[13px] text-ink-soft mt-1">{activeStep.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-4 flex-1 items-start content-start">
        {activeStep.fields.map(renderField)}
      </div>

      <div className="mt-8 pt-6 border-t border-line flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentStep === 0 || status === "submitting"}
          className="flex items-center gap-2 px-5 py-2.5 text-[14px] font-bold text-ink-soft hover:text-navy disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeft size={16} strokeWidth={2.5} /> Back
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className={`flex items-center gap-2 px-5 py-2.5 bg-navy text-white rounded-xl font-bold text-[14px] hover:bg-navy-dark transition-colors shadow-sm`}
          >
            Continue <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={status === "submitting"}
            className={`group relative overflow-hidden flex items-center justify-center gap-2 px-6 py-2.5 ${styles.bg} text-white rounded-xl font-bold text-[14px] shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:translate-y-[2px] hover:shadow-[0_2px_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none transition-all disabled:opacity-70 disabled:pointer-events-none`}
          >
            {status === "submitting" ? (
              <><svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round"/></svg>Sending…</>
            ) : (
              <>Submit Registration <ChevronRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" /></>
            )}
          </button>
        )}
      </div>
      
      {status === "error" && (
         <div className="mt-4 p-3 bg-coral/10 border border-coral/20 rounded-xl text-center text-[13px] text-coral font-bold">
           Something went wrong. Please try again.
         </div>
      )}
    </div>
  );
}
