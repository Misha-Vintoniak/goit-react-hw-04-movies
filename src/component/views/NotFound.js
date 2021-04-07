import { NavLink } from 'react-router-dom';
export default function NotFound() {
  const handleCkickHome = () => {
    <NavLink to="/"></NavLink>;
  };
  return (
    <>
      <button onClick={handleCkickHome} type="button">
        Go home
      </button>
      <h2>404 Please, try find movies again</h2>
    </>
  );
}
