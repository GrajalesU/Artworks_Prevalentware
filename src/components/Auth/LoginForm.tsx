import React from "react";
import FormElement from "./FormElement";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <FormElement
        id="email"
        label="Your email"
        name="email"
        placeholder="name@company.com"
        required={true}
        type="email"
      />
      <FormElement
        id="password"
        label="Password"
        name="password"
        placeholder="••••••••"
        required={true}
        type="password"
      />
      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign in
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          href="/signUp"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
