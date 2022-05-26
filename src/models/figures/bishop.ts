import { FigureModel } from './index';
import { Colors, FigureNames } from '../../types/models';
import whiteLogo from '/public/figures/white-bishop.png';
import blackLogo from '/public/figures/black-bishop.png';

export class Bishop extends FigureModel {
  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.BISHOP;
  }
}
