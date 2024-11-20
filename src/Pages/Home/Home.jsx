import React,{useContext} from 'react';
import './Home.css';
import logo from '../../assets/logo_light.png';
import search from '../../assets/search.png';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Navigate } from 'react-router-dom';
const Home = () => {
  const {SearchName,setSearchName}=useContext(UserContext);
  const [input,setInput]=React.useState("");
  const navigate = useNavigate();
  const handleKey=(e)=>{
      if(e.key==='Enter'){
        setSearchName(input);
        navigate('/search');
      }
  }
  return (
    <div className="page-container">

      <div className="home">
        <div className="home-center">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <h1>Girman</h1>
          </div>
          <div className="search-bar">
            <img src={search} alt="Search Icon" />
            <input type="text"
             placeholder="Search" 
             value={input}
             onChange={(e)=>setInput(e.target.value)}
             onKeyDown={handleKey}
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

