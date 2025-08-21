import type {
  FieldError,
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { InputText } from "./fields/InputText";
import { Select } from "./fields/Select";
import type { FormSchema } from "../../utils/formSchemas";

interface FormFieldsRendererProps {
  schema: FormSchema;
  register: UseFormRegister<Record<string, any>>;
  errors: FieldErrors<Record<string, any>>; // se n funcionar usar FieldError
  watch: UseFormWatch<Record<string, any>>;
}

const getFieldError = (error: any): FieldError | undefined => {
  if (error && typeof error.message === "string") {
    return error as FieldError;
  }
  return undefined;
};

export const FormFieldsRenderer = ({
  schema,
  register,
  errors,
  watch,
}: FormFieldsRendererProps) => {
  console.log("Rendering fields with schema:", schema.fields);
  return (
    <>
      {schema.fields.map((field) => {
        const watchedValue = field.dependsOn ? watch(field.dependsOn) : undefined;
        if (field.dependsOn && field.showIf && !field.showIf(watchedValue)) {
          return null;
        }

        switch (field.type) {
          case "text":
          case "number":
          case "date":
            return (
              <InputText
                key={field.name}
                field={field}
                register={register}
                error={getFieldError(errors[field.name])}
              />
            );
          case "email":
            return (
              <InputText
                key={field.name}
                label={field.label}
                name={field.name}
                register={register}
                error={getFieldError(errors[field.name])}
                type={field.type}
              />
            );
          case "select":
            return (
              <Select
                key={field.name}
                field={field}
                register={register}
                error={getFieldError(errors[field.name])}
                label=""
                options={field. options || [] }
              />
            );
          case "checkbox":
            return (
              <InputText
                key={field.name}
                label={field.label}
                name={field.name}
                register={register}
                error={getFieldError(errors[field.name])}
                type="checkbox"
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};
