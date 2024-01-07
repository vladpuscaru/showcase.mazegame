import React from 'react';
import ReactDOM from 'react-dom';
import './game.css';

function Cell(props) {
  const revealed = props.revelead ? 'revelead' : '';
  const classValue = 'cell ' + props.row + ' ' + props.column + ' ' + props.value + ' ' + revealed;
  return (
    <button className={classValue} onClick = {props.onClick}></button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blueprint: getMap(),
      lives: 3,
      status: 'Game in progress...',
    };
  }

  onClickHandler(i, j) {
    let blueprint = Array.from(this.state.blueprint);
    let lives = this.state.lives;
    let status = this.state.status;

    if (!blueprint[i][j].revealed && !gameFinished(blueprint, lives).finished) {

      if (blueprint[i][j].value === 'x') {
        lives--;
      }
        blueprint[i][j].revealed = true;

      if (gameFinished(blueprint, lives).finished) {
        status = 'Game finished! You ' + gameFinished(blueprint, lives).reason + '!';
      }

      this.setState({
        blueprint: blueprint,
        lives: lives,
        status: status,
      });

    }
  }

  renderCell(i, j, value, revelead) {
    return (
      <Cell 
        row = {i}
        column = {j}
        value = {value}
        revelead = {revelead}
        onClick = {() => this.onClickHandler(i, j)}
      />
    );
  }

  render() {
    return (
      <div className="game__board divider-bottom">
        <div className="game__board__status">
          <span>{'Lives: ' + this.state.lives}</span>
          <span>{this.state.status}</span>  
        </div>
        <div className="game__board__row">
          {this.renderCell(0, 0, this.state.blueprint[0][0].value, this.state.blueprint[0][0].revealed)}
          {this.renderCell(0, 1, this.state.blueprint[0][1].value, this.state.blueprint[0][1].revealed)}
          {this.renderCell(0, 2, this.state.blueprint[0][2].value, this.state.blueprint[0][2].revealed)}
          {this.renderCell(0, 3, this.state.blueprint[0][3].value, this.state.blueprint[0][3].revealed)}
          {this.renderCell(0, 4, this.state.blueprint[0][4].value, this.state.blueprint[0][4].revealed)}
          {this.renderCell(0, 5, this.state.blueprint[0][5].value, this.state.blueprint[0][5].revealed)}
          {this.renderCell(0, 6, this.state.blueprint[0][6].value, this.state.blueprint[0][6].revealed)}
          {this.renderCell(0, 7, this.state.blueprint[0][7].value, this.state.blueprint[0][7].revealed)}
        </div>
        <div className="game__board__row">
          {this.renderCell(1, 0, this.state.blueprint[1][0].value, this.state.blueprint[1][0].revealed)}
          {this.renderCell(1, 1, this.state.blueprint[1][1].value, this.state.blueprint[1][1].revealed)}
          {this.renderCell(1, 2, this.state.blueprint[1][2].value, this.state.blueprint[1][2].revealed)}
          {this.renderCell(1, 3, this.state.blueprint[1][3].value, this.state.blueprint[1][3].revealed)}
          {this.renderCell(1, 4, this.state.blueprint[1][4].value, this.state.blueprint[1][4].revealed)}
          {this.renderCell(1, 5, this.state.blueprint[1][5].value, this.state.blueprint[1][5].revealed)}
          {this.renderCell(1, 6, this.state.blueprint[1][6].value, this.state.blueprint[1][6].revealed)}
          {this.renderCell(1, 7, this.state.blueprint[1][7].value, this.state.blueprint[1][7].revealed)}
        </div>
        <div className="game__board__row">
          {this.renderCell(2, 0, this.state.blueprint[2][0].value, this.state.blueprint[2][0].revealed)}
          {this.renderCell(2, 1, this.state.blueprint[2][1].value, this.state.blueprint[2][1].revealed)}
          {this.renderCell(2, 2, this.state.blueprint[2][2].value, this.state.blueprint[2][2].revealed)}
          {this.renderCell(2, 3, this.state.blueprint[2][3].value, this.state.blueprint[2][3].revealed)}
          {this.renderCell(2, 4, this.state.blueprint[2][4].value, this.state.blueprint[2][4].revealed)}
          {this.renderCell(2, 5, this.state.blueprint[2][5].value, this.state.blueprint[2][5].revealed)}
          {this.renderCell(2, 6, this.state.blueprint[2][6].value, this.state.blueprint[2][6].revealed)}
          {this.renderCell(2, 7, this.state.blueprint[2][7].value, this.state.blueprint[2][7].revealed)}
        </div>
        <div className="game__board__row">
          {this.renderCell(3, 0, this.state.blueprint[3][0].value, this.state.blueprint[3][0].revealed)}
          {this.renderCell(3, 1, this.state.blueprint[3][1].value, this.state.blueprint[3][1].revealed)}
          {this.renderCell(3, 2, this.state.blueprint[3][2].value, this.state.blueprint[3][2].revealed)}
          {this.renderCell(3, 3, this.state.blueprint[3][3].value, this.state.blueprint[3][3].revealed)}
          {this.renderCell(3, 4, this.state.blueprint[3][4].value, this.state.blueprint[3][4].revealed)}
          {this.renderCell(3, 5, this.state.blueprint[3][5].value, this.state.blueprint[3][5].revealed)}
          {this.renderCell(3, 6, this.state.blueprint[3][6].value, this.state.blueprint[3][6].revealed)}
          {this.renderCell(3, 7, this.state.blueprint[3][7].value, this.state.blueprint[3][7].revealed)}
        </div>
        <div className="game__board__row">
          {this.renderCell(4, 0, this.state.blueprint[4][0].value, this.state.blueprint[4][0].revealed)}
          {this.renderCell(4, 1, this.state.blueprint[4][1].value, this.state.blueprint[4][1].revealed)}
          {this.renderCell(4, 2, this.state.blueprint[4][2].value, this.state.blueprint[4][2].revealed)}
          {this.renderCell(4, 3, this.state.blueprint[4][3].value, this.state.blueprint[4][3].revealed)}
          {this.renderCell(4, 4, this.state.blueprint[4][4].value, this.state.blueprint[4][4].revealed)}
          {this.renderCell(4, 5, this.state.blueprint[4][5].value, this.state.blueprint[4][5].revealed)}
          {this.renderCell(4, 6, this.state.blueprint[4][6].value, this.state.blueprint[4][6].revealed)}
          {this.renderCell(4, 7, this.state.blueprint[4][7].value, this.state.blueprint[4][7].revealed)}
        </div>
        <div className="game__board__row">
          {this.renderCell(5, 0, this.state.blueprint[5][0].value, this.state.blueprint[5][0].revealed)}
          {this.renderCell(5, 1, this.state.blueprint[5][1].value, this.state.blueprint[5][1].revealed)}
          {this.renderCell(5, 2, this.state.blueprint[5][2].value, this.state.blueprint[5][2].revealed)}
          {this.renderCell(5, 3, this.state.blueprint[5][3].value, this.state.blueprint[5][3].revealed)}
          {this.renderCell(5, 4, this.state.blueprint[5][4].value, this.state.blueprint[5][4].revealed)}
          {this.renderCell(5, 5, this.state.blueprint[5][5].value, this.state.blueprint[5][5].revealed)}
          {this.renderCell(5, 6, this.state.blueprint[5][6].value, this.state.blueprint[5][6].revealed)}
          {this.renderCell(5, 7, this.state.blueprint[5][7].value, this.state.blueprint[5][7].revealed)}
        </div>
        <div className="game__board__row">
          {this.renderCell(6, 0, this.state.blueprint[6][0].value, this.state.blueprint[6][0].revealed)}
          {this.renderCell(6, 1, this.state.blueprint[6][1].value, this.state.blueprint[6][1].revealed)}
          {this.renderCell(6, 2, this.state.blueprint[6][2].value, this.state.blueprint[6][2].revealed)}
          {this.renderCell(6, 3, this.state.blueprint[6][3].value, this.state.blueprint[6][3].revealed)}
          {this.renderCell(6, 4, this.state.blueprint[6][4].value, this.state.blueprint[6][4].revealed)}
          {this.renderCell(6, 5, this.state.blueprint[6][5].value, this.state.blueprint[6][5].revealed)}
          {this.renderCell(6, 6, this.state.blueprint[6][6].value, this.state.blueprint[6][6].revealed)}
          {this.renderCell(6, 7, this.state.blueprint[6][7].value, this.state.blueprint[6][7].revealed)}
        </div>
        <div className="game__board__row">
          {this.renderCell(7, 0, this.state.blueprint[7][0].value, this.state.blueprint[7][0].revealed)}
          {this.renderCell(7, 1, this.state.blueprint[7][1].value, this.state.blueprint[7][1].revealed)}
          {this.renderCell(7, 2, this.state.blueprint[7][2].value, this.state.blueprint[7][2].revealed)}
          {this.renderCell(7, 3, this.state.blueprint[7][3].value, this.state.blueprint[7][3].revealed)}
          {this.renderCell(7, 4, this.state.blueprint[7][4].value, this.state.blueprint[7][4].revealed)}
          {this.renderCell(7, 5, this.state.blueprint[7][5].value, this.state.blueprint[7][5].revealed)}
          {this.renderCell(7, 6, this.state.blueprint[7][6].value, this.state.blueprint[7][6].revealed)}
          {this.renderCell(7, 7, this.state.blueprint[7][7].value, this.state.blueprint[7][7].revealed)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
      <div className="game__title divider-bottom">
        <h3>The hidden maze</h3>
        <p>Find your way through the maze and reach the end!</p>
      </div>

      
      <Board />


      <div className="game__info">
        <p className="game__info__title">Click on the cells and find the path to the end.</p>
        <ul className="game__info__legend">
          <li>
            <pre>
            <span className="legend__cell legend__cell--white"></span> white cell - you're on track! move onwards
            </pre>
          </li>
          <li>
            <pre>
            <span className="legend__cell legend__cell--red"></span> red cell   - you've hit a wall!
            </pre>
          </li>
          <li>
            <pre>
            <span className="legend__cell legend__cell--green"></span> green cell - you've reached the end! Congrats!
            </pre>
          </li>
        </ul>
      </div>

      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('game')
);




function getMap() {
  let blueprint = [
    [{value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'E', revealed: false}, {value: 'x', revealed: false}],
    [{value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'O', revealed: false}, {value: 'O', revealed: false}, {value: 'O', revealed: false}, {value: 'O', revealed: false}, {value: 'x', revealed: false}],
    [{value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'O', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}],
    [{value: 'O', revealed: true}, {value: 'O', revealed: false}, {value: 'O', revealed: false}, {value: 'O', revealed: false}, {value: 'x', revealed: false}, {value: 'O', revealed: false}, {value: 'O', revealed: false}, {value: 'x', revealed: false}],
    [{value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'O', revealed: false}, {value: 'x', revealed: false}, {value: 'O', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}],
    [{value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'O', revealed: false}, {value: 'O', revealed: false}, {value: 'O', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}],
    [{value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'O', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}],
    [{value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}, {value: 'x', revealed: false}]
  ];
  return blueprint;
}

function gameFinished(blueprint, lives) {
  if (lives <= 0) {
    return {finished: true, reason: 'lose'};
  }

  if (blueprint[0][6].revealed) {
    return {finished: true, reason: 'win'};
  }

  return {finished: false, reason: 'Game in progress...'};
}