"use client";

import FormField from "@/components/form-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { useId } from "react";

import type data from "@/data/products.json";
import products from "@/data/products.json";

type ProductFormProps = {
  action: (formData: (typeof products)[number]) => void;
  handleOptimistic: (product: (typeof data)[number]) => void;
  isPending: boolean;
};

export default function ProductForm({
  action,
  handleOptimistic,
  isPending,
}: ProductFormProps) {
  const formId = useId();

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create Product</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action={async (formData) => {
            const formObject = Object.fromEntries(
              formData,
            ) as (typeof products)[number];

            const newProduct = {
              id: crypto.randomUUID(),
              title: formObject.title,
              description: formObject.description,
              status: formObject.status,
            };

            handleOptimistic(newProduct);
            action(newProduct);
          }}
          id={formId}
        >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <FormField
                label="Product Name"
                name="title"
                placeholder="Enter your product name"
              />
              <FormField
                label="Product Description"
                name="description"
                placeholder="Enter product's description"
              />
              <Label htmlFor="status">Status</Label>
              <Select id="status" name="status">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={"active"}>Active</SelectItem>
                    <SelectItem value={"development"}>Development</SelectItem>
                    <SelectItem value={"archived"}>Archived</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          form={formId}
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Spinner />
              Create Product
            </>
          ) : (
            "Create Product"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
