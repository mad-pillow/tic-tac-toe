import "./game.scss";
import Cell from "./Cell/Cell";
import crossImg from "./cross.svg";
import zeroImg from "./zero.svg";

export default function Game(props) {
  return (
    <div className="game__container">
      <div className="game__player-btn-block">
        <div
          className={props.currentPlayer === "x" ? "game__player-btn game__player-btn--active" : "game__player-btn"}
          onClick={props.togglePlayer.bind(null, "x")}
        >
          <img className="game__player-btn-label" src={crossImg} alt="" />
        </div>
        <span>VS</span>
        <div
          className={props.currentPlayer === "o" ? "game__player-btn game__player-btn--active" : "game__player-btn"}
          onClick={props.togglePlayer.bind(null, "o")}
        >
          <img className="game__player-btn-label" src={zeroImg} alt="" />
        </div>
      </div>
      <div className="game__field">
        {props.game.map((row, i) => {
          return (
            <div className="game__row" key={i.toString()}>
              {row.map((item, j) => {
                const id = i.toString() + j.toString();
                return <Cell key={id} id={id} matches={props.matches} value={item} handleClick={props.handleClick} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
