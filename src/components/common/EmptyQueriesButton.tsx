import { useRouter } from "next/router";
import Button from "../ui/Button";

interface Props {
  pathname: string;
}

const EmptyQueriesButton = ({ pathname }: Props) => {
  const router = useRouter();

  const areThereQueries = Object.keys(router.query).length >= 1;

  const emptyQueries = () => {
    router.push(
      {
        pathname,
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <>
      {areThereQueries && (
        <Button onClick={emptyQueries} intent="outline" size="small">
          Испразнете го филтерот
        </Button>
      )}
    </>
  );
};

export default EmptyQueriesButton;
