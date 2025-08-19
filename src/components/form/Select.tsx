import type { SelectHTMLAttributes } from "react";

interface Option {
  label: string;
  value: string | number;
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
}

export const Select = ({ label, options, ...props }: SelectProps) => {
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
    </div>
  );
};
