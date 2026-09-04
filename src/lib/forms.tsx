import type { ReactNode, SelectHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface FieldShellProps {
  label: string;
  error?: string;
  full?: boolean;
  children: ReactNode;
}

export function FieldShell({ label, error, full, children }: FieldShellProps) {
  return (
    <div className={`form-field-block ${full ? "is-full" : ""} ${error ? "has-error" : ""}`}>
      <label className="form-label">{label}</label>
      {children}
      {error && <p className="form-error-text">{error}</p>}
    </div>
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholders?: Record<string, string>;
  error?: string;
  full?: boolean;
}

export function SelectField({ label, options, placeholders, error, full, ...rest }: SelectProps) {
  return (
    <FieldShell label={label} error={error} full={full}>
      <select className="form-select" {...rest}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {placeholders?.[opt] ?? opt}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  full?: boolean;
}

export function TextField({ label, error, full, ...rest }: TextInputProps) {
  return (
    <FieldShell label={label} error={error} full={full}>
      <input className="form-input" {...rest} />
    </FieldShell>
  );
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  full?: boolean;
}

export function TextAreaField({ label, error, full, ...rest }: TextAreaProps) {
  return (
    <FieldShell label={label} error={error} full={full}>
      <textarea className="form-textarea" rows={5} {...rest} />
    </FieldShell>
  );
}

export const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const validatePhone = (v: string) => /^[+]?[\d\s-]{10,15}$/.test(v.trim());