export default async function fetchMenu(query?: string) {
  const responseMenu = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/menu${
      query ? `${query}` : "?currentDay=0&limit=12&page=1"
    }`
  );

  if (!responseMenu.ok) {
    return {
      notFound: true,
    };
  }

  const dataMenu = await responseMenu.json();

  return dataMenu;
}
