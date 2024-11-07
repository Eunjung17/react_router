import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar">
          {/* navigation here */}
          <Link to="/blue">blue</Link>
          <Link to="/red">red</Link>
          <Link to="/yellow">yellow</Link>
          <Link to="/purple">purple</Link>
          <Link to="/">home</Link>
        </div>
    );
}