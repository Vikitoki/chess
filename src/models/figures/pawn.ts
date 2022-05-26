import { FigureModel } from './index';
import { Colors, FigureNames } from '../../types/models';
import whiteLogo from '/public/figures/white-pawn.png';
import blackLogo from '/public/figures/black-pawn.png';

export class Pawn extends FigureModel {
  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.PAWN;
  }
}
