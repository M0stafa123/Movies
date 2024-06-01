import { Link } from "react-router-dom";

export interface CardInfo {
  id: string;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}
const Card = ({ poster_path, title, vote_average, release_date, id }: CardInfo) => {
  return (
    <div className="card">
      <img src={"https://image.tmdb.org/t/p/w400" + poster_path} alt={title} />
      <Link to={`/movie/${id}`}>
        <h1>
          <span>name:</span> {title}
        </h1>
        <p>
          <span>release date:</span> {release_date}
        </p>
        <p>
          <span>rating:</span> {vote_average}
        </p>
      </Link>
    </div>
  );
};

export default Card;
