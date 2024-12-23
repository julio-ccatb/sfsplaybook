import { characters } from "../../data";


const Characters = () => {


  return (
    <section id="characters" className="character-section">
      <div className=""></div>
      <h1>Characters</h1>
      <div className="character-container">
        <ul className="character-grid">
          {characters.map((character) => {
            return (
              <li key={character.id} className="character">
                <a href={character.href}>
                  <img src={character.img} alt={character.name} />
                  <h2>{character.name}</h2>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Characters;
