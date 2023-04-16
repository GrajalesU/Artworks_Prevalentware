import React from "react";
import FormElement from "./FormElement";
import Link from "next/link";
import { useUserContext } from "@/context/User";
import { useRouter } from "next/router";

export default function LoginForm() {
  const { userLogin } = useUserContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const tokenResponse = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: e.currentTarget.email.value,
          password: e.currentTarget.password.value,
        }),
      });

      const token = (await tokenResponse.text()).slice(1, -1);
      if (tokenResponse.status !== 200) throw new Error(token);

      localStorage.setItem("token", token);

      const userResponse = await fetch("/api/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await userResponse.json();

      userLogin(user);
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
