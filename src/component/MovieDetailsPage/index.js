import { NavLink } from 'react-router-dom';

const MovieDetailsPage = ({ id }) => {
  return (
    <>
      {id === null ? (
        <p>Пошук</p>
      ) : (
        <>
          <p>Movies</p>
          {/* <MoviesItem /> */}
          <section>
            <NavLink exact to="/">
              {/* <Cast /> */}
            </NavLink>

            <NavLink exact to="/movies">
              {/* <Reviews /> */}
            </NavLink>
          </section>
          <hr />
        </>
      )}
    </>
  );
  // <>
  //   {id === null ? (
  //     <p>Пошук</p>
  //   ) : (
  //     <>
  //       <p>Movies</p>
  //       <MoviesItem />
  //       <section>
  //         <NavLink exact to="/">
  //           {/* <Cast /> */}
  //         </NavLink>

  //         <NavLink exact to="/movies">
  //           {/* <Reviews /> */}
  //         </NavLink>
  //       </section>
  //       <hr />
  //     </>
  //   )}
  // </>
};
export default MovieDetailsPage;

/*<nav>
  <NavLink to="/movies/:movieId">About</NavLink>
  <NavLink to="/movies/:movieId/cast">Cast</NavLink>
  <NavLink to="/movies/:movieId/reviews">Reviews</NavLink> 
  <div>Info movies</div>
</nav>*/
