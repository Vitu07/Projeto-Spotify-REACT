import { useState } from 'react';
import './App.css';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Sidebar from './componentes/Sidebar/Sidebar';

function App() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <div>
      <Sidebar />
      <Header setIsSearchActive={setIsSearchActive} />
      <Main isSearchActive={isSearchActive} />
      <Footer />
    </div>
  );
}

export default App;