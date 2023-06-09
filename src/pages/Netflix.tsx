import { useState } from "react";
import TopNav from "../components/TopNav";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  // console.log(isScrolled);

  return (
    <>
      <HeroContainer>
        <div className="hero">
          <TopNav isScrolled={isScrolled} />
          <div className="background-image">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/3/2019/04/Avengers-Endgame-Banner-2-de7cf60.jpg?quality=90&crop=93px,0px,1013px,675px&resize=980,654"
              alt="no internet connection"
            />
          </div>

          <div className="container">
            <div className="title">
              <h1>Super Man</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                nobis nemo, aperiam voluptates veritatis molestiae repellendus
                repellat omnis, obcaecati, ea iure animi. Qui, ipsum cumque.
                Consequatur doloribus dolore aliquam sequi architecto voluptas,
                porro excepturi?
              </p>
            </div>
            <div className="buttons">
              <button className="playBtn">Play</button>
              <button className="moreBtn">More</button>
            </div>
          </div>
        </div>
      </HeroContainer>
    </>
  );
};
const HeroContainer = styled.div`
f

  .hero {
    position: relative;
    .background-image{
      filter: brightness(40%);
    }
    .background-image img {
      object-fit: cover;
      height: 70vh;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          margin-left: 5rem;
          width: 640px;
          color: white;
          font-family: "lexend Deca", sans-serif;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }
      .playBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
      }
      .moreBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
        border: 0.1rem solid white;

      }
    }
  }
`;
export default Netflix;
