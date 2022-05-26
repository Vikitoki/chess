import { FigureModel } from './index';
import { Colors, FigureNames } from '../../types/models';
import whiteLogo from '/public/figures/white-knight.png';
import blackLogo from '/public/figures/black-knight.png';

export class Knight extends FigureModel {
  constructor(color: Colors) {
    super(color);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    this.name = FigureNames.KNIGHT;
  }
}
