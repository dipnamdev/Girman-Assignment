import './App.css'
import {Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SearchResults from './Pages/SearchResults/SearchResults';
import NavigationBar from './Pages/Navigation/NavigationBar';
import UserContextProvider from './context/UserContext';
function App() {

  return (

    <UserContextProvider>
      <div className='app'>
        <NavigationBar/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/search' element ={<SearchResults/>}/>         
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App
