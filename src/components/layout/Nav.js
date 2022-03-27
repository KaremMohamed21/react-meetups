import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header className='header'>
      <div className='logo'>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'> All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetup</Link>
          </li>
          <li>
            <Link to='/favorite'>Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
