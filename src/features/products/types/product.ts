export interface Product {
  id?: number;
  name: string;
  type: "physical" | "digital";
  price: number;
  weight?: number;
  categoryId: number;
  supplierAddress: {
    street: string;
    city: string;
  };
}
