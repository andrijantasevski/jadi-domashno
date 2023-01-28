import {
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  UserAccountIcon,
} from "@/components/icons";
import Button from "@/components/ui/Button";

const BannerTop = () => {
  return (
    <div className="bg-primary-600 py-2.5 text-sm text-primary-50">
      <div className="mx-auto flex w-11/12 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-primary-500 p-1.5">
            <MegaphoneIcon className="h-4 w-4 text-primary-50" />
          </div>
          <p>Вршиме бесплатна достава во Град Скопје.</p>
        </div>

        <div className="flex gap-2">
          <Button
            href="/about"
            intent="secondary"
            size="small"
            className="hidden md:flex"
          >
            <QuestionMarkCircleIcon className="h-4 w-4 shrink-0" />
            Како функционира
          </Button>

          <Button
            href="/account"
            intent="secondary"
            size="small"
            className="xl:hidden"
          >
            <UserAccountIcon className="h-4 w-4 shrink-0" />
            Профил
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
