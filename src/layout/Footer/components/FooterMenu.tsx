import React from 'react';
import map from 'lodash/map';
import { FooterDescription } from '~/core/meta';
import AdooButton from '~/shared/components/AdooButton/AdooButton';

const FooterMenu: React.FC = () => {
  return (
    <div className="footer">
      <div className="ft_items">
        {map(FooterDescription, (item, i) => (
          <AdooButton key={i} bordered caption={item.caption} />
        ))}
      </div>
    </div>
  );
};

export default FooterMenu;
