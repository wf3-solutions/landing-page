import { Card, CardDescription } from "@/components/ui/card";
import React from "react";

type CardServiceProps = {
  title: string;
  icon: React.ReactNode;
};

export default function CardService({ title, icon }: CardServiceProps) {
  return (
    <Card className="w-full  p-6 border-none shadow-xl hover:scale-110 transition-transform duration-300 flex items-center md:items-start  bg-card hover:bg-card/90">
      <CardDescription className="flex items-center gap-2 text-lg font-bold">
        {icon}
        {title}
      </CardDescription>
    </Card>
  );
}
