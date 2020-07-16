import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HeroCard from './Components/HeroCard/HeroCard.js';
import SortField from './Components/SortField/SortField.js';

function App() {
  return (
    <div className="app_container">
      <SortField />
      <HeroCard img='https://i.pinimg.com/originals/7f/fd/eb/7ffdeb4fb29c2ba66ef700a4cece62bf.jpg' />
      <HeroCard img='https://cdna.artstation.com/p/assets/images/images/010/826/160/large/byzwa-dher-darth-maul.jpg?1526426073' />
      <HeroCard img='https://i.pinimg.com/originals/6a/c8/53/6ac853d32d625fed5f83cadd0bd541f0.jpg' />
      <HeroCard img='https://starwarstime.net/wp-content/uploads/2020/06/KOTOR2Nihilus-674x1024.jpg' />
    </div>
  );
}

export default App;
