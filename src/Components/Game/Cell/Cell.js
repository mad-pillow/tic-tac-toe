import "./cell.scss";
import crossImg from "../cross.svg";
import zeroImg from "../zero.svg";

function Cell(props) {
  return (
    <div
      className={props.matches.includes(props.id) ? "game__cell game__cell--match" : "game__cell"}
      id={props.id}
      onClick={props.handleClick}
    >
      <img
        className="game__cell-img"
        src={props.value === "x" ? crossImg : props.value === "o" ? zeroImg : ""}
        style={{ display: props.value === "x" ? "block" : props.value === "o" ? "block" : "none" }}
        alt=""
      />
    </div>
  );
}

export default Cell;
