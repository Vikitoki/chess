import React, { FC } from 'react';
import './style.css';
import { Cell } from '../Cell';
import { BoardModel } from '../../models/BoardModel';

type TBoardProps = {
  board: BoardModel;
};

export const Board: FC<TBoardProps> = ({ board }) => {
  return (
    <div className={'board-component'}>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell, index) => (
            <Cell color={cell.color} key={index} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
