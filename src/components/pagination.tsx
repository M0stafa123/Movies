import { fetchMovies } from "../store/reducers/moviesReducer";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { AppDispatch } from "../store/store";
const Pagination = ({ pageCount, keyWord }: { pageCount: number; keyWord: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handlePageClick = ({ selected }: { selected: number }, keyWord: string) => {
    const page = selected + 1;
    if (keyWord) {
      dispatch(fetchMovies({ search: keyWord, page: page }));
    } else {
      dispatch(fetchMovies({ page: page }));
    }
  };
  return (
    <section className="select-none basis-full">
      <ReactPaginate
        className="flex items-center justify-center gap-1 py-0 my-4 md:gap-2 md:p-4"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(data) => handlePageClick(data, keyWord)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageLinkClassName="p-[3px] border border-header  md:min-w-[2.5rem] bg-pagination  text-header text-center rounded-md hover:bg-[#6F8AB7] hover:text-pagination inline-block text-xs md:text-xl"
        breakClassName="text-[#6A7FDB]"
        nextLinkClassName="p-[3px] border  border-header bg-pagination  text-header text-center rounded-md hover:bg-[#6F8AB7] hover:text-pagination text-xs md:text-xl"
        previousLinkClassName="p-[3px] border border-header bg-pagination  text-header text-center rounded-md hover:bg-[#6F8AB7] hover:text-pagination text-xs md:text-xl"
        activeLinkClassName="!text-pagination !bg-header"
      />
    </section>
  );
};

export default Pagination;
