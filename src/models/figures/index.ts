import { Colors, FigureNames } from '../../types/models';
import { CellModel } from '../cell-model';

export class FigureModel {
  color: Colors;
  logo: string | null;
  name: FigureNames | null;

  constructor(color: Colors) {
    this.color = color;
    this.logo = null;
    this.name = null;
  }

  canMove(cell: CellModel): boolean {
    return true;
  }
}
