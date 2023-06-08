import React from 'react'
import {AiOutlineLogout} from 'react-icons/ai'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TopNav = () => {
    const navLinks = [
        {name: 'HomePage', link: '/'},
        {name: 'Tv Show', link: '/tv'},
        {name: 'My List', link: '/mylist'},
        {name: 'Movies', link: '/movies'},
    ]
  return (
    <NavContainer>
      <div className="leftSide">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
            alt="No Internet connection"
          />
        </div>
        <ul className="links">
            {navLinks.map(({name, link})=>{
                  return(
                    <li key={name}>
                        <Link to={link}>{name}</Link>
                    </li>
                  )
            })}
        </ul>
      </div>
      <div className="rightSide">
        <button>
          <AiOutlineLogout />
        </button>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.div`
    
`

export default TopNav