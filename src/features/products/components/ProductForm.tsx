import { InputText } from "../../../components/forms/fields/InputText";
import { Select } from "../../../components/forms/fields/Select";
import { useCategories } from "../../categories/hooks/useCategories";
import { AddressForm } from "../../shared/components/AddressForm";
import { useProductFormLogic } from "../hooks/useProductFormLogic";
import type { Product } from "../types/product";

interface ProductFormProps {
  defaultValues: Partial<Product>;
  onSubmit: (data: Product) => void;
}

export const ProductForm = ({ defaultValues, onSubmit }: ProductFormProps) => {
  const { form, requiresWeight } = useProductFormLogic(defaultValues);
  const { register, handleSubmit } = form;
  const { data: categories } = useCategories();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText label="Nome" {...register("name")} />
      <InputText
        label="Preço"
        type="number"
        {...register("price", { valueAsNumber: true })}
      />

      <Select
        label="Tipo"
        {...register("type")}
        options={[
          { label: "Físico", value: "physical" },
          { label: "Digital", value: "digital" },
        ]}
      />

      {requiresWeight && (
        <InputText
          label="Peso (kg)"
          type="number"
          {...register("weight", { valueAsNumber: true })}
        />
      )}

      <Select
        label="Categoria"
        {...register("categoryId", { valueAsNumber: true })}
        options={categories.map((cat) => ({ label: cat.name, value: cat.id })) ?? []}
      />

      <fieldset className="border p-2">
        <legend className="font-semibold">Endereço do Fornecedor</legend>
        <AddressForm register={register} />
      </fieldset>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {defaultValues ? "Atualizar" : "Criar"}
      </button>
    </form>
  );
};
