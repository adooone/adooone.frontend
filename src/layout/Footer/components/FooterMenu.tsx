import React from 'react';
import { footerDescription } from '~/core/meta';
import AdooButton from '~/shared/components/AdooButton/AdooButton';

const FooterMenu: React.FC = () => {
  return (
    <div className="footer">
      <div className="ft_items">
        {footerDescription.map((item, i) => (
          <AdooButton key={i} bordered caption={item.caption} />
        ))}
      </div>
    </div>
  );
};

export default FooterMenu;