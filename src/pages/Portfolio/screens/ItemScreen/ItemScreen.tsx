import React from 'react';
import './ItemScreen.scss';

interface ItemScreenProps {
  heading: string;
  description: string;
}

const ItemScreen: React.FC<ItemScreenProps> = ({ heading, description }) => {
  return (
    <div className="item-screen">
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ItemScreen;
