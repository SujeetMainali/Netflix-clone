
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
  background-color: #434141;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid green; */
  .leftSide {
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .logo {
      img {
        margin: 2rem;
        height: 2rem;
        cursor: pointer;
      }
    }
    .links {
      display: flex;
      justify-content: space-between;
      list-style: none;
    }
    .links li {
      margin-left: 2rem;
    }
  }
  .rightSide {
    /* border: 2px solid purple; */
    button{
      height: 2rem;
      margin: 1rem;
      /* border-radius: 2px; */
    }
  }
`;

export default TopNav