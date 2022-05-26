import React, { FC } from 'react';
import './style.css';
import { Colors } from '../../types/models';

type TCellProps = {
  color: Colors;
};

export const Cell: FC<TCellProps> = ({ color }) => {
  return <div className={`cell cell_${color}`}></div>;
};
