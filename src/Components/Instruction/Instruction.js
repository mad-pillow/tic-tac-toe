import "./instruction.scss";

export default function Instruction(props) {
  return (
    <div className="instruction__container">
      <h3 className="instruction__title">How to play:</h3>
      <ol className="instruction__list">
        <li className="instruction__item">Choose a token</li>
        <li className="instruction__item">Put chosen token to one of nine cells</li>
        <li className="instruction__item">Next player is switched automatically</li>
        <li className="instruction__item">With your opponent try to line your tokens</li>
        <li className="instruction__item">The first player who line up three tokens is the winner</li>
        <li className="instruction__item">You can line up tokens horizontally, vertically and diagonally</li>
        <li className="instruction__item">
          You can also switch player whenever you need by clicking on a token indicator above the game field
        </li>
        <li className="instruction__item">Enjoy!</li>
      </ol>
    </div>
  );
}
