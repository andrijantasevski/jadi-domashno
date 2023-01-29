import dynamic from "next/dynamic";
import { Roboto, Bad_Script } from "@next/font/google";
const Navbar = dynamic(() => import("@components/common/Navbar/Navbar"));
const Footer = dynamic(() => import("@components/common/Footer"));

const badScript = Bad_Script({
  subsets: ["cyrillic"],
  weight: ["400"],
  variable: "--font-bad-script",
});

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "700"],
});

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div
      className={`${roboto.variable} ${badScript.variable} bg-primary-50 font-roboto`}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
