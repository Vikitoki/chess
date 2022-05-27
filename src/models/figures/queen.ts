import { FigureModel } from './index';
import { Colors, FigureNames } from '../../types/models';
import whiteLogo from '../../assets/figures/white-queen.png';
import blackLogo from '../../assets/figures/black-queen.png';
import { CellModel } from '../cell-model';

export class Queen extends FigureModel {
  constructor(color: Colors, currentCell: CellModel) {
    super(color, currentCell);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.QUEEN;
  }
}
