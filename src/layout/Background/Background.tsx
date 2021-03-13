import React from 'react';
import classnames from 'classnames';
import './Background.scss';

const AppBackground: React.FC = () => {
  return (
    <div className="AppBackground">
      <div className="backgroundImage">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/adooone-52c8a.appspot.com/o/andrew-shiau-P2HGU-mNOvg-unsplash.jpg?alt=media&token=9298a6ef-9033-4eaf-aa52-82aae1f39ca1"
          alt="error"
        />
      </div>
      <div className={classnames('backgroundEffect')}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/adooone-52c8a.appspot.com/o/effect.png?alt=media&token=622b228b-a180-44bf-a0df-e740cf01b324"
          alt="error"
        />
      </div>
    </div>
  );
};

export default AppBackground;
