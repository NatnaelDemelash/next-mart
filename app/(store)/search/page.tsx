export default function SearchPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = searchParams;

  return <h1>SearchPage for - {query}</h1>;
}
