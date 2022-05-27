import { CellModel } from '../cell-model';
import { Colors } from '../../types/models';
import { BOARD_NUMBER_OF_CELLS } from '../../constants/models';
import { Queen } from '../figures/queen';
import { Rook } from '../figures/rook';
import { Knight } from '../figures/knight';
import { Bishop } from '../figures/bishop';
import { King } from '../figures/king';
import { Pawn } from '../figures/pawn';

export class BoardModel {
  cells: CellModel[][] = [];

  private isCellBlack(x: number, y: number): boolean {
    return (x + y) % 2 !== 0;
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

  public getCell(x: number, y: number): CellModel {
    return this.cells[y][x];
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  private addKings() {
    new King(Colors.BLACK, this.getCell(4, 0));
    new King(Colors.WHITE, this.getCell(4, 7));
  }

  private addQueens() {
    new Queen(Colors.BLACK, this.getCell(3, 0));
    new Queen(Colors.WHITE, this.getCell(3, 7));
  }

  private addBishops() {
    new Bishop(Colors.BLACK, this.getCell(2, 0));
    new Bishop(Colors.BLACK, this.getCell(5, 0));
    new Bishop(Colors.WHITE, this.getCell(2, 7));
    new Bishop(Colors.WHITE, this.getCell(5, 7));
  }

  private addKnights() {
    new Knight(Colors.BLACK, this.getCell(1, 0));
    new Knight(Colors.BLACK, this.getCell(6, 0));
    new Knight(Colors.WHITE, this.getCell(1, 7));
    new Knight(Colors.WHITE, this.getCell(6, 7));
  }

  private addRooks() {
    new Rook(Colors.BLACK, this.getCell(0, 0));
    new Rook(Colors.BLACK, this.getCell(7, 0));
    new Rook(Colors.WHITE, this.getCell(0, 7));
    new Rook(Colors.WHITE, this.getCell(7, 7));
  }

  addFigures(): void {
    this.addPawns();
    this.addKnights();
    this.addKings();
    this.addBishops();
    this.addQueens();
    this.addRooks();
  }
}
