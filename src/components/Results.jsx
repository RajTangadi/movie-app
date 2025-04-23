import Card from "./Card";

export default function Results({ results, isLoading }) {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {isLoading
          ? Array(10)
              .fill(0)
              .map((_, index) => <Card key={index} isLoading={true} />)
          : results?.map((result) => (
              <Card key={result.id} result={result} isLoading={false} />
            ))}
      </div>
    </div>
  );
}
