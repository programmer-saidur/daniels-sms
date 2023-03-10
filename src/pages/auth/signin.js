import SideBanner from "../../components/auth/SideBanner";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sms from "/public/images/sms.png";

const signup = () => {
  return (
    <div>
      <Head>
        <title>Sign in - Daniels SMS</title>
      </Head>
      <div className="h-screen md:flex">
        <div className="lg:px-16 px-2 md:w-1/2 flex items-center justify-center flex-col relative py-6 bg-accent">
          <div className="top-8 left-6 lg:left-16   rounded-xl cursor-pointer transition-all hover:pb-1 absolute">
            <Link href="/">
              <Image src={sms} alt="Image" width={48} height={48}></Image>
            </Link>
          </div>

          <div className="bg-slate-200 p-6 rounded-lg w-full">
            <h1 className="text-3xl font-poppins text-center font-bold my-6 lg:my-6">
              Sign in
            </h1>

            <form>
              <div>
                <p className="font-semibold text-lg mb-3">Phone Number </p>
                <div className="flex justify-start items-center text-gray-600 rounded-lg border border-[#c7c7c7e8]  py-2 px-4 ">
                  <div className="inset-y-0 left-0 flex items-center pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>

                  <input
                    required
                    type="text"
                    name="Your phone"
                    className="py-2 text-sm pl-1  w-full text-primary rounded-md focus:outline-none focus:bg-white  bg-transparent focus:text-gray-900"
                    placeholder="Your phone "
                  />
                </div>
              </div>

              <br />

              <>
                <p className="font-semibold text-lg mb-4"> Password</p>
                <div className="flex justify-start items-center text-gray-600 border rounded-lg border-[#c7c7c7e8]  py-2 px-4 ">
                  <div className="inset-y-0 left-0 flex items-center pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="py-2 text-sm pl-1 w-full text-primary rounded-md focus:outline-none focus:bg-white bg-transparent focus:text-gray-900"
                    placeholder="Your password"
                    required
                  />
                </div>
              </>

              <button
                type="submit"
                className="  block mx-auto w-full rounded-lg btn lg:my-8 my-4 border bg-primary text-white text-center relative  overflow-hidden font-semibold   shadow-inner group lg:hover:bg-opacity-90 transition-all"
              >
                Sign in
              </button>
            </form>
            <div className={"divider my-6"}>OR</div>

            <div
              className={
                " flex flex-col-reverse xl:flex-row  justify-between lg:items-center mb-3"
              }
            >
              <p className="text-gray-500 font-medium my-3 lg:my-0">
                Dont have an account?{" "}
                <Link href="/auth/signup">
                  <span className="text-primary font-semibold cursor-pointer lg:hover:underline">
                    Sign up
                  </span>
                </Link>
              </p>{" "}
              <p className="text-primary font-semibold cursor-pointer lg:hover:underline">
                Forgot Password?
              </p>
            </div>
          </div>
        </div>
        <SideBanner></SideBanner>
      </div>
    </div>
  );
};

export default signup;
