import type { SelectHTMLAttributes } from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";
import type { Field } from "../../../utils/formSchemas";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: FieldError;
  field?: Field;
  register?: UseFormRegister<Record<string, string>>;
}

export const Select = ({ label, options, error, ...props }: SelectProps) => {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <select {...props}>
        <option value="">Selecione...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </div>
  );
};
