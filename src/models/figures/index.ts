import { Colors, FigureNames } from '../../types/models';
import { CellModel } from '../cell-model';

export class FigureModel {
  color: Colors;
  logo: string | null;
  name: FigureNames | null;
  currentCell: CellModel;

  constructor(color: Colors, currentCell: CellModel) {
    this.color = color;
    this.logo = null;
    this.name = null;
    this.currentCell = currentCell;
    this.currentCell.figure = this;
  }

  canMove(cell: CellModel): boolean {
    return true;
  }
}
