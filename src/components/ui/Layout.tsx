import { Roboto, Bad_Script } from "@next/font/google";
import Navbar from "@components/common/Navbar/Navbar";
import Footer from "@components/common/Footer";

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
