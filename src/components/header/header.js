import React from 'react';
import './headStyle.css';

    const Header = props => (
        <div className="header">
          <div className="title">Clicky Game</div>
          <div className="scores">
            Score: {props.score} 
            Highscore: {props.highscore}
          </div>
        </div>
      );
  
  
  export default Header;