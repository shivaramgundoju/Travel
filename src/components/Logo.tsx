import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="nav-logo" aria-label="Yatraa — home">
      YATRAA<span className="logo-dot" aria-hidden="true" />
    </Link>
  );
}