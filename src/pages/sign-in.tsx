import Button from "@/components/ui/Button";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

const SignIn: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data);

  return (
    <>
      <Head>
        <title>Најавете се</title>
      </Head>
      <div className="flex h-screen items-center justify-center">
        <div className="mx-auto flex w-11/12 max-w-lg flex-col items-center justify-center gap-4 rounded-lg border-b-2 border-primary-600 bg-gray-100 p-4 shadow-md">
          <Link href="/" className="flex flex-col items-center gap-2">
            <Image
              src="/assets/logo-jadi-domashno-bez-tekst.svg"
              alt="logo"
              width={60}
              height={60}
            />
            <h1 className="text-center text-xl font-medium text-primary-600">
              Јади домашно
            </h1>
          </Link>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-4"
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                Е-пошта
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                className="rounded-md border border-gray-300 p-2 focus:border-primary-600 focus:outline-none"
                placeholder="Е-пошта"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="sr-only">
                Лозинка
              </label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 10 })}
                id="password"
                className="rounded-md border border-gray-300 p-2 focus:border-primary-600 focus:outline-none"
                placeholder="Лозинка"
              />
            </div>
            <Button>Најавете се</Button>
          </form>

          <div>
            <p>
              Немате профил?{" "}
              <Link className="font-medium text-primary-600" href="/sign-up">
                Регистрирајте се
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
