// import { SignInButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";

export const PageHeader = () => {
  // const { user, isLoaded: userLoaded, isSignedIn } = useUser();

  // if (!userLoaded) return <div />;

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-27 bg-slate-250 shadow-md border-b-2 border-orange-main z-50">
      <div className="conta py-4 px-4 w-full h-full flex justify-between items-center">
        <div className="header-left flex text-slate-50 items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Image src="/assets/hybrid_logo.png" alt="logo" width="61" height="86" />
            <Image src="/assets/hybrid_logo_text.png" alt="logo_text" width="302" height="68" />
          </Link>
        </div>
        <div className="header-right flex justify-center mr-18.1">
          <Link href="/contact" className="bg-orange-main h-16.75 w-83 rounded-md text-black flex justify-center items-center text-2xl font-bold">
            立即预约获取限时折扣
          </Link>
        </div>

      </div>
    </header>
  );
};

export const PageLayout = (props: PropsWithChildren) => {

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader />
      <main className="flex-grow pt-24 bg-gradient-to-b from-white to-white-transparent min-w-max h-screen">{props.children}</main>
      {/* <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p>© 2023 - Your Company Name</p>
        </div>
      </footer> */}
    </div>
  );
};
