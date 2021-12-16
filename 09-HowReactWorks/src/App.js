import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggele, setAllowToggele] = useState(false);
  console.log(' APP RUNNING...')
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggele) {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph); 
    }
  }, [allowToggele]);

  const allowTogglerHandler = () => {
    setAllowToggele(true);
  }
  return (
    <div>
      <div className="app">
        <h1>Hi there!</h1>
        <Button onClick={allowTogglerHandler}>Allow Toggeling.</Button>
        <Button onClick={toggleParagraphHandler}>Toggle Paragraph.</Button>
      </div>
      <div className="app">
        <DemoOutput show={showParagraph} />
      </div>
    </div>
  );
}

export default App;
