import styled from "styled-components";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
const SignUpPage = () => {
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies, Tv shows and more...</h1>
            <h4>Watch anywhere, cancel anytime</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input type="password" placeholder="password" name="password" />
            <input type="email" placeholder="email" name="email" />
            <button>Get Started</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.79);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
  }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: white;
  }
  h1{
    padding: 0 25rem;

  }
  h4{
    margin-top: -1.5rem;
  }

`;

export default SignUpPage;
