import React from 'react'
import Navbar from "../NavBar/NavBar"
import SearchForm from "../SearchForm/SearchForm"
import"./Header.css"


function Header() {
  return (
    <div className="holder">
    <header className="header">
      <Navbar/>
      <div className="header-content flex flex-c text-center text-white">
        <h2 className="header-title">
        find your book of choice.
        </h2><br/>
        <p className="header-text fs-18 fw-3">Welcome to our page! Here, you can search for your favorite book and explore new worlds of knowledge and adventure.</p>
      <SearchForm/>
      </div>
    </header>
  </div>
  )
}

export default Header