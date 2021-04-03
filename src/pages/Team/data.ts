import hendrix from '../../shared/assets/jimi-hendrix.jpg';
import toksik from '../../shared/assets/toksik.jpg';
import bob_ross from '../../shared/assets/BobRoss.jpg';
import krosh from '../../shared/assets/krosh.jpg';

export interface Person {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
}

const team: Person[] = [
  {
    id: 'ross',
    name: 'Bob Ross',
    position: 'Artist',
    bio: 'The greatest artist of all time',
    avatar: bob_ross,
  },
  {
    id: 'hend',
    name: 'Jimi Hendrix',
    position: 'Guitar God',
    bio: 'Greatest guitar God of all time',
    avatar: hendrix,
  },
  {
    id: 'crsh',
    name: 'Crosh McCat',
    position: 'Cat',
    bio: 'Greatest cat of all time',
    avatar: krosh,
  },
  {
    id: 'tosk',
    name: 'Toksik',
    position: 'Cat',
    bio: 'Another impressive cat in history',
    avatar: toksik,
  },
];

export default team;
