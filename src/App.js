import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, BlogPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'
import { ThemeContext } from './contexts/ThemeContext';

import './App.css'

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const bgColor = theme.type === 'dark' ? '#0a0a0a' : '#fafafa';
    document.documentElement.style.backgroundColor = bgColor;
    document.body.style.backgroundColor = bgColor;
  }, [theme]);

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
