// import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import API from '../../services/fetchAPI';

export default function HomePage() {
  // const [movie, setMovie] = useState(null);
  // const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(0);

  // useEffect(() => {
  //   const getDate = async () => {
  //     try {
  //       const { totalPage } = await API.getTrending(page);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getDate();
  // }, [page]);
  return (
    <>
      <nav>
        <h2>Trending today</h2>
      </nav>
    </>
  );
}
