import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NoteMarks
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                to="/archive"
                aria-current="page"
              >
                Archieve
              </Link>
              <Link className="nav-link" to="/trash">
                Trash
              </Link>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <Link className="nav-link " to="/label">
                Label
              </Link>
              <Link className="nav-link " to="/signin">
                Login
              </Link>
              <button className="rounded " type="button">
                <span>Create Note</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export { Header };
