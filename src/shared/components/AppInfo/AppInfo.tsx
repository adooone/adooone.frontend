import React from 'react';
import useGlobal from '~/core/store/store';
import './AppInfo.scss';

const AppInfo: React.FC = () => {
  const [store] = useGlobal();

  return (
    <div className="appdata">
      <div>
        <div className="appname">frontend</div>
        <div className="version">{`v${store.app.front.version}`}</div>
        <div className="environment">local env</div>
      </div>
      <div>
        <div className="appname">backend</div>
        {store.app.core.version ? (
          <div className="version">{`v${store.app.core.version}`}</div>
        ) : (
          <div className="version">not connected</div>
        )}
      </div>
    </div>
  );
};

export default AppInfo;
