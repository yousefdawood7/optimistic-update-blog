import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

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
    <Card className="max-w-125 w-full">
      <CardHeader>
        <CardTitle className="flex gap-2 text-lg items-center">
          <div className="bg-primary/10 p-2 rounded-md">
            <StatusIcon className="" />
          </div>
          <p>{title}</p>
        </CardTitle>
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
