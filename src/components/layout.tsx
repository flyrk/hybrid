// import { SignInButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";

export const PageHeader = () => {
  // const { user, isLoaded: userLoaded, isSignedIn } = useUser();

  // if (!userLoaded) return <div />;

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-27 bg-black shadow-md border-b-2 border-green-200 z-50">
      <div className="conta py-4 px-4 w-full h-full flex justify-between items-center">
        <div className="header-left flex text-slate-50 items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image src="/assets/hybrid_logo.png" alt="logo" width="302" height="68" />
          </Link>
        </div>
        <div className="header-right flex justify-center mr-18.1">
          <Link href="/contact" className="bg-gradient-to-b from-green-head to-blue-head h-16.75 w-83 rounded-md text-white flex justify-center items-center text-2xl font-bold">
            立即预约获取限时折扣
          </Link>
        </div>

      </div>
    </header>
  );
};

export const PageLayout = (props: PropsWithChildren) => {

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <PageHeader />
      <main className="flex-grow pt-24 bg-black-basic h-screen">{props.children}</main>
      {/* <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p>© 2023 - Your Company Name</p>
        </div>
      </footer> */}
    </div>
  );
};
