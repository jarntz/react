import React, { useEffect } from 'react';

// External
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import Home from './pages/Home';

// Components

// Core
import Scroll from './core/Scroll';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="app">
      <Router>
        <Scroll>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Scroll>
      </Router>
    </div>
  );
};

export default App;
