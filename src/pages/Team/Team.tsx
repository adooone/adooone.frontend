import React from 'react';
import team from './data';
import Page from '~/shared/components/Page';
import styles from './team.module.scss';
import PersonCard from './components/PersonCard';
import Branding from '~/shared/components/Brand';

const Team: React.FC = () => {
  return (
    <Page
      animation="slide"
      className={styles.team}
      contentClassName={styles.content}
    >
      <div className={styles.topBranding}>
        <Branding />
      </div>
      <div className={styles.header}>
        <span className={styles.adooTxt}>Adooone</span>
        &nbsp;
        <span className={styles.teamTxt}>Team</span>
      </div>
      {team.map((person, index) => (
        <PersonCard
          right={index % 2 === 1}
          avRight={index % 2 === 1}
          index={index}
          key={person.id}
          bio={person.bio}
          name={person.name}
          position={person.position}
          avatar={person.avatar}
        />
      ))}
      <p className={styles.footer}>Every little thing gonna be allright.</p>
      <div className={styles.bottomBranding}>
        <Branding />
      </div>
    </Page>
  );
};

export default Team;
