import { Roboto, Bad_Script } from "@next/font/google";

const badScript = Bad_Script({
  subsets: ["cyrillic"],
  weight: ["400"],
  variable: "--font-bad-script",
});

const roboto = Roboto({
  subsets: ["cyrillic"],
  variable: "--font-roboto",
  weight: ["300", "400", "700"],
});

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={`${roboto.variable} ${badScript.variable} font-roboto`}>
      {children}
    </div>
  );
}
