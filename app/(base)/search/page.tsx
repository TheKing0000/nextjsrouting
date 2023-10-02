interface ISearch {
  searchParams: {
    q: string;
  };
}
export default function Search({ searchParams }: ISearch) {
  const { q } = searchParams;
  return (
    <div>
      <h1>Search: {q}</h1>
    </div>
  );
}
