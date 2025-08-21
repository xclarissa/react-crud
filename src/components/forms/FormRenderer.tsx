import { useForm } from "react-hook-form";
import type { FormSchema } from "../../utils/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldsRenderer } from "./FormFieldsRenderer";

interface FormProps {
  schema: FormSchema;
  defaultValues?: Record<string, any>;
  onSubmit: (data: any) => void;
}

export const FormRenderer = ({ schema, defaultValues, onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema.validation),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <FormFieldsRenderer
        schema={schema}
        register={register}
        errors={errors}
        watch={watch}
      />

      <button type="submit" className="bg-blue-600 text-white rounded-lg px-4 py-2">
        Salvar
      </button>
    </form>
  );
};
