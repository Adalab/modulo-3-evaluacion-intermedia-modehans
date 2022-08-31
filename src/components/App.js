// Fichero src/components/App.js
import '../styles/App.scss';
import '../styles/core/reset.scss';

import { useEffect, useState } from 'react';
import callToApi from '../services/api';

import ls from '../services/localStorage';
import Header from './Header';
import Filters from './Filters';
import PhraseList from './PhraseList';

function App() {
  const [dataPhrases, setDataPhrases] = useState(ls.get('dataLs', []));
  const [newPhrase, setNewPhrase] = useState({
    character: '',
    quote: '',
  });
  const [filterQuote, setFilterQuote] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('Todos');
  const [selectCharacters, setSelectCharacters] = useState([]);

  const handleFilterQuote = (inputValue) => {
    setFilterQuote(inputValue);
  };

  const handleFilterCharacter = (inputValue) => {
    setFilterCharacter(inputValue);
  };

  const unique = (arrayData) => {
    let mySet = new Set();
    arrayData.forEach((phrase) => mySet.add(phrase.character));
    return Array.from(mySet);
  };

  useEffect(() => {
    if (dataPhrases.length === 0) {
      callToApi().then((response) => {
        setDataPhrases(response);
      });
    }
  });

  useEffect(() => {
    ls.set('dataLs', dataPhrases);
    const arrayCharacters = unique(dataPhrases);
    setSelectCharacters(['Todos', ...arrayCharacters]);
  }, [dataPhrases]);

  const hancleChangePhrase = (ev) => {
    setNewPhrase({ ...newPhrase, [ev.target.id]: ev.target.value });
  };

  const handleClickSavePhrase = (ev) => {
    ev.preventDefault();
    if (newPhrase.quote !== '' && newPhrase.character !== '') {
      setDataPhrases([...dataPhrases, newPhrase]);
      setNewPhrase({
        character: '',
        quote: '',
      });
    }
  };

  return (
    <div className="container">
      <Header />

      <main className="main">
        <Filters
          filterQuote={filterQuote}
          handleFilterQuote={handleFilterQuote}
          selectCharacters={selectCharacters}
          filterCharacter={filterCharacter}
          handleFilterCharacter={handleFilterCharacter}
        />

        <PhraseList
          dataPhrases={dataPhrases}
          filterQuote={filterQuote}
          filterCharacter={filterCharacter}
        />

        <form className="form" action="">
          <h2 className="form__title">Añadir nueva frase</h2>

          <label htmlFor="quote">Frase:</label>
          <input
            placeholder=""
            type="text"
            name="quote"
            id="quote"
            value={newPhrase.quote}
            onChange={hancleChangePhrase}
          />

          <label htmlFor="character" className="form__label">
            Personaje:
          </label>
          <input
            placeholder=""
            type="text"
            name="character"
            id="character"
            value={newPhrase.character}
            onChange={hancleChangePhrase}
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
