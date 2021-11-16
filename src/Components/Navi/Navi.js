import { HashRouter, NavLink } from "react-router-dom";
import "./navi.scss";

export default function Navi(props) {
  return (
    <HashRouter>
      <div className="navi__container">
        <ul className="navi__list">
          <li className="navi__item">
            <NavLink className="navi__link" exact to="/">
              Game
            </NavLink>
          </li>
          <li className="navi__item">
            <span className="navi__bullet-point"></span>
          </li>
          <li className="navi__item">
            <NavLink className="navi__link" to="/instruction">
              Instruction
            </NavLink>
          </li>
          <li className="navi__item">
            <span className="navi__bullet-point"></span>
          </li>
          <li className="navi__item">
            <NavLink className="navi__link navi__link--reload" to="/" onClick={props.handleReload}>
              Play again
            </NavLink>
          </li>
        </ul>
      </div>
    </HashRouter>
  );
}
