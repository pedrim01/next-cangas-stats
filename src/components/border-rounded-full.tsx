import React from "react";

interface BorderRoundedFullProps {
  bgColor: string;
  className?: string;
}

export default function BorderRoundedFull({ bgColor }: BorderRoundedFullProps) {
  return <span className={`h-3 w-3 p-1 ${bgColor} rounded-full`} />;
}
