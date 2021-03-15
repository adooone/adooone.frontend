import React from 'react';
import styles from '../footer.module.scss';
import { footerDescription } from '~/core/meta';
import AdooButton from '~/shared/components/AdooButton/AdooButton';

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
