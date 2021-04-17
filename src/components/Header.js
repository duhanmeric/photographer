import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="author">
        <Link to="/">JOHN DOE</Link>
      </div>
      <nav>
        <ul className="list-unstyled mb-0">
          <Link to="/">
            <li>Work</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/playlist">
            <li>Playlist</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
