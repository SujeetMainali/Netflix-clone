import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase.config";

interface topNavProps{
  isScrolled: boolean
}

const TopNav = (props: topNavProps) => {
  const navLinks = [
    { name: "HomePage", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });
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
          {navLinks.map(({ name, link }) => {
            return (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="rightSide">
        <button onClick={() => signOut(firebaseAuth)}>
          <AiOutlineLogout />
        </button>
      </div>
    </NavContainer>
  );
};

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
        cursor: default;
      }
    }
    .links {
      display: flex;
      justify-content: space-between;
      list-style: none;
      /* cursor: pointer; */
    }
    .links li {
      margin-left: 2rem;
      cursor: default;
      color: white;
    }
    Links{
      color:  white;
    }
  }
  .rightSide {
    /* border: 2px solid purple; */
    color: red;
    margin-right: 2rem;
    button {
      height: 2rem;
      color: black;
      margin: 1rem;
      background-color: red;
      width: 4rem;
      border-radius: 5px;
      font-size: large;
      font-weight: 50px;
      text-align: center;
      
    }
  }
`;

export default TopNav;
