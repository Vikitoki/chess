import { FigureModel } from './index';
import { Colors, FigureNames } from '../../types/models';
import whiteLogo from '/public/figures/white-king.png';
import blackLogo from '/public/figures/black-king.png';

export class King extends FigureModel {
  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.KING;
  }
}
