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
    </form>
  );
};
export default Filter;
