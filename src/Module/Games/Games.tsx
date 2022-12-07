import React, { Component } from 'react';
import './Games.css';

interface GameHistoryItem {
  squares: (string | null)[];
  currentStep: number | null;
}

interface GameState {
  history: (GameHistoryItem | null)[];
  stepNumber: number;
  xIsNext: boolean;
}

export default class Games extends Component {
  state: GameState = {
    history: [{ squares: Array(9).fill(null), currentStep: null }],
    stepNumber: 0,
    xIsNext: true,
  };

  handleClickSquare = (i: number) => {
    const history = this.state.history;
    const current = history[history.length - 1]!;
    const squares = current!.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    let xIsNext = this.state.xIsNext;
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
          currentStep: i,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };

  jumpTo = (i: number) => {
    this.setState({
      stepNumber: i,
      xIsNext: i % 2 === 0,
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber]!;
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner[0];
    } else {
      if (history.length <= 9) {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      } else {
        status = 'Draw';
      }
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={this.handleClickSquare}
            winner={winner ? winner[1] : null}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <Move
            history={history}
            onClick={this.jumpTo}
            winner={winner ? winner[1] : null}
          />
        </div>
      </div>
    );
  }
}

function Move(props: {
  history: (GameHistoryItem | null)[];
  onClick: (_: number) => void;
  winner: [a: number, b: number, c: number] | null;
}) {
  return (
    <div>
      {props.history.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        let stepDesc = '';
        if (step && step?.currentStep !== null) {
          let rowAndColumn = getRowAndColumn(step?.currentStep);
          stepDesc = `[row: ${rowAndColumn[0]} column: ${rowAndColumn[1]}]`;
        }
        return (
          <li key={move}>
            <button onClick={() => props.onClick(move)}>
              {desc + stepDesc}
            </button>
          </li>
        );
      })}
    </div>
  );
}

function Square(props: {
  index: number;
  value: string | null;
  onClick: () => void;
  highlight: boolean;
}) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      style={props.highlight ? { color: 'red' } : {}}>
      {props.value}
    </button>
  );
}

interface BoardProps {
  squares: (string | null)[];
  onClick: (_: number) => void;
  winner: [a: number, b: number, c: number] | null;
}

class Board extends Component<BoardProps> {
  renderSquare(i: number, winner: number | null) {
    console.log(i, winner)
    return (
      <Square
        key={i}
        index={i}
        value={this.props.squares[i]}
        onClick={() => {
          this.props.onClick(i);
        }}
        highlight={winner === i}
      />
    );
  }

  render(): React.ReactNode {
    return (
      <div>
        {[
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
        ].map((item, index) => {
          return (
            <div className="board-row" key={item.toString()}>
              {item.map((inner) => {
                return this.renderSquare(
                  inner,
                  this.props.winner?.[index] ?? null
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

function calculateWinner(
  squares: (string | null)[]
): [winner: string | null, lines: [a: number, b: number, c: number]] | null {
  const lines: [a: number, b: number, c: number][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return null;
}

function getRowAndColumn(index: number): [row: number, column: number] {
  let crow = (index + 1) / 3;
  let row: number;
  if (crow <= 1) {
    row = 1;
  } else if (crow <= 2) {
    row = 2;
  } else {
    row = 3;
  }
  let column = (index % 3) + 1;
  return [row, column];
}
