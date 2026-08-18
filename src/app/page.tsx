import { ProductForm } from "@/components/products/product-form";
import ProductList from "@/components/products/products-list";

export default function Page() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-5">
      <ProductForm />
      <ProductList />
    </section>
  );
}
