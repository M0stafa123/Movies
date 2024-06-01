import UpComing from "./upcoming";
import { fetchMovies } from "../store/reducers/moviesReducer";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { useEffect, useState } from "react";
import Card from "./Card";
import { CardInfo } from "./Card";
import Search from "./search";
import Pagination from "./pagination";
import { AppDispatch, RootState } from "../store/store";
const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { movies, isFetching, error } = useTypedSelector((state) => state.Movies);
  useEffect(() => {
    dispatch(fetchMovies({}));
  }, [dispatch]);
  const [keyWord, setKeyWord] = useState<string>("");
  const [pageCount, setPageCount] = useState<number>(500);

  // if the state have all 20 movies
  const manyMovies = movies && "results" in movies;
  return (
    <main className="*:z-10 *:relative p-4 ">
      <UpComing />
      <Search setKeyWord={setKeyWord} setPageCount={setPageCount} />
      <section className="w-full md:w-11/12 md:mx-auto">
        <h1 className="my-10 text-6xl text-center text-white">Popular Movies</h1>
        <div className="flex flex-wrap justify-center min-h-screen gap-4">
          {manyMovies &&
            movies.results &&
            movies.results.map((movie: CardInfo) => (
              <Card
                id={movie.id}
                key={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                loading="lazy"
              />
            ))}
          {isFetching && (
            <div className="text-6xl text-center text-white basis-full">Loading...</div>
          )}
          {error && <p>Error loading movies.</p>}
          {manyMovies && movies && movies.results && movies.results.length < 1 && (
            <div>No Movies...</div>
          )}
        </div>
        {manyMovies && movies && movies.total_pages > 1 && (
          <Pagination pageCount={pageCount} keyWord={keyWord} />
        )}
      </section>
    </main>
  );
};

export default Main;
