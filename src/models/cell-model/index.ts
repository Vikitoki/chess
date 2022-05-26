import { Colors } from '../../types/models';
import { FigureModel } from '../figures';

export class CellModel {
  readonly color: Colors;
  readonly x: number;
  readonly y: number;
  readonly figure: FigureModel | null;
  readonly availableToMove: boolean;

  constructor(
    color: Colors,
    x: number,
    y: number,
    figure: FigureModel | null
  ) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.figure = figure;
    this.availableToMove = false;
    this.figure = figure;
  }
}
