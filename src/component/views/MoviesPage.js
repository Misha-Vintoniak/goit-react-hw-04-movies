// import { useState, useEffect } from 'react';
import Cast from './Cast';
import Reviews from './Reviews';
// import API from '../../services/fetchAPI';

export default function MoviesPage() {
  return (
    <>
      <button type="button">Go back</button>
      <div>
        <img src="" alt="" />
        <ul>
          <li>
            <p>name</p>
            <span>about</span>
          </li>
          <li>
            <p>Overview</p>
            <p>about</p>
          </li>
          <li>
            <p>Cenres</p>
            <span>about</span>
          </li>
        </ul>
      </div>
      <hr />
      <section>
        <Cast />
        <Reviews />
      </section>
      <hr />
    </>
  );
}
