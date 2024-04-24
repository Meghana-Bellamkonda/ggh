"use client";
import Navbar from "@/components/navbar";
import {
  SignIn,
  SignInButton,
  SignUp,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(isSignedIn, user, isLoaded);
  const router = useRouter();
  if (!isLoaded) {
    return <></>;
  }
  if (!isSignedIn) {
    return (
      <>
        <Navbar />
        <div className="bg-gradient-to-b from-green-400 to-blue-500 blur-[100px] -z-10 h-40"></div>
        <div className="max-w-4xl mx-auto   px-2 mt-10">
          <h1 className="text-5xl font-bold text-black text-center">
            Your Medical AI Assistant
          </h1>


          <div className="my-10 flex lg:flex-row flex-col justify-center gap-5">
            <Link href="/sign-in">
              <button className="px-4 lg:w-auto w-full font-semibold text-white bg-black hover:bg-gray-800 py-3 text-sm rounded-lg">
                Get Started
              </button>
            </Link>
            <Link href="https://github.com/Meghana-Bellamkonda/ggh">
              <button className="px-10 lg:w-auto w-full text-black border items-center justify-center bg-white py-3 text-sm rounded-lg items-center font-normal hover:bg-gray-50 flex gap-2">
                <FaGithub className="text-xl" />
                Star On GitHub
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    router.push("/chat");
  }
  return <></>;
}
