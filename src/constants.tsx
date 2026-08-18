import { LucideArchive, LucideCircleCheckBig, LucideClock } from "lucide-react";

export const STATUS = {
  ACTIVE: <LucideCircleCheckBig />,
  DEVELOPMENT: <LucideClock />,
  ARCHIVED: <LucideArchive />,
} as const;
