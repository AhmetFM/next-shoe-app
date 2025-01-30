import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-center h-screen px-4">
      <form className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl text-center font-medium">
          Register to your account
        </h1>
        <p className="text-sm md:text-base text-gray-600 font-light max-w-md text-pretty">
          Enter your information below to register to your account
        </p>
        <input
          type="text"
          placeholder="Username"
          className="outline-none border px-3 py-2 rounded"
        />
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
          Register
        </button>
        <div className="gap-1 flex items-center justify-center">
          Already have an account?&nbsp;
          <Link href="/login" className="text-green-500">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
