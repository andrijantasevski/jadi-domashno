import { MegaphoneIcon, UserAccountIcon } from "@/components/icons";
import Button from "@/components/ui/Button";

const BannerTop = () => {
  return (
    <div className="bg-orange-600 py-2 text-sm text-orange-50">
      <div className="mx-auto flex w-11/12 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-orange-500 p-1.5">
            <MegaphoneIcon className="h-4 w-4 text-orange-50" />
          </div>
          <p>Вршиме бесплатна достава во Град Скопје.</p>
        </div>

        <Button href="/account" intent="secondary" size="small">
          <UserAccountIcon className="h-4 w-4 shrink-0" />
          Профил
        </Button>
      </div>
    </div>
  );
};

export default BannerTop;
