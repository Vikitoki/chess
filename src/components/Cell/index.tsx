import React, { FC } from 'react';
import './style.css';
import { Colors } from '../../types/models';
import { CellModel } from '../../models/cell-model';

type TCellProps = {
  cell: CellModel;
};

export const Cell: FC<TCellProps> = ({ cell }) => {
  return (
    <div className={`cell cell_${cell.color}`}>
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  );
};
