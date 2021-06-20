function possible(board, y, x, n) {
    for (let i = 0; i < 9; i++) {
      if (board[y][i] === n || board[i][x] === n) {
        return false;
      }
    }
    const xSquare = Math.floor(x / 3) * 3;
    const ySquare = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[ySquare+i][xSquare+j] === n) {
          return false;
        }
      }
    }
    return true;
  }
  function solve(board) {
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (board[y][x] === 0) {
          for (let n = 1; n <= 9; n++) {
            if (possible(board, y, x, n)) {
              board[y][x] = n;
              if (solve(board)) return board;
            }
          }
          board[y][x] = 0;
          return false;
        }
      }
    }
    return board;
  }
  const puzzle = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
  ];
  console.log(solve(puzzle).map(e => "" + e));
