import { useDispatch } from "react-redux";
import { fetchMovies } from "../store/reducers/moviesReducer";
import { AppDispatch } from "../store/store";
type setAction<T> = React.Dispatch<React.SetStateAction<T>>;
const Search = ({
  setKeyWord,
  setPageCount,
}: {
  setKeyWord: setAction<string>;
  setPageCount: setAction<number>;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const onChange = async (keyword: string) => {
    if (keyword === "") {
      dispatch(fetchMovies({ search: keyword })).then(() => setPageCount(500));
    } else {
      dispatch(fetchMovies({ search: keyword })).then(({ payload }) =>
        setPageCount(payload.total_pages)
      );
    }
  };
  return (
    <>
      <input
        className="block w-11/12 p-4 mx-auto rounded-md"
        type="search"
        name="search"
        id="search"
        placeholder="Search by movie name"
        onChange={(e) => {
          onChange(e.target.value);
          setKeyWord(e.target.value);
        }}
      />
    </>
  );
};

export default Search;
