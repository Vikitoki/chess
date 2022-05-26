import React, { FC } from 'react';
import './style.css';
import { Cell } from '../Cell';
import { BoardModel } from '../../models/board-model';

type TBoardProps = {
  board: BoardModel;
};

export const Board: FC<TBoardProps> = ({ board }) => {
  return (
    <div className={'board-component'}>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell, index) => (
            <Cell cell={cell} key={index} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
