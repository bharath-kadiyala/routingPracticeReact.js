import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-con">
        <div className="log-con">
          <img
            className="img-sty"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
          />
          <p className="log-pera">Wave</p>
        </div>
        <ul className="unOrderList-con">
          <li className="log-pera additional">
            <Link to="/" className="linked-things">
              Home
            </Link>
          </li>
          <li className="log-pera additional">
            <Link to="/about" className="linked-things">
              About
            </Link>
          </li>
          <li className="log-pera additional">
            <Link to="/contact" className="linked-things">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
