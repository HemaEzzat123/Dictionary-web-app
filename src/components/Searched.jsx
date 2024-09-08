import newWindow from "../assets/images/icon-new-window.svg";
import audioIcon from "../assets/images/icon-play.svg";

function Searched({ data }) {
  const playAudio = (audioUrl) => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    } else {
      alert("Audio not available");
    }
  };

  return (
    <div className="searched">
      <div className="word-container">
        <h1>{data[0].word}</h1>
        <div className="phonetics">
          {data[0].phonetics.map((phonetic, index) => (
            <div key={index}>
              {phonetic.audio && (
                <img
                  src={audioIcon}
                  alt="audio"
                  onClick={() => playAudio(phonetic.audio)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {data[0].phonetic && <p className="phonetic">{data[0].phonetic}</p>}

      {data[0].meanings.map((meaning, index) => (
        <div className="definition" key={index}>
          <div className="part-of-speech-container">
            <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>
            <hr />
          </div>
          <p className="meaning">Meaning</p>
          {meaning.definitions.map((definition, defIndex) => (
            <>
              <ul key={defIndex}>
                <li>{definition.definition}</li>
              </ul>
              {definition.example && (
                <p className="example">"{definition.example}"</p>
              )}
            </>
          ))}
          {meaning.synonyms.length > 0 && (
            <>
              {meaning.synonyms.map((synonym, synIndex) => (
                <p className="synonym-container" key={synIndex}>
                  Synonyms <span className="synonym">{synonym}</span>{" "}
                </p>
              ))}
            </>
          )}
        </div>
      ))}

      <hr className="divider" />

      <div className="source-container">
        {data[0].sourceUrls && (
          <div className="source">
            Source{" "}
            <a href={data[0].sourceUrls[0]} className="source-url" target="_blank" rel="noreferrer">
              {data[0].sourceUrls[0]}{" "}
              <img src={newWindow} alt="new-window" className="new-window" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Searched;
