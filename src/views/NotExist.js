import { Link } from "react-router-dom";

export default function NotExist() {
  return (
    <section className="error-section">
      <div className="error-wrapper">
        <div className="error-title">
          This page <br /> does not exist!
        </div>
        <h1 className="error-code my-4">
          4<span className="zero">0</span>4
        </h1>
        <Link to="/">
          <button className="back-btn">Go Home</button>
        </Link>
      </div>
    </section>
  );
}
