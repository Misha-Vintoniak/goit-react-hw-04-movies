import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <div className={s.navigation}>
        <NavLink className={s.link} activeClassName={s.activeLink} exact to="/">
          Home
        </NavLink>

        <NavLink
          className={s.link}
          activeClassName={s.activeLink}
          exact
          to="/movies"
        >
          Movies
        </NavLink>
      </div>
    </>
  );
}
