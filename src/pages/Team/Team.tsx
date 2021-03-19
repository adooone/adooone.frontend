import React from 'react';
import team from './data';
import Page from '~/shared/components/Page';
import styles from './team.module.scss';
import PersonCard from './components/PersonCard';

const Team: React.FC = () => {
  return (
    <Page className={styles.team} contentClassName={styles.content}>
      {team.map((person, id) => (
        <PersonCard
          right={id % 2 === 1}
          key={person.id}
          bio={person.bio}
          name={person.name}
          position={person.position}
        />
      ))}
    </Page>
  );
};

export default Team;
