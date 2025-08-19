import type { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputText = ({ label, ...props }: InputTextProps) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...props} />
    </div>
  );
};
