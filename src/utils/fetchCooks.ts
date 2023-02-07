export default async function fetchCooks(query?: string) {
  if (query) {
    const responseCooks = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/cooks?${query}`
    );
    const dataCooks = await responseCooks.json();

    return dataCooks;
  }

  const responseCooks = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cooks`);
  const dataCooks = await responseCooks.json();
  return dataCooks;
}
