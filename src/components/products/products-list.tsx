import ProductCard from "@/components/products/product-card";
import products from "@/data/products.json";
import { STATUS } from "@/constants";

export default function ProductList() {
  return products.map((product) => (
    <ProductCard
      key={product.title}
      title={product.title}
      description={product.description}
      StatusIcon={STATUS[product.status.toUpperCase() as keyof typeof STATUS]}
    />
  ));
}
