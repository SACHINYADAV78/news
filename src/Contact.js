import React from 'react'
import { Outlet } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import Header from './component/Header'
const Contact = ({name,age}) => {
  return <>
  {/* <Header/> */}
  {/* <header>
    <nav>
        <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
    </nav>
  </header> */}
  <Outlet/>
  <section>
    <h1>contact</h1>
    <h2>{name}</h2>
    <h2>{age}</h2>
  </section>
  </>
}

export default Contact