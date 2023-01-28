import Image from "next/image";
import Link from "next/link";
import { EmailIcon, FacebookIcon, TwitterIcon, YouTubeIcon } from "../icons";
import Button from "../ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import IconButton from "../ui/IconButton";

interface FormInputs {
  email: string;
}

const Footer = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <footer className="bg-gray-800 py-10 font-light text-gray-50">
      <div className="mx-auto grid w-11/12 grid-cols-1 gap-5 md:grid-cols-4 lg:gap-10">
        <div className="flex flex-col justify-between">
          <div className="flex gap-4">
            <Image
              src="/assets/logo-jadi-domashno-bez-tekst.svg"
              width="60"
              height="60"
              alt="Јади домашно"
              className="self-start"
            />

            <div>
              <p className="mb-1 text-2xl">
                Јади <br /> домашно
              </p>
              <p className="font-normal">Јадете здраво. Јадете добро.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-center">
            <IconButton href="/hello">
              <TwitterIcon className="h-5 w-5 text-gray-50 hover:text-primary-600" />
            </IconButton>

            <IconButton href="/">
              <YouTubeIcon className="h-5 w-5 text-gray-50 hover:text-primary-600" />
            </IconButton>

            <IconButton href="/">
              <FacebookIcon className="h-5 w-5 text-gray-50 hover:text-primary-600" />
            </IconButton>
          </div>
        </div>

        <ul className="grid list-inside list-disc grid-cols-1 gap-1 underline">
          <li>
            <Link href="/about">За нас</Link>
          </li>

          <li>
            <Link href="/menu">Мени</Link>
          </li>

          <li>
            <Link href="/sign-up">Стани готвач</Link>
          </li>

          <li>
            <Link href="/sign-in">Најави се</Link>
          </li>

          <li>
            <Link href="/faq">ЧПП</Link>
          </li>
        </ul>

        <ul className="grid grid-cols-1 gap-1">
          <p className="font-medium">Правни</p>
          <li>
            <Link href="/about">Политика за приватност</Link>
          </li>

          <li>
            <Link href="/menu">Услови за веб страница</Link>
          </li>

          <li>
            <Link href="/sign-up">Прифатлива политика за користење</Link>
          </li>

          <li>
            <Link href="/sign-in">Политика за колачиња</Link>
          </li>

          <li>
            <Link href="/faq">Општи услови</Link>
          </li>
        </ul>

        <div className="flex flex-col items-center gap-5 text-center">
          <p>Пратете ги новостите</p>

          <EmailIcon className="h-10 w-10 text-primary-600" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-3"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Електронска пошта
              </label>
              <input
                {...register("email", { required: true })}
                className={`w-full rounded-lg px-4 py-2 text-gray-900 ${
                  errors.email ? "outline-error-500 ring-error-500" : ""
                }"}`}
                id="email"
                type="email"
                placeholder="Електронска пошта"
              />
            </div>

            <Button className="w-full font-normal" ariaLabel="Претплати се">
              <span>Претплати се</span>
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
