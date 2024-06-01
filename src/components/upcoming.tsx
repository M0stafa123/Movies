import { useEffect, useState } from "react";
import Card from "./Card";
import { CardInfo } from "./Card";
type ClickEvent = React.MouseEvent<HTMLButtonElement>;
const navigate = (e: ClickEvent, direction: boolean) => {
  const previous = e.currentTarget.parentElement?.previousElementSibling;
  if (previous) {
    if (previous.scrollLeft % 316 === 0) {
      previous.scrollTo({
        left: direction ? previous.scrollLeft + 316 : previous.scrollLeft - 316,
        behavior: "smooth",
      });
    }
  }
};
const UpComing = () => {
  const [upComing, setUpComing] = useState<CardInfo[]>([]);
  useEffect(() => {
    let url =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9ca882c0d9271bac0450ebcb904575b0";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpComing(data.results));
  }, []);
  return (
    <section className="upcoming">
      <h1>Up Coming Movies</h1>
      <div>
        {upComing &&
          upComing.map((movie) => (
            <Card
              id={movie.id}
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          ))}
      </div>
      <section className="flex justify-between px-4 my-8">
        <button onClick={(e) => navigate(e, false)}>
          <img src="images/left-arrow.svg" alt="left-arrow" />
        </button>
        <button onClick={(e) => navigate(e, true)}>
          <img src="images/right-arrow.svg" alt="right-arrow" />
        </button>
      </section>
    </section>
  );
};

export default UpComing;
