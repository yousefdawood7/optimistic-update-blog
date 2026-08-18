import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useId } from "react";

type FormFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
};

export default function FormField({
  name,
  label,
  placeholder,
}: FormFieldProps) {
  const id = useId();

  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="text"
        name={name}
        placeholder={placeholder || ""}
        required
      />
    </>
  );
}
