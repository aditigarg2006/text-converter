import React from 'react'
import './Covert_logo.png'
import PropTypes from 'prop-types';

export default function NavBar(props) {
  return (
    <div>
          <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}>
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img src={require('./Covert_logo.png')} alt="Converter" width="30" height="30"/>
    </a>
    <a className="navbar-brand" href="/">{props.tittle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleHandle} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">{props.toggle}</label>
</div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}

NavBar.propTypes = {
    tittle: PropTypes.string,
    about: PropTypes.string
  };

NavBar.defaultProps = {
    tittle: 'Convert',
    about: 'About'
  };