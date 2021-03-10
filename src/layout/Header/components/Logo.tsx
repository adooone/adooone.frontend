import React from 'react';
// import {
//     CORE_HOST_LOCAL,
//     CORE_HOST_STAGE,
//     CORE_HOST_PROD,
// } from '../../../../constants/environment';

const Logo: React.FC = () => {
  return (
    <div role="presentation" className="logo">
      <div className="ooosvg">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/adooone-52c8a.appspot.com/o/ooo.svg?alt=media&token=4171778a-012a-49d4-aad7-8997678b7acf"
          alt="logo"
        />
      </div>
      {/* {process.env.CORE_HOST === CORE_HOST_LOCAL && 'Adooone Local'}
            {process.env.CORE_HOST === CORE_HOST_STAGE && 'Adooone Stage'}
            {process.env.CORE_HOST === CORE_HOST_PROD && 'Adooone'} */}
      Adooone
    </div>
  );
};

export default Logo;
