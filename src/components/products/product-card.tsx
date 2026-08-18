import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideTrash2, type LucideIcon } from "lucide-react";

type ProductCardProps = {
  title: string;
  description: string;
  StatusIcon: LucideIcon;
};

export default function ProductCard({
  title,
  description,
  StatusIcon,
}: ProductCardProps) {
  return (
    <div className="w-full flex justify-center gap-5">
      <Card className="max-w-125 w-full">
        <CardHeader>
          <CardTitle className="flex gap-2 text-xl items-center">
            <div className="bg-primary/10 p-2 rounded-md">
              <StatusIcon className="size-8" />
            </div>
            <p>{title}</p>
          </CardTitle>
          <CardDescription className="text-lg">{description}</CardDescription>
        </CardHeader>
      </Card>

      <Button
        variant={"ghost"}
        size={"icon-lg"}
        className={"border border-primary-foreground size-12"}
      >
        <LucideTrash2 className="size-7" />
      </Button>
    </div>
  );
}
