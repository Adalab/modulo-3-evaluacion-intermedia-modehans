import '../styles/components/PhraseList.scss';

const PhraseList = (props) => {
  const phrase = props.dataPhrases
    .filter((phrase) => {
      return phrase.quote
        .toLowerCase()
        .includes(props.filterQuote.toLowerCase());
    })
    .filter((phrase) => {
      if (props.filterCharacter === 'Todos') {
        return true;
      }
      return phrase.character === props.filterCharacter;
    })
    .map((phrase, index) => (
      <li key={index} className="list__phrase">
        <p className="list__phrase-quote">
          {phrase.quote}{' '}
          <span className="list__phrase-character"> - {phrase.character}</span>
        </p>
      </li>
    ));

  return <ul className="list">{phrase}</ul>;
};
export default PhraseList;
