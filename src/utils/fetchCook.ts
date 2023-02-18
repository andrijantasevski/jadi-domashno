export default async function fetchCook(cookId: string) {
  const responseCook = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/cooks/${cookId}`
  );

  if (!responseCook.ok) {
    return {
      notFound: true,
    };
  }

  const dataCook = await responseCook.json();

  return dataCook;
}
