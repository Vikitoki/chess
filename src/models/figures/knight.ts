import { FigureModel } from './index';
import { Colors, FigureNames } from '../../types/models';
import whiteLogo from '../../assets/figures/white-knight.png';
import blackLogo from '../../assets/figures/black-knight.png';
import { CellModel } from '../cell-model';

export class Knight extends FigureModel {
  constructor(color: Colors, currentCell: CellModel) {
    super(color, currentCell);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.KNIGHT;
  }
}
