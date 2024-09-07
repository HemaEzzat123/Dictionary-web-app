import newWindow from "../assets/images/icon-new-window.svg";
function Searched({ data }) {
  return (
    <div>
      <h1>{data[0].word}</h1>
      {data[0].phonetic && <p>{data[0].phonetic}</p>}
      {data[0].meanings.map((meaning, index) => (
        <div key={index}>
          <h3>{meaning.partOfSpeech}</h3>
          {meaning.definitions.map((definition, index) => (
            <div>
              <li key={index}>{definition.definition}</li>
              {definition.example && <p>Example: {definition.example}</p>}
            </div>
          ))}
        </div>
      ))}
      <div>
        {data[0].sourceUrls && <p>Source: {data[0].sourceUrls[0]}</p>}
        <img src={newWindow} alt="new-window" />
      </div>
    </div>
  );
}

export default Searched;
