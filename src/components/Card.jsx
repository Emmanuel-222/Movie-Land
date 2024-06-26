import PropTypes from "prop-types";

const Card = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string,
    Title: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
  }),
};

export default Card;
