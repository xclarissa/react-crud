import z from "zod";

export type FieldType = "text" | "select" | "number" | "date" | "checkbox" | "email";

export type RoleType = "admin" | "user";

export interface Field {
  name: string;
  label: string;
  type: FieldType;
  options?: { label: string; value: string | number }[];
  dependsOn?: string;
  showIf?: (value: RoleType) => boolean;
}

export interface FormSchema {
  fields: Field[];
  validation: ReturnType<typeof z.object>;
}

export const userFormSchema: FormSchema = {
  fields: [
    { name: "name", label: "Nome", type: "text" },
    { name: "email", label: "Email", type: "email" },
    {
      name: "role",
      label: "Perfil",
      type: "select",
      options: [
        { label: "Administrador", value: "admin" },
        { label: "Usuário", value: "user" },
      ],
    },
    {
      name: "permissions",
      label: "Permissões extras",
      type: "text",
      dependsOn: "role",
      showIf: (role) => role === "admin",
    },
    {
      name: "isActive",
      label: "Ativo",
      type: "checkbox",
    },
  ],
  validation: z.object({
    name: z.string().min(2),
    email: z.string().email("Email inválido"),
    role: z.enum(["admin", "user"]),
    permissions: z.string().optional(),
    isActive: z.boolean(),
  }),
};
