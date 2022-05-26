import { FigureModel } from './index';
import { Colors, FigureNames } from '../../types/models';
import whiteLogo from '/public/figures/white-rook.png';
import blackLogo from '/public/figures/black-rook.png';

export class Rook extends FigureModel {
  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.ROOK;
  }
}
