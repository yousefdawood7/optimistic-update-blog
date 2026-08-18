import FormField from "@/components/form-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useId } from "react";

export function ProductForm() {
  const formId = useId();

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create Product</CardTitle>
      </CardHeader>
      <CardContent>
        <form id={formId}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <FormField
                label="Product Name"
                name="name"
                placeholder="Enter your product name"
              />

              <FormField
                label="Product Description"
                name="description"
                placeholder="Enter product's description"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button form={formId} type="submit" className="w-full">
          Create Product
        </Button>
      </CardFooter>
    </Card>
  );
}
