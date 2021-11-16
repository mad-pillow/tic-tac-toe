import "./modal.scss";

export default function Modal(props) {
  return (
    <div className={props.isVisible ? "modal" : "modal modal--hidden"} onClick={props.toggleModal}>
      <div className="modal__window">
        <h3 className="modal__title">Congratulations!</h3>
        <p className="modal__text">{props.winner ? props.winner.toUpperCase() : "Nobody yet"} is the winner!</p>
        <p className="modal__text">
          If you like to play again press{" "}
          <span className="modal__play-btn" onClick={props.handleClick}>
            here
          </span>
        </p>
      </div>
    </div>
  );
}
