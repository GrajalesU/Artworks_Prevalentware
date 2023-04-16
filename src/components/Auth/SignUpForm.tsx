import React, { useState } from "react";
import FormElement from "./FormElement";
import { useUserContext } from "@/context/User";
import { useRouter } from "next/router";

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const { userSignUp } = useUserContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const tokenResponse = await fetch("/api/auth/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: e.currentTarget.email.value,
          name: e.currentTarget.username.value,
        }),
      });
      const token = (await tokenResponse.text()).slice(1, -1);
      if (tokenResponse.status !== 201) throw new Error(token);

      localStorage.setItem("token", token);

      const userResponse = await fetch("/api/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await userResponse.json();

      userSignUp(user);
      router.push("/");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
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
        id="username"
        label="Name"
        name="username"
        placeholder="John Doe"
        required={true}
        type="text"
      />
      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign Up"}
      </button>
    </form>
  );
}
