import {useState} from 'react'
import {Link} from 'react-router-dom'

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll =()=>{
    setIsScrolled(window.scrollY === 0? false : true)
    return ()=>(window.onscroll = null)
  }
  console.log(isScrolled);
  
  return (
    <>
      <div className="hero">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/3/2019/04/Avengers-Endgame-Banner-2-de7cf60.jpg?quality=90&crop=93px,0px,1013px,675px&resize=980,654"
          alt="no internet connection"
        />
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/3/2019/04/Avengers-Endgame-Banner-2-de7cf60.jpg?quality=90&crop=93px,0px,1013px,675px&resize=980,654"
          alt="no internet connection"
        />
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/3/2019/04/Avengers-Endgame-Banner-2-de7cf60.jpg?quality=90&crop=93px,0px,1013px,675px&resize=980,654"
          alt="no internet connection"
        />
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/3/2019/04/Avengers-Endgame-Banner-2-de7cf60.jpg?quality=90&crop=93px,0px,1013px,675px&resize=980,654"
          alt="no internet connection"
        />
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/3/2019/04/Avengers-Endgame-Banner-2-de7cf60.jpg?quality=90&crop=93px,0px,1013px,675px&resize=980,654"
          alt="no internet connection"
        />

      </div>
    </>
  );
}

export default Netflix