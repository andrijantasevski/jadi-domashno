import { Roboto, Bad_Script } from "@next/font/google";
import Navbar from "@components/common/Navbar/Navbar";
import Footer from "@components/common/Footer";
import { useRouter } from "next/router";

const badScript = Bad_Script({
  subsets: ["cyrillic"],
  weight: ["400"],
  variable: "--font-bad-script",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const router = useRouter();

  const isSignInSignUpPage =
    router.pathname === "/sign-in" || router.pathname === "/sign-up";
  return (
    <div
      className={`${roboto.variable} ${badScript.variable} flex min-h-screen flex-col bg-primary-50 font-roboto text-gray-900`}
    >
      {!isSignInSignUpPage && <Navbar />}
      {children}
      {!isSignInSignUpPage && <Footer />}
    </div>
  );
}
