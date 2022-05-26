import React, { useEffect, useState } from 'react';
import { BoardModel } from '../../models/board-model';
import './style.css';

import { Board } from '../Board';

function App() {
  const [board, setBoard] = useState<null | BoardModel>(null);

  useEffect(() => {
    const newBoard = new BoardModel();
    newBoard.createCells();
    setBoard(newBoard);
  }, []);

  return (
    <div className='app'>
      <div className={'board'}>
        {board && <Board board={board} />}
      </div>
    </div>
  );
}

export default App;
