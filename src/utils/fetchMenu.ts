export default async function fetchMenu(query?: string) {
  const responseMenu = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/menu${query ? `?${query}` : ""}`
  );

  if (!responseMenu.ok) {
    return {
      notFound: true,
    };
  }

  const dataMenu = await responseMenu.json();

  return dataMenu;
}
