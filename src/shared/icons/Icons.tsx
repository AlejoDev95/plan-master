import * as LucideIcons from "lucide-react";
import { type ElementType } from "react";

export type IconName = keyof typeof LucideIcons;

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon = ({
  name,
  size = 20,
  color = "currentColor",
  className,
}: IconProps) => {
  const LucideIcon = LucideIcons[name] as ElementType;
  console.log({ name, LucideIcon });

  if (!LucideIcon) {
    console.warn(`Icon "${name}" is not a valid Lucide icon.`);
    return null;
  }

  return <LucideIcon size={size} color={color} className={className} />;
};
