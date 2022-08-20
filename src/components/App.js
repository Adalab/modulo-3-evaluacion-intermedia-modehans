// Fichero src/components/App.js
import '../styles/App.scss';
import '../styles/core/reset.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import logo from '../images/logofriends.png';
import ls from '../services/localStorage';

function App() {
  const [dataPhrases, setDataPhrases] = useState(ls.get('data', []) || []);
  const [newPhrase, setNewPhrase] = useState({
    character: '',
    quote: '',
  });
  const [filterQuote, setFilterQuote] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('Todos');
  const [selectCharacters, setSelectCharacters] = useState(['Todos']);

  const handlefilterQuote = (ev) => {
    setFilterQuote(ev.target.value);
  };

  const handleFilterCharacter = (ev) => {
    setFilterCharacter(ev.target.value);
  };

  useEffect(() => {
    callToApi().then((response) => {
      setDataPhrases(response);
    });
  }, []);

  const unique = (arrayData) => {
    let mySet = new Set();
    arrayData.map((phrase) => mySet.add(phrase.character));
    return Array.from(mySet);
  };

  useEffect(() => {
    ls.set('data', dataPhrases);
    const arrayCharacters = unique(dataPhrases);
    console.log(arrayCharacters);
    setSelectCharacters([...selectCharacters, arrayCharacters]);
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
  const renderOptions = () => {
    return selectCharacters.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  const renderPhrases = () => {
    return dataPhrases
      .filter((phrase) => {
        return phrase.quote.toLowerCase().includes(filterQuote.toLowerCase());
      })
      .filter((phrase) => {
        if (filterCharacter === 'Todos') {
          return true;
        }
        return phrase.character === filterCharacter;
      })
      .map((phrase, index) => (
        <li key={index} className="list__phrase">
          <p className="list__phrase-quote">
            {phrase.quote}{' '}
            <span className="list__phrase-character">
              {' '}
              - {phrase.character}
            </span>
          </p>
        </li>
      ));
  };

  return (
    <div className="container">
      <header>
        <img
          className="logo"
          title="Logo Friends"
          alt="Logo Friends"
          src={logo}
        />
        <h1 className="title">Frases de Friends</h1>
      </header>
      <main className="main">
        <form className="formFilter">
          <label className="formFilter__label" htmlFor="quote">
            Filtrar por frase
          </label>
          <input
            className="formFilter__input"
            type="text"
            name="quote"
            id="quote"
            onChange={handlefilterQuote}
          ></input>
          <label className="form-filter__label" htmlFor="character">
            Filtrar por personaje
          </label>
          <select
            className="form-filter__select"
            name="character"
            id="character"
            onChange={handleFilterCharacter}
            value={filterCharacter}
          >
            {renderOptions()}
          </select>
        </form>

        <ul className="list">{renderPhrases()}</ul>

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
