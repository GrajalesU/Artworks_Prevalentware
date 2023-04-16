import Link from "next/link";
import React from "react";

interface HeaderRouteProps {
  src: string;
  selected?: boolean;
  text: string;
}

export default function HeaderRoute({
  src,
  selected = false,
  text,
}: HeaderRouteProps) {
  if (selected)
    return (
      <Link
        href={src}
        className="block py-2 pl-3 pr-4 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
        aria-current="page"
      >
        {text}
      </Link>
    );

  return (
    <Link
      href={src}
      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    >
      {text}
    </Link>
  );
}
