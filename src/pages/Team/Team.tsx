import React from 'react';
import team from './data';
import Page from '~/shared/components/Page';
import styles from './team.module.scss';
import PersonCard from './components/PersonCard';

const Team: React.FC = () => {
  return (
    <Page className={styles.team} contentClassName={styles.content}>
      {/* <div className={styles.topAngleLogo}></div> */}
      <div className={styles.header}>
        <span className={styles.adooTxt}>Adooone</span>
        &nbsp;
        <span className={styles.teamTxt}> Team</span>
      </div>
      {team.map((person, id) => (
        <PersonCard
          right={id % 2 === 1}
          avRight={id % 2 === 1}
          key={person.id}
          bio={person.bio}
          name={person.name}
          position={person.position}
          avatar={person.avatar}
        />
      ))}
      <div className={styles.footer}>Every little thing gonna be allright.</div>
      {/* <div className={styles.bottomAngleLogo}></div> */}
    </Page>
  );
};

export default Team;
