import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Certificates from './components/Certificates';
import About from './components/About';
import Footer from './components/Footer';

export const MyContext = React.createContext();
export const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false);
  
  return (
    <MyContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

function App() {
  return (
    <MyProvider>
      <div className='App' id='outer-container'>
        <Header />
        <div id='page-wrap'>
          <Home className='component' />
          <About className='component' />
          <Certificates className='component' />
          <Footer className='component'/>
        </div>
      </div>
    </MyProvider>
  );
}

export default App;
