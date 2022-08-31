import '../styles/components/Filters.scss';

const Filter = (props) => {
  const renderOptions = () => {
    return props.selectCharacters.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  const handleChangeInput = (ev) => {
    props.handleFilterQuote(ev.target.value);
  };
  const handleChange = (ev) => {
    props.handleFilterCharacter(ev.target.value);
  };
  return (
    <form className="formFilter">
      <div>
        <label className="formFilter__label" htmlFor="quote">
          Filtrar por frase
        </label>
        <input
          type="text"
          name="quote"
          id="quote"
          value={props.filterQuote}
          onChange={handleChangeInput}
        ></input>
      </div>
      <div>
        <label className="formFilter__label" htmlFor="character">
          Filtrar por personaje
        </label>
        <select
          name="character"
          id="character"
          onChange={handleChange}
          value={props.filterCharacter}
        >
          {renderOptions()}
        </select>
      </div>
    </form>
  );
};

export default Filter;
