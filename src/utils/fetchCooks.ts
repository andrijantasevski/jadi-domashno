export default async function fetchCooks(query?: string) {
  const responseCooks = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/cooks${
      query ? `${query}` : "?limit=12"
    }`
  );

  if (!responseCooks.ok) {
    return {
      notFound: true,
    };
  }

  const dataCooks = await responseCooks.json();

  return dataCooks;
}
