import React from "react";

export default function AuthTitle({ title }: { title: string }) {
  return (
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      {title}
    </h1>
  );
}
