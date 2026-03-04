import Card from "../components/Card";

const MovieList = () => {
  return (
    <main>
      <section className="max-w-7xl max-auto py-7">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card/>
        </div>
      </section>
    </main>
  );
}

export default MovieList
