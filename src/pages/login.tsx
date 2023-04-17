import AuthTitle from "@/components/Auth/AuthTitle";
import LoginForm from "@/components/Auth/LoginForm";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function login() {
  return (
    <>
      <Head>
        <title>ARTSCOPE | Log in</title>
      </Head>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              width={140}
              height={32}
              src="/artscope_logo.png"
              alt="logo"
            />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <AuthTitle title="Sign in to your account" />
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
