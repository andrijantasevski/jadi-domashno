import Image from "next/image";
import Link from "@components/ui/Link";
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
    <footer className="mt-auto bg-gray-800 py-8 font-light text-gray-50 lg:py-10">
      <div className="mx-auto grid w-11/12 max-w-screen-2xl grid-cols-1 gap-5 md:grid-cols-4 lg:gap-10">
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

          <div className="hidden items-center gap-3 self-center lg:flex">
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

        <ul className="grid list-inside list-disc grid-cols-1 gap-1">
          <li>
            <Link intent="light" underlined href="/how-it-functions/foodies">
              За нас
            </Link>
          </li>

          <li>
            <Link intent="light" underlined href="/menu">
              Мени
            </Link>
          </li>

          <li>
            <Link intent="light" underlined href="/sign-up">
              Стани готвач
            </Link>
          </li>

          <li>
            <Link intent="light" underlined href="/sign-in">
              Најавете се
            </Link>
          </li>

          <li>
            <Link intent="light" underlined href="/">
              ЧПП
            </Link>
          </li>
        </ul>

        <ul className="grid grid-cols-1 gap-1">
          <p className="font-medium">Правни</p>
          <li>
            <Link intent="light" href="/">
              Политика за приватност
            </Link>
          </li>

          <li>
            <Link intent="light" href="/">
              Услови за веб страница
            </Link>
          </li>

          <li>
            <Link intent="light" href="/">
              Прифатлива политика за користење
            </Link>
          </li>

          <li>
            <Link intent="light" href="/">
              Политика за колачиња
            </Link>
          </li>

          <li>
            <Link intent="light" href="/">
              Општи услови
            </Link>
          </li>
        </ul>

        <div className="flex w-full flex-col items-center gap-5 text-center">
          <p className="font-normal">Пратете ги новостите</p>

          <EmailIcon className="h-10 w-10 text-primary-600" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid w-full grid-cols-1 gap-3"
          >
            <div className="grid grid-cols-1 gap-2">
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
              {errors.email && (
                <p className="text-red-500">Внесете ја вашата е-пошта.</p>
              )}
            </div>

            <Button className="w-full font-normal" ariaLabel="Претплати се">
              <span>Претплатете се</span>
            </Button>
          </form>
        </div>

        <div className="flex w-full items-center justify-center gap-3 lg:hidden">
          <IconButton href="/">
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
    </footer>
  );
};

export default Footer;
