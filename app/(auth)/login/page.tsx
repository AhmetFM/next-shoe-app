import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-center h-screen px-4">
      <form className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl text-center font-medium">
          Login to your account
        </h1>
        <p className="text-sm md:text-base text-gray-600 font-light text-pretty">
          Enter your email below to login to your account
        </p>
        <input
          type="email"
          placeholder="Email"
          className="outline-none border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="outline-none border px-3 py-2 rounded"
        />
        <button className="bg-zinc-800 px-3 py-2 text-white rounded hover:bg-zinc-600 duration-200">
          Login
        </button>
        <div className="gap-1 flex items-center justify-center">
          Don&apos;t have an account?
          <Link href="/register" className="text-green-500">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
