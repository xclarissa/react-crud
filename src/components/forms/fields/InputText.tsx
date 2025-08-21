import type { InputHTMLAttributes } from "react";
import type { Field } from "../../../utils/formSchemas";
import type { FieldError, UseFormRegister } from "react-hook-form";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  field?: Field;
  register?: UseFormRegister<Record<string, any>>;
  error?: FieldError;
}

export const InputText = ({ label, error, ...props }: InputTextProps) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...props} />
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </div>
  );
};
