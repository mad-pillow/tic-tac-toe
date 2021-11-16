import React, { Component } from "react";
import Modal from "./Components/Modal/Modal";
import Header from "./Components/Header/Header";
import Navi from "./Components/Navi/Navi";
import Game from "./Components/Game/Game";
import Instruction from "./Components/Instruction/Instruction";
import Footer from "./Components/Footer/Footer";
import "./app.scss";
import { HashRouter, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      modal: false,
      game: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      currentPlayer: "x",
      winner: null,
      matches: [],
    };

    this.state = JSON.parse(JSON.stringify(this.initialState));

    this.handleClick = this.handleClick.bind(this);
    this.togglePlayer = this.togglePlayer.bind(this);
    this.checkGame = this.checkGame.bind(this);
    this.handleReload = this.handleReload.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleClick(e) {
    if (this.state.winner) {
      return;
    }
    const x = e.currentTarget.id[0];
    const y = e.currentTarget.id[1];
    const newGameState = Array.from(this.state.game);
    if (!newGameState[x][y]) {
      newGameState[x][y] = this.state.currentPlayer;
      this.togglePlayer();
    }
    this.setState({ game: newGameState });
    this.checkGame();
  }

  togglePlayer(player) {
    if (player) {
      this.setState({ currentPlayer: player });
    } else {
      this.setState({ currentPlayer: this.state.currentPlayer.toLowerCase() === "x" ? "o" : "x" });
    }
  }

  checkGame() {
    (function checkRows() {
      if (this.state.winner) return;
      let same = false;
      for (let i = 0; i < 3; i++) {
        const value = this.state.game[i][0];
        let matches = [i.toString() + "0"];
        for (let j = 1; j < 3; j++) {
          if (value && value === this.state.game[i][j]) {
            same = true;
            matches.push(i.toString() + j.toString());
          } else {
            same = false;
            break;
          }
        }
        if (same) {
          this.setState({ winner: value, matches: matches, currentPlayer: value });
          this.toggleModal();
          break;
        }
      }
      return same;
    }.bind(this)());
    (function checkCols() {
      if (this.state.winner) return;
      let same = false;
      for (let i = 0; i < 3; i++) {
        const value = this.state.game[0][i];
        let matches = ["0" + i.toString()];
        for (let j = 1; j < 3; j++) {
          if (value && value === this.state.game[j][i]) {
            same = true;
            matches.push(j.toString() + i.toString());
          } else {
            same = false;
            break;
          }
        }
        if (same) {
          this.setState({ winner: value, matches: matches, currentPlayer: value });
          this.toggleModal();
          break;
        }
      }
      return same;
    }.bind(this)());
    (function checkDiag1() {
      if (this.state.winner) return;
      let same = false;
      const value = this.state.game[0][0];
      let matches = ["00"];
      for (let i = 1; i < 3; i++) {
        if (value && value === this.state.game[i][i]) {
          same = true;
          matches.push(i.toString() + i.toString());
        } else {
          same = false;
          break;
        }
      }
      if (same) {
        this.setState({ winner: value, matches: matches, currentPlayer: value });
        this.toggleModal();
      }
      return same;
    }.bind(this)());
    (function checkDiag2() {
      if (this.state.winner) return;
      let same = false;
      const value = this.state.game[0][2];
      let matches = ["02"];
      for (let i = 1, j = 1; i < 3; i++, j--) {
        if (value && value === this.state.game[i][j]) {
          same = true;
          matches.push(i.toString() + j.toString());
        } else {
          same = false;
          matches = [];
          break;
        }
      }
      if (same) {
        this.setState({ winner: value, matches: matches, currentPlayer: value });
        this.toggleModal();
      }
      return same;
    }.bind(this)());
  }

  handleReload() {
    this.setState(JSON.parse(JSON.stringify(this.initialState)));
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div className="wrapper">
        <Modal
          isVisible={this.state.modal}
          toggleModal={this.toggleModal}
          winner={this.state.winner}
          handleClick={this.handleReload}
        />
        <Header />
        <Navi handleReload={this.handleReload} />
        <HashRouter>
          <div className="content">
            <Route
              exact
              path="/"
              render={props => (
                <Game
                  {...props}
                  game={this.state.game}
                  currentPlayer={this.state.currentPlayer}
                  handleClick={this.handleClick}
                  togglePlayer={this.togglePlayer}
                  matches={this.state.matches}
                />
              )}
            />
            <Route path="/instruction" render={() => <Instruction />} />
          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}
