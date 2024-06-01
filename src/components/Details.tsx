import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { fetchMovies } from "../store/reducers/moviesReducer";
import { fetchCast } from "../store/reducers/castReducer";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../store/store";
interface Actor {
  profile_path: string;
  name: string;
  cast_id: number;
}

interface genre {
  id: number;
  name: string;
}
const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { movies, isFetching, error } = useTypedSelector((state) => state.Movies);
  const { cast, castFetching, castError } = useTypedSelector((state) => state.Cast);

  // if the state have movies with ID
  const oneMovie = movies && !("results" in movies);

  useEffect(() => {
    dispatch(fetchMovies({ id: id }));
    if (id) {
      dispatch(fetchCast({ id }));
    }
  }, [dispatch, id]);
  return (
    <>
      {oneMovie && (
        <section className="details ">
          <div className="relative pb-10 after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-detailsGradiant">
            <img
              className="absolute w-full h-full "
              src={`https://image.tmdb.org/t/p/w400${movies.backdrop_path}`}
              alt={movies.title}
            />
            <div className="relative z-10 flex flex-wrap items-center justify-around gap-4 p-8">
              <img
                className=" aspect-square h-[400px] "
                src={`https://image.tmdb.org/t/p/w400${movies.poster_path}`}
                alt={movies.title}
              />
              <div className="text-white max-w-[350px] text-center">
                <p>{movies.overview}</p>
                <div className="mt-[80px] ">
                  Genres :{" "}
                  <p className="flex flex-wrap items-center justify-center">
                    {movies.genres &&
                      movies.genres.map((genre: genre) => (
                        <span className="m-1" key={genre.id}>
                          {genre.name}
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex justify-around my-4 text-center base">
              <Link to={"/"}>Home page</Link>
              {/* some movies doesn't have a home page */}
              {movies.homepage && <Link to={movies.homepage}>See Movie</Link>}
            </div>
          </div>

          {cast && (
            <div className="bg-[#081c2f]">
              <h1 className="relative z-10 py-10 text-6xl text-center text-white">
                Cast
              </h1>
              ;
              <div className="relative z-10 flex flex-wrap justify-center gap-4 p-4 text-white base cast">
                {cast.map((actor: Actor) => {
                  // if there is a picture for the actor
                  if (actor.profile_path) {
                    return (
                      <div key={actor.cast_id}>
                        <img
                          className=" aspect-square"
                          src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`}
                          alt={actor.name || "No name available"}
                        />
                        <p>{actor.name}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}
          {castFetching && <p>Loading...</p>}
          {castError && <p>{castError}</p>}
        </section>
      )}
      <div className="text-center">
        {error && <div>{error}</div>}
        {isFetching && <p>Loading...</p>}
      </div>
    </>
  );
};

export default MovieDetails;
