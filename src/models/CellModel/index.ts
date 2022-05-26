import { Colors } from '../../types/colors';
import { FigureModel } from '../FigureModel';

export class CellModel {
  public readonly color: Colors;
  public readonly x: number;
  public readonly y: number;
  public readonly figure: FigureModel | null;
  public readonly availableToMove: boolean;
  public readonly id: number;

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
    this.id = Math.random();
  }
}
