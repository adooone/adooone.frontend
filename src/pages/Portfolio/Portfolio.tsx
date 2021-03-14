import React from 'react';
import { portfolio } from './items';
import Page from '~/shared/components/Page';
import './Portfolio.scss';
import { ItemScreen } from './screens';

const Portfolio: React.FC = () => {
  return (
    <Page className="portfolio-page" contentClassName="portfolio-content">
      {portfolio.map((item) => (
        <ItemScreen key={item.id} heading={item.caption} description={item.description} />
      ))}
    </Page>
  );
};

export default Portfolio;
