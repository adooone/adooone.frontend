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
    avatar: 'http://vertex-art.ru/wp-content/uploads/portretvizo_.jpg',
  },
  {
    id: 'hend',
    name: 'Jimi Hendrix',
    position: 'Guitar God',
    bio: 'Greatest guitar God of all time',
    avatar:
      'https://veryimportantlot.com/uploads/over/files/%D0%9C%D0%B0%D0%B9%20%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F%209%20(1)%20%D0%9B%D0%B5%D0%BE%D0%BD%D0%B0%D1%80%D0%B4%D0%BE%20%D0%B4%D0%B0%20%D0%92%D0%B8%D0%BD%D1%87%D0%B8.%20%D0%9C%D0%BE%D0%BD%D0%B0%20%D0%9B%D0%B8%D0%B7%D0%B0.jpg',
  },
  {
    id: 'crsh',
    name: 'Crosh McCat',
    position: 'Cat',
    bio: 'Greatest cat of all time',
    avatar: 'http://vertex-art.ru/wp-content/uploads/historic_.jpg',
  },
  {
    id: 'tosk',
    name: 'Toksik',
    position: 'Cat',
    bio: 'Another impressive cat in history',
    avatar:
      'https://pushkinmuseum.art/data/fonds/photo/hf/103/11232_foto_1_03.jpg',
  },
];

export default team;
