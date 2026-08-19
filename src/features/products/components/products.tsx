"use client";

import products from "@/data/products.json";
import { ActionType, createProduct } from "@/features/products/actions";
import ProductForm from "@/features/products/components/product-form";
import ProductList from "@/features/products/components/products-list";
import { useActionState, useOptimistic } from "react";

const initialActionState: ActionType = {
  data: products,
};

export default function Products() {
  const [state, createActionProduct, isPending] = useActionState(
    createProduct,
    initialActionState,
  );

  const [optimisticProduct, setOptimisticProduct] = useOptimistic(state);

  function handleOptimisticProduct(product: (typeof products)[number]) {
    setOptimisticProduct({ data: [{ ...product }, ...state.data] });
  }

  return (
    <>
      <ProductForm
        action={createActionProduct}
        handleOptimistic={handleOptimisticProduct}
        isPending={isPending}
      />
      <ProductList products={optimisticProduct.data} />
    </>
  );
}
