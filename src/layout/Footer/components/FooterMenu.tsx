import React from 'react';
import { footerDescription } from '~/core/meta';
import AdooButton from '~/shared/components/AdooButton/AdooButton';
import styles from './menu.module.scss';

const FooterMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      {footerDescription.map((item, i) => (
        <AdooButton key={i} bordered caption={item.caption} />
      ))}
    </div>
  );
};

export default FooterMenu;
