import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white shadow-md rounded-2xl p-4">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-2">{children}</div>;
}
