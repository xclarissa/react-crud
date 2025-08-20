import type { UseFormRegister } from "react-hook-form";
import type { Product } from "../../products/types/product";

export const AddressForm = ({ register }: { register: UseFormRegister<Product> }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <input
        {...register("supplierAddress.street")}
        placeholder="Rua"
        className="border p-2"
      />
      <input
        {...register("supplierAddress.city")}
        placeholder="Cidade"
        className="border p-2"
      />
    </div>
  );
};
