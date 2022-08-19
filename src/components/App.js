// Fichero src/components/App.js
import '../styles/App.scss';
import '../styles/core/reset.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
function App() {
  const [dataPhrases, setDataPhrases] = useState([]);
  const [newQuote, setNewQuote] = useState('');
  const [newCharacter, setNewCharacter] = useState('');

  useEffect(() => {
    callToApi().then((response) => {
      setDataPhrases(response);
    });
  }, []);

  const hancleChangeQuote = (ev) => {
    setNewQuote(ev.target.value);
  };
  const hancleChangeCharacter = (ev) => {
    setNewCharacter(ev.target.value);
  };

  const handleClickSavePhrase = () => {
    const newPhrase = {
      character: newCharacter,
      quote: newQuote,
    };
    setDataPhrases([...dataPhrases, newPhrase]);
    setNewCharacter('');
    setNewQuote('');
  };

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
      <main className="main">
        <ul className="list">{renderPhrases()}</ul>

        <form className="form" action="">
          <h2 className="form__title">Añadir nueva frase</h2>

          <label htmlFor="newQuote">Frase:</label>
          <input
            placeholder=""
            type="text"
            name="newQuote"
            id="newQuote"
            value={newQuote}
            onChange={hancleChangeQuote}
          />

          <label htmlFor="newCharacter" className="form__label">
            Personaje:
          </label>
          <input
            placeholder=""
            type="text"
            name="newCharacter"
            id="newCharacter"
            value={newCharacter}
            onChange={hancleChangeCharacter}
          />
          <input
            className="form__btn"
            type="button"
            value="Guardar"
            onClick={handleClickSavePhrase}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
