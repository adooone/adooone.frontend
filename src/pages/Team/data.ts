export interface Person {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string | null;
}

const team: Person[] = [
  {
    id: 'ross',
    name: 'Bob Ross',
    position: 'Artist',
    bio: 'The greatest artist of all time',
    avatar: null,
  },
  {
    id: 'hend',
    name: 'Jimi Hendrix',
    position: 'Guitar God',
    bio: 'Greatest guitar God of all time',
    avatar: null,
  },
  {
    id: 'crsh',
    name: 'Crosh McCat',
    position: 'Cat',
    bio: 'Greatest cat of all time',
    avatar: null,
  },
  {
    id: 'tosk',
    name: 'Tosik',
    position: 'Cat',
    bio: 'Another impressive cat in history',
    avatar: null,
  },
];

export default team;
