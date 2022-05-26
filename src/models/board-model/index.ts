import { CellModel } from '../cell-model';
import { Colors } from '../../types/models';

export class BoardModel {
  cells: CellModel[][] = [];

  private isCellBlack(x: number, y: number): boolean {
    return (x + y) % 2 !== 0;
  }

  createCells(): void {
    for (let y = 0; y < 8; y++) {
      const row: CellModel[] = [];

      for (let x = 0; x < 8; x++) {
        if (this.isCellBlack(x, y)) {
          row.push(new CellModel(Colors.BLACK, x, y, null));
        } else {
          row.push(new CellModel(Colors.WHITE, x, y, null));
        }
      }

      this.cells.push(row);
    }
  }
}
