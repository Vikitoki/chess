import { CellModel } from '../cell-model';
import { Colors } from '../../types/models';
import { FigureModel } from '../figures';
import { Pawn } from '../figures/pawn';
import { BOARD_NUMBER_OF_CELLS } from '../../constants/models';
import { Knight } from '../figures/knight';
import { Rook } from '../figures/rook';
import { Bishop } from '../figures/bishop';
import { Queen } from '../figures/queen';
import { King } from '../figures/king';

export class BoardModel {
  cells: CellModel[][] = [];

  private isCellBlack(x: number, y: number): boolean {
    return (x + y) % 2 !== 0;
  }

  private isFigureBlack(y: number): boolean {
    return y === 1 || y === 0;
  }

  createCells(): void {
    for (let y = 0; y < BOARD_NUMBER_OF_CELLS; y++) {
      const row: CellModel[] = [];

      for (let x = 0; x < BOARD_NUMBER_OF_CELLS; x++) {
        if (this.isCellBlack(x, y)) {
          row.push(new CellModel(Colors.BLACK, x, y, null));
        } else {
          row.push(new CellModel(Colors.WHITE, x, y, null));
        }
      }

      this.cells.push(row);
    }
  }

  private getFigureToCell(x: number, y: number): FigureModel | null {
    const colorOfFigure = this.isFigureBlack(y)
      ? Colors.BLACK
      : Colors.WHITE;
    const isTheLastRowsOfTheBoard = y === 0 || y === 7;
    const thePrenoonRowsOfTheBoard = y === 1 || y === 6;

    if (thePrenoonRowsOfTheBoard) {
      return new Pawn(colorOfFigure);
    }

    if (isTheLastRowsOfTheBoard) {
      switch (x) {
        case 1:
        case 6:
          return new Knight(colorOfFigure);
        case 0:
        case 7:
          return new Rook(colorOfFigure);
        case 2:
        case 5:
          return new Bishop(colorOfFigure);
        case 3:
          return new Queen(colorOfFigure);
        case 4:
          return new King(colorOfFigure);
      }
    }

    return null;
  }

  addFigures(): void {
    for (let y = 0; y < 8; y++) {
      const row = this.cells[y];

      for (let x = 0; x < 8; x++) {
        const cell = row[x];
        const figure = this.getFigureToCell(cell.x, cell.y);

        cell.figure = figure;
      }
    }
  }
}
