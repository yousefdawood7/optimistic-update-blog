import products from "@/data/products.json";
import { STATUS } from "@/constants";
import ProductCard from "@/features/products/components/product-card";

type ProductListProps = {
  products: typeof products;
};

export default function ProductList({ products }: ProductListProps) {

  return products.map((product) => (
    <ProductCard
      key={product.id}
      title={product.title}
      description={product.description}
      StatusIcon={STATUS[product.status.toUpperCase() as keyof typeof STATUS]}
    />
  ));
}
