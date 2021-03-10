import React, { useEffect } from 'react';
import classnames from 'classnames';
import './Home.sass';

const Home: React.FC = () => {
  const didMount = () => {
    // coreone.getList().then((response) => {
    //   const [{ goods }] = response.data.dr;
    //   setList(goods);
    // });
  };
  useEffect(didMount, []);

  return (
    <div className="Content">
      <div className={classnames('Home', { hidden: false })}>
        <div className="central_text">Adooone</div>
      </div>
    </div>
  );
};

export default Home;
