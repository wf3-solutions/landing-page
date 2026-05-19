import { Card } from "@/components/ui/card";
import React from "react";

type CardServiceProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function CardService({
  title,
  description,
  icon,
}: CardServiceProps) {
  return (
    <Card className="group h-full w-full p-6 border border-border/60 shadow-sm hover:shadow-2xl hover:border-secondary/60 transition-all duration-300 bg-card flex flex-col gap-3">
      <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-foreground leading-tight">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Card>
  );
}
