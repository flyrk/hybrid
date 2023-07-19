import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { PageLayout } from "~/components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Toaster />
      <div className="min-h-screen">
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
