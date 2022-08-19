// Fichero src/components/App.js
import '../styles/App.scss';
import '../styles/core/reset.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
function App() {
  const [dataPhrases, setDataPhrases] = useState([]);
  useEffect(() => {
    callToApi().then((response) => {
      setDataPhrases(response);
    });
  }, []);

  const renderPhrases = () => {
    return dataPhrases.map((phrase, index) => (
      <li key={index} className="list__phrase">
        <p>
          {phrase.quote}{' '}
          <span className="list__phrase-character"> - {phrase.character}</span>
        </p>
      </li>
    ));
  };

  return (
    <div className="container">
      <header>
        <h1 className="title">Frases de Friends</h1>
      </header>
      <main>
        <ul className="list">{renderPhrases()}</ul>
      </main>
    </div>
  );
}

export default App;
