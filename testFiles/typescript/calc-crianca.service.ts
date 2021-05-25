import { Injectable } from '@angular/core';

import { IObj } from '../../shared/models/obj.model';

@Injectable({
  providedIn: 'root'
})
export class CalcCriancaService {
  public obj: IObj;

  constructor() { }


  public estaturaIdadeMenino(idade: number, altura: number): IObj {
    switch (idade) {
      case 0:
        if (altura < 0.442) {
          return this.obj = { ref: '0,49 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.461) {
          return this.obj = { ref: '0,49 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,49 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 1:
        if (altura < 0.489) {
          return this.obj = { ref: '0,54 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.508) {
          return this.obj = { ref: '0,54 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,54 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 2:
        if (altura < 0.524) {
          return this.obj = { ref: '0,58 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.544) {
          return this.obj = { ref: '0,58 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,58 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 3:
        if (altura < 0.553) {
          return this.obj = { ref: '0,61 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.544) {
          return this.obj = { ref: '0,61 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,61 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 4:
        if (altura < 0.576) {
          return this.obj = { ref: '0,63 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.597) {
          return this.obj = { ref: '0,63 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,63 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 5:
        if (altura < 0.596) {
          return this.obj = { ref: '0,65 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.617) {
          return this.obj = { ref: '0,65 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,65 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 6:
        if (altura < 0.612) {
          return this.obj = { ref: '0,67 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.633) {
          return this.obj = { ref: '0,67 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,67 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 7:
        if (altura < 0.627) {
          return this.obj = { ref: '0,69 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.648) {
          return this.obj = { ref: '0,69 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,69 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 8:
        if (altura < 0.64) {
          return this.obj = { ref: '0,70 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.662) {
          return this.obj = { ref: '0,70 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,70 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 9:
        if (altura < 0.652) {
          return this.obj = { ref: '0,72 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.675) {
          return this.obj = { ref: '0,72 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,72 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 10:
        if (altura < 0.664) {
          return this.obj = { ref: '0,73 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.687) {
          return this.obj = { ref: '0,73 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,73 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 11:
        if (altura < 0.676) {
          return this.obj = { ref: '0,74 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.669) {
          return this.obj = { ref: '0,74 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,74 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 12:
        if (altura < 0.686) {
          return this.obj = { ref: '0,75 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.71) {
          return this.obj = { ref: '0,75 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,75 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 13:
        if (altura < 0.696) {
          return this.obj = { ref: '0,76 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.721) {
          return this.obj = { ref: '0,76 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,76 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 14:
        if (altura < 0.706) {
          return this.obj = { ref: '0,78 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.731) {
          return this.obj = { ref: '0,78 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,78 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 15:
        if (altura < 0.716) {
          return this.obj = { ref: '0,79 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.741) {
          return this.obj = { ref: '0,79 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,79 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 16:
        if (altura < 0.725) {
          return this.obj = { ref: '0,80 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.750) {
          return this.obj = { ref: '0,80 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,80 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 17:
        if (altura < 0.733) {
          return this.obj = { ref: '0,81 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.76) {
          return this.obj = { ref: '0,81 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,81 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 18:
        if (altura < 0.742) {
          return this.obj = { ref: '0,82 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.769) {
          return this.obj = { ref: '0,82 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,82 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 19:
        if (altura < 0.75) {
          return this.obj = { ref: '0,83 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.777) {
          return this.obj = { ref: '0,83 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,83 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.758) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 21:
        if (altura < 0.765) {
          return this.obj = { ref: '0,851 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.794) {
          return this.obj = { ref: '0,851 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,851 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 22:
        if (altura < 0.772) {
          return this.obj = { ref: '0,86 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.802) {
          return this.obj = { ref: '0,86 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,86 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 23:
        if (altura < 0.787) {
          return this.obj = { ref: '0,86 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.817) {
          return this.obj = { ref: '0,86 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,86 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 24:
        if (altura < 0.758) {
          return this.obj = { ref: '0,87 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.786) {
          return this.obj = { ref: '0,87 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,87 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 25:
        if (altura < 0.786) {
          return this.obj = { ref: '0,88 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.817) {
          return this.obj = { ref: '0,88 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,88 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 26:
        if (altura < 0.793) {
          return this.obj = { ref: '0,88 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.825) {
          return this.obj = { ref: '0,88 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,88 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 27:
        if (altura < 0.799) {
          return this.obj = { ref: '0,89 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.831) {
          return this.obj = { ref: '0,89 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,89 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 28:
        if (altura < 0.805) {
          return this.obj = { ref: '0,904 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.838) {
          return this.obj = { ref: '0,904 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,904 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 29:
        if (altura < 0.811) {
          return this.obj = { ref: '0,91 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.845) {
          return this.obj = { ref: '0,91 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,91 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 30:
        if (altura < 0.817) {
          return this.obj = { ref: '0,91 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.851) {
          return this.obj = { ref: '0,91 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,91 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 31:
        if (altura < 0.823) {
          return this.obj = { ref: '0,92 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.857) {
          return this.obj = { ref: '0,92 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,92 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 32:
        if (altura < 0.828) {
          return this.obj = { ref: '0,93 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.864) {
          return this.obj = { ref: '0,93 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,93 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 33:
        if (altura < 0.834) {
          return this.obj = { ref: '0,94 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.869) {
          return this.obj = { ref: '0,94 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,94 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 34:
        if (altura < 0.839) {
          return this.obj = { ref: '0,94 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.875) {
          return this.obj = { ref: '0,94 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,94 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 35:
        if (altura < 0.844) {
          return this.obj = { ref: '0,95 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.881) {
          return this.obj = { ref: '0,95 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,95 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 36:
        if (altura < 0.85) {
          return this.obj = { ref: '0,96 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.887) {
          return this.obj = { ref: '0,96 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,96 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 37:
        if (altura < 0.855) {
          return this.obj = { ref: '0,96 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.892) {
          return this.obj = { ref: '0,96 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,96 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 38:
        if (altura < 0.86) {
          return this.obj = { ref: '0,97 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.898) {
          return this.obj = { ref: '0,97 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,97 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 39:
        if (altura < 0.865) {
          return this.obj = { ref: '0,98 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.903) {
          return this.obj = { ref: '0,98 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,98 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 40:
        if (altura < 0.87) {
          return this.obj = { ref: '0,98 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.909) {
          return this.obj = { ref: '0,98 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,98 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 41:
        if (altura < 0.875) {
          return this.obj = { ref: '0,99 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.914) {
          return this.obj = { ref: '0,99 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,99 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 42:
        if (altura < 0.88) {
          return this.obj = { ref: '0,99 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.919) {
          return this.obj = { ref: '0,99 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,99 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 43:
        if (altura < 0.884) {
          return this.obj = { ref: '1,00 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.924) {
          return this.obj = { ref: '1,00 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,00 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 44:
        if (altura < 0.889) {
          return this.obj = { ref: '1,01 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.93) {
          return this.obj = { ref: '1,01 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,01 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 45:
        if (altura < 0.894) {
          return this.obj = { ref: '1,01 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.935) {
          return this.obj = { ref: '1,01 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,01 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 46:
        if (altura < 0.898) {
          return this.obj = { ref: '1,02 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.94) {
          return this.obj = { ref: '1,02 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,02 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 47:
        if (altura < 0.903) {
          return this.obj = { ref: '1,02 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.944) {
          return this.obj = { ref: '1,02 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,02 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 48:
        if (altura < 0.907) {
          return this.obj = { ref: '1,03 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.949) {
          return this.obj = { ref: '1,03 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,03 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 49:
        if (altura < 0.912) {
          return this.obj = { ref: '1,03 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.954) {
          return this.obj = { ref: '1,03 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,03 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 50:
        if (altura < 0.916) {
          return this.obj = { ref: '1,04 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.959) {
          return this.obj = { ref: '1,04 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,04 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 51:
        if (altura < 0.925) {
          return this.obj = { ref: '1,05 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.969) {
          return this.obj = { ref: '1,05 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,05 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 52:
        if (altura < 0.925) {
          return this.obj = { ref: '1,05 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.969) {
          return this.obj = { ref: '1,05 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,05 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 53:
        if (altura < 0.93) {
          return this.obj = { ref: '1,06 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.974) {
          return this.obj = { ref: '1,06 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,06 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 54:
        if (altura < 0.934) {
          return this.obj = { ref: '1,06 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.978) {
          return this.obj = { ref: '1,06 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,06 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 55:
        if (altura < 0.939) {
          return this.obj = { ref: '1,07 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.983) {
          return this.obj = { ref: '1,07 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,07 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 56:
        if (altura < 0.943) {
          return this.obj = { ref: '1,07 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.988) {
          return this.obj = { ref: '1,07 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,07 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 57:
        if (altura < 0.947) {
          return this.obj = { ref: '1,08 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.993) {
          return this.obj = { ref: '1,08 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,08 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 58:
        if (altura < 0.952) {
          return this.obj = { ref: '1,08 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.997) {
          return this.obj = { ref: '1,08 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,08 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 59:
        if (altura < 0.956) {
          return this.obj = { ref: '1,09 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.0) {
          return this.obj = { ref: '1,09 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,09 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 60:
        if (altura < 0.961) {
          return this.obj = { ref: '1,10 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 1.0) {
          return this.obj = { ref: '1,10 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,10 m', text: 'Estatura Adequada', brush: 'green' };
        }
    }
  }

  public estaturaIdadeMenina(idade: number, altura: number): IObj {
    switch (idade) {
      case 0:
        if (altura < 0.436) {
          return this.obj = { ref: '0,49 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.454) {
          return this.obj = { ref: '0,49 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,49 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 1:
        if (altura < 0.478) {
          return this.obj = { ref: '0,53 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.498) {
          return this.obj = { ref: '0,53 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,53 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 2:
        if (altura < 0.51) {
          return this.obj = { ref: '0,57 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.53) {
          return this.obj = { ref: '0,57 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,57 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 3:
        if (altura < 0.535) {
          return this.obj = { ref: '0,59 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.556) {
          return this.obj = { ref: '0,59 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,59 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 4:
        if (altura < 0.556) {
          return this.obj = { ref: '0,62 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.578) {
          return this.obj = { ref: '0,62 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,62 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 5:
        if (altura < 0.574) {
          return this.obj = { ref: '0,64 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.596) {
          return this.obj = { ref: '0,64 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,64 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 6:
        if (altura < 0.589) {
          return this.obj = { ref: '0,65 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.612) {
          return this.obj = { ref: '0,65 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,65 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 7:
        if (altura < 0.603) {
          return this.obj = { ref: '0,67 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.627) {
          return this.obj = { ref: '0,67 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,67 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 8:
        if (altura < 0.617) {
          return this.obj = { ref: '0,68 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.64) {
          return this.obj = { ref: '0,68 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,68 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 9:
        if (altura < 0.629) {
          return this.obj = { ref: '0,70 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.653) {
          return this.obj = { ref: '0,70 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,70 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 10:
        if (altura < 0.641) {
          return this.obj = { ref: '0,71 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.665) {
          return this.obj = { ref: '0,71 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,71 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 11:
        if (altura < 0.652) {
          return this.obj = { ref: '0,72 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.677) {
          return this.obj = { ref: '0,72 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,72 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 12:
        if (altura < 0.663) {
          return this.obj = { ref: '0,74 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.689) {
          return this.obj = { ref: '0,74 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,74 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 13:
        if (altura < 0.673) {
          return this.obj = { ref: '0,75 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.7) {
          return this.obj = { ref: '0,75 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,75 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 14:
        if (altura < 0.683) {
          return this.obj = { ref: '0,76 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.71) {
          return this.obj = { ref: '0,76 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,76 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 15:
        if (altura < 0.693) {
          return this.obj = { ref: '0,77 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.72) {
          return this.obj = { ref: '0,77 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,77 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 16:
        if (altura < 0.702) {
          return this.obj = { ref: '0,78 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.73) {
          return this.obj = { ref: '0,78 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,78 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 17:
        if (altura < 0.711) {
          return this.obj = { ref: '0,79 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.74) {
          return this.obj = { ref: '0,79 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,79 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 18:
        if (altura < 0.72) {
          return this.obj = { ref: '0,80 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.749) {
          return this.obj = { ref: '0,80 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,80 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 19:
        if (altura < 0.728) {
          return this.obj = { ref: '0,81 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.758) {
          return this.obj = { ref: '0,81 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,81 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 20:
        if (altura < 0.737) {
          return this.obj = { ref: '0,82 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.767) {
          return this.obj = { ref: '0,82 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,82 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 21:
        if (altura < 0.745) {
          return this.obj = { ref: '0,83 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.775) {
          return this.obj = { ref: '0,83 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,83 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 22:
        if (altura < 0.752) {
          return this.obj = { ref: '0,84 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.784) {
          return this.obj = { ref: '0,84 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,84 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 23:
        if (altura < 0.76) {
          return this.obj = { ref: '0,85 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.792) {
          return this.obj = { ref: '0,85 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,85 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 24:
        if (altura < 0.767) {
          return this.obj = { ref: '0,86 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.8) {
          return this.obj = { ref: '0,86 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,86 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 25:
        if (altura < 0.768) {
          return this.obj = { ref: '0,86 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.8) {
          return this.obj = { ref: '0,86 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,86 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 26:
        if (altura < 0.775) {
          return this.obj = { ref: '0,87 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.808) {
          return this.obj = { ref: '0,87 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,87 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 27:
        if (altura < 0.781) {
          return this.obj = { ref: '0,883 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.815) {
          return this.obj = { ref: '0,883 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,883 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 28:
        if (altura < 0.788) {
          return this.obj = { ref: '0,89 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.822) {
          return this.obj = { ref: '0,89 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,89 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 29:
        if (altura < 0.795) {
          return this.obj = { ref: '0,89 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.829) {
          return this.obj = { ref: '0,89 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,89 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 30:
        if (altura < 0.801) {
          return this.obj = { ref: '0,90 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.836) {
          return this.obj = { ref: '0,90 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,90 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 31:
        if (altura < 0.807) {
          return this.obj = { ref: '0,91 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.843) {
          return this.obj = { ref: '0,91 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,91 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 32:
        if (altura < 0.813) {
          return this.obj = { ref: '0,92 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.849) {
          return this.obj = { ref: '0,92 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,92 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 33:
        if (altura < 0.819) {
          return this.obj = { ref: '0,92 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.856) {
          return this.obj = { ref: '0,92 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,92 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 34:
        if (altura < 0.825) {
          return this.obj = { ref: '0,93 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.862) {
          return this.obj = { ref: '0,93 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,93 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 35:
        if (altura < 0.831) {
          return this.obj = { ref: '0,94 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.868) {
          return this.obj = { ref: '0,94 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,94 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 36:
        if (altura < 0.836) {
          return this.obj = { ref: '0,95 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.874) {
          return this.obj = { ref: '0,95 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,95 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 37:
        if (altura < 0.842) {
          return this.obj = { ref: '0,95 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.88) {
          return this.obj = { ref: '0,95 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,95 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 38:
        if (altura < 0.847) {
          return this.obj = { ref: '0,96 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.886) {
          return this.obj = { ref: '0,96 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,96 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 39:
        if (altura < 0.853) {
          return this.obj = { ref: '0,97 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.892) {
          return this.obj = { ref: '0,97 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,97 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 40:
        if (altura < 0.858) {
          return this.obj = { ref: '0,97 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.898) {
          return this.obj = { ref: '0,97 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,97 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 41:
        if (altura < 0.863) {
          return this.obj = { ref: '0,98 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.904) {
          return this.obj = { ref: '0,98 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,98 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 42:
        if (altura < 0.868) {
          return this.obj = { ref: '0,99 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.909) {
          return this.obj = { ref: '0,99 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,99 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 43:
        if (altura < 0.874) {
          return this.obj = { ref: '0,99 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.915) {
          return this.obj = { ref: '0,99 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '0,99 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 44:
        if (altura < 0.879) {
          return this.obj = { ref: '1,00 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.92) {
          return this.obj = { ref: '1,00 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,00 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 45:
        if (altura < 0.884) {
          return this.obj = { ref: '1,00 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.925) {
          return this.obj = { ref: '1,00 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,00 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 46:
        if (altura < 0.889) {
          return this.obj = { ref: '1,01 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.931) {
          return this.obj = { ref: '1,01 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,01 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 47:
        if (altura < 0.893) {
          return this.obj = { ref: '1,02 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.936) {
          return this.obj = { ref: '1,02 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,02 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 48:
        if (altura < 0.898) {
          return this.obj = { ref: '1,02 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.941) {
          return this.obj = { ref: '1,02 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,02 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 49:
        if (altura < 0.903) {
          return this.obj = { ref: '1,03 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.946) {
          return this.obj = { ref: '1,03 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,03 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 50:
        if (altura < 0.907) {
          return this.obj = { ref: '1,03 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.951) {
          return this.obj = { ref: '1,03 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,03 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 51:
        if (altura < 0.912) {
          return this.obj = { ref: '1,04 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.956) {
          return this.obj = { ref: '1,04 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,04 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 52:
        if (altura < 0.917) {
          return this.obj = { ref: '1,05 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.961) {
          return this.obj = { ref: '1,05 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,05 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 53:
        if (altura < 0.921) {
          return this.obj = { ref: '1,05 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.966) {
          return this.obj = { ref: '1,05 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,05 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 54:
        if (altura < 0.926) {
          return this.obj = { ref: '1,06 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.971) {
          return this.obj = { ref: '1,06 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,06 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 55:
        if (altura < 0.93) {
          return this.obj = { ref: '1,06 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.976) {
          return this.obj = { ref: '1,06 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,06 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 56:
        if (altura < 0.934) {
          return this.obj = { ref: '1,07 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.981) {
          return this.obj = { ref: '1,07 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,07 m', text: 'Estatura Adequada', brush: 'green' };
        }


      case 57:
        if (altura < 0.939) {
          return this.obj = { ref: '1,07 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.985) {
          return this.obj = { ref: '1,07 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,07 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 58:
        if (altura < 0.943) {
          return this.obj = { ref: '1,08 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.99) {
          return this.obj = { ref: '1,08 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,08 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 59:
        if (altura < 0.947) {
          return this.obj = { ref: '1,08 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.995) {
          return this.obj = { ref: '1,08 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,08 m', text: 'Estatura Adequada', brush: 'green' };
        }

      case 60:
        if (altura < 0.952) {
          return this.obj = { ref: '1,09 m', text: 'Muito baixa estatura para idade', brush: 'red' };
        } else if (altura < 0.999) {
          return this.obj = { ref: '1,09 m', text: 'Baixa Estatura', brush: 'red' };
        } else {
          return this.obj = { ref: '1,09 m', text: 'Estatura Adequada', brush: 'green' };
        }
    }
  }

  public pesoIdadeMenino(idade: number, peso: number): IObj {
    switch (idade) {
      case 0:
        if (peso < 2.1) {
          return this.obj = { ref: '3,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 2.5) {
          return this.obj = { ref: '3,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 2.9) {
          return this.obj = { ref: '3,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '3,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 1:
        if (peso < 2.9) {
          return this.obj = { ref: '4,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 3.4) {
          return this.obj = { ref: '4,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 5.1) {
          return this.obj = { ref: '4,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '4,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 2:
        if (peso < 3.8) {
          return this.obj = { ref: '5,6 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 4.3) {
          return this.obj = { ref: '5,6 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 6.3) {
          return this.obj = { ref: '5,6 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '5,6 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 3:
        if (peso < 4.4) {
          return this.obj = { ref: '6,4 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 5) {
          return this.obj = { ref: '6,4 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 7.2) {
          return this.obj = { ref: '6,4 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '6,4 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 4:
        if (peso < 4.9) {
          return this.obj = { ref: '7,0 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 5.6) {
          return this.obj = { ref: '7,0 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 7.8) {
          return this.obj = { ref: '7,0 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '7,0 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 5:
        if (peso < 5.3) {
          return this.obj = { ref: '7,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 6) {
          return this.obj = { ref: '7,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 8.4) {
          return this.obj = { ref: '7,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '7,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 6:
        if (peso < 5.7) {
          return this.obj = { ref: '7,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 6.4) {
          return this.obj = { ref: '7,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 8.8) {
          return this.obj = { ref: '7,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '7,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 7:
        if (peso < 5.9) {
          return this.obj = { ref: '8,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 6.7) {
          return this.obj = { ref: '8,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 9.2) {
          return this.obj = { ref: '8,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '8,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 8:
        if (peso < 6.2) {
          return this.obj = { ref: '8,6 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 6.9) {
          return this.obj = { ref: '8,6 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 9.6) {
          return this.obj = { ref: '8,6 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '8,6 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 9:
        if (peso < 6.4) {
          return this.obj = { ref: '8,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 7.1) {
          return this.obj = { ref: '8,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 9.9) {
          return this.obj = { ref: '8,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '8,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 10:
        if (peso < 6.6) {
          return this.obj = { ref: '9,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 7.4) {
          return this.obj = { ref: '9,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 10.2) {
          return this.obj = { ref: '9,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '9,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 11:
        if (peso < 6.8) {
          return this.obj = { ref: '9,4 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 7.6) {
          return this.obj = { ref: '9,4 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 10.5) {
          return this.obj = { ref: '9,4 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '9,4 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 12:
        if (peso < 6.9) {
          return this.obj = { ref: '9,6 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 7.7) {
          return this.obj = { ref: '9,6 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 10.8) {
          return this.obj = { ref: '9,6 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '9,6 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 13:
        if (peso < 7.1) {
          return this.obj = { ref: '9,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 7.9) {
          return this.obj = { ref: '9,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 11) {
          return this.obj = { ref: '9,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '9,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 14:
        if (peso < 7.2) {
          return this.obj = { ref: '10,1 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.1) {
          return this.obj = { ref: '10,1 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 11.3) {
          return this.obj = { ref: '10,1 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '10,1 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 15:
        if (peso < 7.4) {
          return this.obj = { ref: '10,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 8.3) {
          return this.obj = { ref: '10,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 11.5) {
          return this.obj = { ref: '10,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '10,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 16:
        if (peso < 7.5) {
          return this.obj = { ref: '10,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 8.4) {
          return this.obj = { ref: '10,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 11.7) {
          return this.obj = { ref: '10,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '10,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 17:
        if (peso < 7.7) {
          return this.obj = { ref: '10,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 8.6) {
          return this.obj = { ref: '10,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 12) {
          return this.obj = { ref: '10,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '10,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 18:
        if (peso < 7.8) {
          return this.obj = { ref: '10,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 8.8) {
          return this.obj = { ref: '10,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 12.2) {
          return this.obj = { ref: '10,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '10,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 19:
        if (peso < 8) {
          return this.obj = { ref: '11,1 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 8.9) {
          return this.obj = { ref: '11,1 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 12.5) {
          return this.obj = { ref: '11,1 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '11,1 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 20:
        if (peso < 8.1) {
          return this.obj = { ref: '11,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.1) {
          return this.obj = { ref: '11,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 12.7) {
          return this.obj = { ref: '11,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '11,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 21:
        if (peso < 8.2) {
          return this.obj = { ref: '11,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.2) {
          return this.obj = { ref: '11,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 12.9) {
          return this.obj = { ref: '11,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '11,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 22:
        if (peso < 8.4) {
          return this.obj = { ref: '11,8 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.4) {
          return this.obj = { ref: '11,8 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 13.2) {
          return this.obj = { ref: '11,8 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '11,8 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 23:
        if (peso < 8.5) {
          return this.obj = { ref: '12 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.5) {
          return this.obj = { ref: '12 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 13.4) {
          return this.obj = { ref: '12 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '12 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 24:
        if (peso < 8.6) {
          return this.obj = { ref: '12,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.7) {
          return this.obj = { ref: '12,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 13.6) {
          return this.obj = { ref: '12,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '12,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 25:
        if (peso < 8.8) {
          return this.obj = { ref: '12,4 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.8) {
          return this.obj = { ref: '12,4 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 13.9) {
          return this.obj = { ref: '12,4 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '12,4 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 26:
        if (peso < 8.9) {
          return this.obj = { ref: '12,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10) {
          return this.obj = { ref: '12,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 15.1) {
          return this.obj = { ref: '12,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '12,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 27:
        if (peso < 9) {
          return this.obj = { ref: '12,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.1) {
          return this.obj = { ref: '12,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 14.3) {
          return this.obj = { ref: '12,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '12,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 28:
        if (peso < 9.1) {
          return this.obj = { ref: '12,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.2) {
          return this.obj = { ref: '12,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 14.5) {
          return this.obj = { ref: '12,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '12,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 29:
        if (peso < 9.2) {
          return this.obj = { ref: '13,1 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.4) {
          return this.obj = { ref: '13,1 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 14.8) {
          return this.obj = { ref: '13,1 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '13,1 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 30:
        if (peso < 9.4) {
          return this.obj = { ref: '13,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.5) {
          return this.obj = { ref: '13,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 15) {
          return this.obj = { ref: '13,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '13,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 31:
        if (peso < 9.5) {
          return this.obj = { ref: '13,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.7) {
          return this.obj = { ref: '13,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 15.2) {
          return this.obj = { ref: '13,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '13,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 32:
        if (peso < 9.6) {
          return this.obj = { ref: '13,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.8) {
          return this.obj = { ref: '13,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 15.4) {
          return this.obj = { ref: '13,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '13,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 33:
        if (peso < 9.7) {
          return this.obj = { ref: '13,8 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.9) {
          return this.obj = { ref: '13,8 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 15.6) {
          return this.obj = { ref: '13,8 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '13,8 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 34:
        if (peso < 9.8) {
          return this.obj = { ref: '14,0 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11) {
          return this.obj = { ref: '14,0 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 15.8) {
          return this.obj = { ref: '14,0 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '14,0 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 35:
        if (peso < 9.9) {
          return this.obj = { ref: '14,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.2) {
          return this.obj = { ref: '14,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 16) {
          return this.obj = { ref: '14,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '14,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 36:
        if (peso < 10) {
          return this.obj = { ref: '14,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.3) {
          return this.obj = { ref: '14,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 16.2) {
          return this.obj = { ref: '14,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '14,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 37:
        if (peso < 10.1) {
          return this.obj = { ref: '14,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.4) {
          return this.obj = { ref: '14,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 16.4) {
          return this.obj = { ref: '14,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '14,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 38:
        if (peso < 10.2) {
          return this.obj = { ref: '14,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.5) {
          return this.obj = { ref: '14,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 16.6) {
          return this.obj = { ref: '14,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '14,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 39:
        if (peso < 10.3) {
          return this.obj = { ref: '14,8 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.6) {
          return this.obj = { ref: '14,8 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 16.8) {
          return this.obj = { ref: '14,8 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '14,8 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 40:
        if (peso < 10.4) {
          return this.obj = { ref: '15 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.8) {
          return this.obj = { ref: '15 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 17) {
          return this.obj = { ref: '15 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 41:
        if (peso < 10.5) {
          return this.obj = { ref: '15,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.9) {
          return this.obj = { ref: '15,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 17.2) {
          return this.obj = { ref: '15,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 42:
        if (peso < 10.6) {
          return this.obj = { ref: '15,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12) {
          return this.obj = { ref: '15,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 17.4) {
          return this.obj = { ref: '15,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 43:
        if (peso < 10.7) {
          return this.obj = { ref: '15,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.1) {
          return this.obj = { ref: '15,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 17.6) {
          return this.obj = { ref: '15,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 44:
        if (peso < 10.8) {
          return this.obj = { ref: '15,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.2) {
          return this.obj = { ref: '15,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 17.8) {
          return this.obj = { ref: '15,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 45:
        if (peso < 10.9) {
          return this.obj = { ref: '15,8 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.4) {
          return this.obj = { ref: '15,8 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 18) {
          return this.obj = { ref: '15,8 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15,8 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 46:
        if (peso < 11) {
          return this.obj = { ref: '16 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.5) {
          return this.obj = { ref: '16 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 18.2) {
          return this.obj = { ref: '16 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '16 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 47:
        if (peso < 11.1) {
          return this.obj = { ref: '16,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.6) {
          return this.obj = { ref: '16,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 18.4) {
          return this.obj = { ref: '16,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '16,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 48:
        if (peso < 11.2) {
          return this.obj = { ref: '16,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.7) {
          return this.obj = { ref: '16,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 18.6) {
          return this.obj = { ref: '16,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '16,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 49:
        if (peso < 11.3) {
          return this.obj = { ref: '16,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.8) {
          return this.obj = { ref: '16,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 18.8) {
          return this.obj = { ref: '16,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '16,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 50:
        if (peso < 11.4) {
          return this.obj = { ref: '16,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.9) {
          return this.obj = { ref: '16,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 19) {
          return this.obj = { ref: '16,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '16,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 51:
        if (peso < 11.5) {
          return this.obj = { ref: '16,8 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.1) {
          return this.obj = { ref: '16,8 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 19.2) {
          return this.obj = { ref: '16,8 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '16,8 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 52:
        if (peso < 11.6) {
          return this.obj = { ref: '17 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.2) {
          return this.obj = { ref: '17 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 19.4) {
          return this.obj = { ref: '17 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 53:
        if (peso < 11.7) {
          return this.obj = { ref: '17,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.3) {
          return this.obj = { ref: '17,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 19.6) {
          return this.obj = { ref: '17,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 54:
        if (peso < 11.8) {
          return this.obj = { ref: '17,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.4) {
          return this.obj = { ref: '17,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 19.8) {
          return this.obj = { ref: '17,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 55:
        if (peso < 11.9) {
          return this.obj = { ref: '17,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.5) {
          return this.obj = { ref: '17,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 20) {
          return this.obj = { ref: '17,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 56:
        if (peso < 12) {
          return this.obj = { ref: '17,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.6) {
          return this.obj = { ref: '17,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 20.2) {
          return this.obj = { ref: '17,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 57:
        if (peso < 12.1) {
          return this.obj = { ref: '17,8 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.7) {
          return this.obj = { ref: '17,8 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 20.4) {
          return this.obj = { ref: '17,8 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17,8 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 58:
        if (peso < 12.2) {
          return this.obj = { ref: '18 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.8) {
          return this.obj = { ref: '18 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 20.6) {
          return this.obj = { ref: '18 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '18 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 59:
        if (peso < 12.3) {
          return this.obj = { ref: '18,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 14) {
          return this.obj = { ref: '18,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 20.8) {
          return this.obj = { ref: '18,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '18,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 60:
        if (peso < 12.4) {
          return this.obj = { ref: '18,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 14.1) {
          return this.obj = { ref: '18,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 21) {
          return this.obj = { ref: '18,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '18,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }
    }
  }

  public pesoIdadeMenina(idade: number, peso: number): IObj {
    switch (idade) {
      case 0:
        if (peso < 2) {
          return this.obj = { ref: '3,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 2.4) {
          return this.obj = { ref: '3,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 3.7) {
          return this.obj = { ref: '3,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '3,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 1:
        if (peso < 2.7) {
          return this.obj = { ref: '4,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 3.2) {
          return this.obj = { ref: '4,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 4.8) {
          return this.obj = { ref: '4,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '4,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 2:
        if (peso < 3.4) {
          return this.obj = { ref: '5,1 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 3.9) {
          return this.obj = { ref: '5,1 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 5.8) {
          return this.obj = { ref: '5,1 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '5,1 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 3:
        if (peso < 4) {
          return this.obj = { ref: '5,8 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 4.5) {
          return this.obj = { ref: '5,8 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 6.6) {
          return this.obj = { ref: '5,8 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '5,8 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 4:
        if (peso < 4.4) {
          return this.obj = { ref: '6,4 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 5) {
          return this.obj = { ref: '6,4 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 7.3) {
          return this.obj = { ref: '6,4 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '6,4 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 5:
        if (peso < 4.8) {
          return this.obj = { ref: '6,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 5.4) {
          return this.obj = { ref: '6,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 7.8) {
          return this.obj = { ref: '6,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '6,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 6:
        if (peso < 5.1) {
          return this.obj = { ref: '7,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 5.7) {
          return this.obj = { ref: '7,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 8.2) {
          return this.obj = { ref: '7,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '7,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 7:
        if (peso < 5.3) {
          return this.obj = { ref: '7,6 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 6) {
          return this.obj = { ref: '7,6 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 8.6) {
          return this.obj = { ref: '7,6 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '7,6 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 8:
        if (peso < 5.6) {
          return this.obj = { ref: '7,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 6.3) {
          return this.obj = { ref: '7,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 9) {
          return this.obj = { ref: '7,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '7,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 9:
        if (peso < 5.8) {
          return this.obj = { ref: '8,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 6.5) {
          return this.obj = { ref: '8,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 9.3) {
          return this.obj = { ref: '8,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '8,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 10:
        if (peso < 5.9) {
          return this.obj = { ref: '8,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 6.7) {
          return this.obj = { ref: '8,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 9.6) {
          return this.obj = { ref: '8,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '8,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 11:
        if (peso < 6.1) {
          return this.obj = { ref: '8,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 6.9) {
          return this.obj = { ref: '8,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 9.9) {
          return this.obj = { ref: '8,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '8,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 12:
        if (peso < 6.3) {
          return this.obj = { ref: '8,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 7) {
          return this.obj = { ref: '8,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 10.1) {
          return this.obj = { ref: '8,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '8,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 13:
        if (peso < 6.4) {
          return this.obj = { ref: '9,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 7.2) {
          return this.obj = { ref: '9,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 10.4) {
          return this.obj = { ref: '9,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '9,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 14:
        if (peso < 6.6) {
          return this.obj = { ref: '9,4 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 7.4) {
          return this.obj = { ref: '9,4 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 10.6) {
          return this.obj = { ref: '9,4 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '9,4 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 15:
        if (peso < 6.7) {
          return this.obj = { ref: '9,6 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 7.6) {
          return this.obj = { ref: '9,6 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 10.9) {
          return this.obj = { ref: '9,6 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '9,6 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 16:
        if (peso < 6.9) {
          return this.obj = { ref: '9,8 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 7.7) {
          return this.obj = { ref: '9,8 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 11.1) {
          return this.obj = { ref: '9,8 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '9,8 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 17:
        if (peso < 7) {
          return this.obj = { ref: '10 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 7.9) {
          return this.obj = { ref: '10 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 11.4) {
          return this.obj = { ref: '10 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '10 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 18:
        if (peso < 7.2) {
          return this.obj = { ref: '10,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 8.1) {
          return this.obj = { ref: '10,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 11.6) {
          return this.obj = { ref: '10,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '10,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 19:
        if (peso < 7.3) {
          return this.obj = { ref: '10,4 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 8.2) {
          return this.obj = { ref: '10,4 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 11.8) {
          return this.obj = { ref: '10,4 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '10,4 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 20:
        if (peso < 7.5) {
          return this.obj = { ref: '10,6 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 8.4) {
          return this.obj = { ref: '10,6 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 12.1) {
          return this.obj = { ref: '10,6 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '10,6 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 21:
        if (peso < 7.6) {
          return this.obj = { ref: '10,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 8.6) {
          return this.obj = { ref: '10,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 12.3) {
          return this.obj = { ref: '10,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '10,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 22:
        if (peso < 7.8) {
          return this.obj = { ref: '11,1 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 8.7) {
          return this.obj = { ref: '11,1 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 12.5) {
          return this.obj = { ref: '11,1 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '11,1 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 23:
        if (peso < 7.9) {
          return this.obj = { ref: '11,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 8.9) {
          return this.obj = { ref: '11,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 12.8) {
          return this.obj = { ref: '11,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '11,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 24:
        if (peso < 8.1) {
          return this.obj = { ref: '11,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9) {
          return this.obj = { ref: '11,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 13) {
          return this.obj = { ref: '11,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '11,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 25:
        if (peso < 8.2) {
          return this.obj = { ref: '11,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.2) {
          return this.obj = { ref: '11,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 13.3) {
          return this.obj = { ref: '11,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '11,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 26:
        if (peso < 8.4) {
          return this.obj = { ref: '11,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.4) {
          return this.obj = { ref: '11,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 13.5) {
          return this.obj = { ref: '11,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '11,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 27:
        if (peso < 8.5) {
          return this.obj = { ref: '12,1 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.5) {
          return this.obj = { ref: '12,1 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 13.7) {
          return this.obj = { ref: '12,1 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '12,1 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 28:
        if (peso < 8.6) {
          return this.obj = { ref: '12,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.7) {
          return this.obj = { ref: '12,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 14) {
          return this.obj = { ref: '12,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '12,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 29:
        if (peso < 8.8) {
          return this.obj = { ref: '12,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 9.8) {
          return this.obj = { ref: '12,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 14.2) {
          return this.obj = { ref: '12,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '12,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 30:
        if (peso < 8.9) {
          return this.obj = { ref: '12,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10) {
          return this.obj = { ref: '12,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 14.4) {
          return this.obj = { ref: '12,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '12,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 31:
        if (peso < 9) {
          return this.obj = { ref: '12,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.1) {
          return this.obj = { ref: '12,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 14.7) {
          return this.obj = { ref: '12,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '12,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 32:
        if (peso < 9.1) {
          return this.obj = { ref: '13,1 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.3) {
          return this.obj = { ref: '13,1 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 14.9) {
          return this.obj = { ref: '13,1 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '13,1 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 33:
        if (peso < 9.3) {
          return this.obj = { ref: '13,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.4) {
          return this.obj = { ref: '13,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 15.1) {
          return this.obj = { ref: '13,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '13,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 34:
        if (peso < 9.4) {
          return this.obj = { ref: '13,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.5) {
          return this.obj = { ref: '13,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 15.4) {
          return this.obj = { ref: '13,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '13,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 35:
        if (peso < 9.5) {
          return this.obj = { ref: '13,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.7) {
          return this.obj = { ref: '13,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 15.6) {
          return this.obj = { ref: '13,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '13,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 36:
        if (peso < 9.6) {
          return this.obj = { ref: '13,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.8) {
          return this.obj = { ref: '13,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 15.8) {
          return this.obj = { ref: '13,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '13,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 37:
        if (peso < 9.7) {
          return this.obj = { ref: '14 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 10.9) {
          return this.obj = { ref: '14 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 16) {
          return this.obj = { ref: '14 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '14 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 38:
        if (peso < 9.8) {
          return this.obj = { ref: '14,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.1) {
          return this.obj = { ref: '14,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 16.3) {
          return this.obj = { ref: '14,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '14,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 39:
        if (peso < 9.9) {
          return this.obj = { ref: '14,4 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.2) {
          return this.obj = { ref: '14,4 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 16.5) {
          return this.obj = { ref: '14,4 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '14,4 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 40:
        if (peso < 10.1) {
          return this.obj = { ref: '14,6 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.3) {
          return this.obj = { ref: '14,6 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 16.7) {
          return this.obj = { ref: '14,6 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '14,6 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 41:
        if (peso < 10.2) {
          return this.obj = { ref: '14,8 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.5) {
          return this.obj = { ref: '14,8 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 16.9) {
          return this.obj = { ref: '14,8 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '14,8 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 42:
        if (peso < 10.3) {
          return this.obj = { ref: '15,0 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.6) {
          return this.obj = { ref: '15,0 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 17.2) {
          return this.obj = { ref: '15,0 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15,0 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 43:
        if (peso < 10.4) {
          return this.obj = { ref: '15,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.7) {
          return this.obj = { ref: '15,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 17.4) {
          return this.obj = { ref: '15,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 44:
        if (peso < 10.5) {
          return this.obj = { ref: '15,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 11.8) {
          return this.obj = { ref: '15,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 17.6) {
          return this.obj = { ref: '15,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 45:
        if (peso < 10.6) {
          return this.obj = { ref: '15,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12) {
          return this.obj = { ref: '15,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 17.8) {
          return this.obj = { ref: '15,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 46:
        if (peso < 10.7) {
          return this.obj = { ref: '15,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.1) {
          return this.obj = { ref: '15,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 18.1) {
          return this.obj = { ref: '15,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 47:
        if (peso < 10.8) {
          return this.obj = { ref: '15,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.2) {
          return this.obj = { ref: '15,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 18.3) {
          return this.obj = { ref: '15,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '15,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 48:
        if (peso < 10.9) {
          return this.obj = { ref: '16,1 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.3) {
          return this.obj = { ref: '16,1 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 18.5) {
          return this.obj = { ref: '16,1 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '16,1 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 49:
        if (peso < 11) {
          return this.obj = { ref: '16,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.4) {
          return this.obj = { ref: '16,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 18.8) {
          return this.obj = { ref: '16,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '16,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 50:
        if (peso < 11.1) {
          return this.obj = { ref: '16,4 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.6) {
          return this.obj = { ref: '16,4 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 19) {
          return this.obj = { ref: '16,4 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '16,4 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 51:
        if (peso < 11.2) {
          return this.obj = { ref: '16,6 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.7) {
          return this.obj = { ref: '16,6 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 19.2) {
          return this.obj = { ref: '16,6 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '16,6 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 52:
        if (peso < 11.3) {
          return this.obj = { ref: '16,8 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.8) {
          return this.obj = { ref: '16,8 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 19.4) {
          return this.obj = { ref: '16,8 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '16,8 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 53:
        if (peso < 11.4) {
          return this.obj = { ref: '17,0 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 12.9) {
          return this.obj = { ref: '17,0 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 19.7) {
          return this.obj = { ref: '17,0 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17,0 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 54:
        if (peso < 11.5) {
          return this.obj = { ref: '17,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13) {
          return this.obj = { ref: '17,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 19.9) {
          return this.obj = { ref: '17,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 55:
        if (peso < 11.6) {
          return this.obj = { ref: '17,3 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.2) {
          return this.obj = { ref: '17,3 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 20.1) {
          return this.obj = { ref: '17,3 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17,3 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 56:
        if (peso < 11.7) {
          return this.obj = { ref: '17,5 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.3) {
          return this.obj = { ref: '17,5 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 20.3) {
          return this.obj = { ref: '17,5 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17,5 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 57:
        if (peso < 11.8) {
          return this.obj = { ref: '17,7 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.4) {
          return this.obj = { ref: '17,7 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 20.6) {
          return this.obj = { ref: '17,7 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17,7 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 58:
        if (peso < 11.9) {
          return this.obj = { ref: '17,9 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.5) {
          return this.obj = { ref: '17,9 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 20.8) {
          return this.obj = { ref: '17,9 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '17,9 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 59:
        if (peso < 12) {
          return this.obj = { ref: '18 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.6) {
          return this.obj = { ref: '18 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 21) {
          return this.obj = { ref: '18 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '18 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }

      case 60:
        if (peso < 12.1) {
          return this.obj = { ref: '18,2 kg', text: 'Peso para Idade: Muito Baixo', brush: 'red' };
        } else if (peso < 13.7) {
          return this.obj = { ref: '18,2 kg', text: 'Peso para Idade: Baixo', brush: 'red' };
        } else if (peso < 21.2) {
          return this.obj = { ref: '18,2 kg', text: 'Peso para Idade: Adequado', brush: 'green' };
        } else {
          return this.obj = { ref: '18,2 kg', text: 'Peso para Idade: Elevado', brush: 'red' };
        }
    }
  }

  public pesoEstaturaMenino(peso: number, altura: number): IObj {
    if (altura > 0.44) {
      switch (altura) {
        case 0.45:
          if (peso < 1.9) {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.0) {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 2.7) {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 3) {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 3.3) {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.46:
          if (peso < 2.0) {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.2) {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 2.9) {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 3.1) {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 3.5) {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.47:
          if (peso < 2.1) {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.3) {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 3) {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 3.3) {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 3.7) {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.48:
          if (peso < 2.3) {
            return this.obj = { ref: '2,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.5) {
            return this.obj = { ref: '2,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 3.2) {
            return this.obj = { ref: '2,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 3.6) {
            return this.obj = { ref: '2,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 3.9) {
            return this.obj = { ref: '2,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '2,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.49:
          if (peso < 2.4) {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.6) {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 3.4) {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 3.8) {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 4.2) {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.5:
          if (peso < 2.6) {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.8) {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 3.6) {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 4) {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 4.4) {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '3,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.51:
          if (peso < 2.7) {
            return this.obj = { ref: '3,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 3.0) {
            return this.obj = { ref: '3,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 3.9) {
            return this.obj = { ref: '3,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 4.2) {
            return this.obj = { ref: '3,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 4.7) {
            return this.obj = { ref: '3,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '3,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.52:
          if (peso < 2.9) {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 3.2) {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 4.1) {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 4.5) {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 5) {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.53:
          if (peso < 3.1) {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 3.4) {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 4.4) {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 4.8) {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 5.3) {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.54:
          if (peso < 3.3) {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 3.6) {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 4.7) {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 5.1) {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 5.6) {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.55:
          if (peso < 3.6) {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 3.8) {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 5) {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 5.4) {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 6) {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.56:
          if (peso < 3.8) {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 4.1) {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 5.3) {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 5.8) {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 6.3) {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.57:
          if (peso < 4.0) {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 4.3) {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 5.6) {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 6.1) {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 6.7) {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.58:
          if (peso < 4.3) {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 4.6) {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 5.9) {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 6.4) {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 7.1) {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.59:
          if (peso < 4.5) {
            return this.obj = { ref: '5,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 4.8) {
            return this.obj = { ref: '5,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 6.2) {
            return this.obj = { ref: '5,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 6.8) {
            return this.obj = { ref: '5,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 7.4) {
            return this.obj = { ref: '5,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '5,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.60:
          if (peso < 4.7) {
            return this.obj = { ref: '6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 5.1) {
            return this.obj = { ref: '6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 6.5) {
            return this.obj = { ref: '6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 7.1) {
            return this.obj = { ref: '6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 7.8) {
            return this.obj = { ref: '6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.61:
          if (peso < 4.9) {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 5.3) {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 6.8) {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 7.4) {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 8.1) {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.62:
          if (peso < 5.1) {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 5.6) {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 7.1) {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 7.7) {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 8.5) {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '6,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.63:
          if (peso < 5.3) {
            return this.obj = { ref: '6,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 5.8) {
            return this.obj = { ref: '6,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 7.4) {
            return this.obj = { ref: '6,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 8.0) {
            return this.obj = { ref: '6,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 8.8) {
            return this.obj = { ref: '6,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '6,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.64:
          if (peso < 5.5) {
            return this.obj = { ref: '7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 6.0) {
            return this.obj = { ref: '7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 7.6) {
            return this.obj = { ref: '7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 8.3) {
            return this.obj = { ref: '7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 9.1) {
            return this.obj = { ref: '7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.65:
          if (peso < 5.7) {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 6.2) {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 7.9) {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 8.6) {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 9.4) {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.66:
          if (peso < 5.9) {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 6.4) {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 8.2) {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 8.9) {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 9.7) {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.67:
          if (peso < 6.1) {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 6.6) {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 8.4) {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 9.2) {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 10) {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.68:
          if (peso < 6.3) {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 6.8) {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 8.7) {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 9.4) {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 10.3) {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.69:
          if (peso < 6.5) {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.0) {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 8.9) {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 9.7) {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 10.6) {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.70:
          if (peso < 6.6) {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.2) {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 9.2) {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 10) {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 10.9) {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.71:
          if (peso < 6.8) {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.4) {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 9.4) {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 10.2) {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 11.2) {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.72:
          if (peso < 7.0) {
            return this.obj = { ref: '8,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.6) {
            return this.obj = { ref: '8,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 9.6) {
            return this.obj = { ref: '8,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 10.5) {
            return this.obj = { ref: '8,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 11.5) {
            return this.obj = { ref: '8,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '8,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.73:
          if (peso < 7.2) {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.7) {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 9.9) {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 10.8) {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 11.8) {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.74:
          if (peso < 7.3) {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.9) {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 10.1) {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 11) {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 12.1) {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.75:
          if (peso < 7.5) {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.1) {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 10.3) {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 11.3) {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 12.3) {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.76:
          if (peso < 7.6) {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.3) {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 10.6) {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 11.5) {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 12.6) {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.77:
          if (peso < 7.8) {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.4) {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 10.8) {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 11.7) {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 12.8) {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.78:
          if (peso < 7.9) {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.6) {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 11.0) {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 12.0) {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 13.1) {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.79:
          if (peso < 8.1) {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.7) {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 11.2) {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 12.2) {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 13.3) {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.8:
          if (peso < 8.2) {
            return this.obj = { ref: '10,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.9) {
            return this.obj = { ref: '10,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 11.4) {
            return this.obj = { ref: '10,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 12.4) {
            return this.obj = { ref: '10,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 13.6) {
            return this.obj = { ref: '10,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '10,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.81:
          if (peso < 8.4) {
            return this.obj = { ref: '10,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 9.1) {
            return this.obj = { ref: '10,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 11.6) {
            return this.obj = { ref: '10,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 12.6) {
            return this.obj = { ref: '10,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 13.8) {
            return this.obj = { ref: '10,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '10,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.82:
          if (peso < 8.5) {
            return this.obj = { ref: '10,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 9.2) {
            return this.obj = { ref: '10,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 11.8) {
            return this.obj = { ref: '10,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 12.8) {
            return this.obj = { ref: '10,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 14) {
            return this.obj = { ref: '10,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '10,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.83:
          if (peso < 8.7) {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 9.4) {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 12) {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 13.1) {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 14.3) {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.84:
          if (peso < 8.9) {
            return this.obj = { ref: '11,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 9.6) {
            return this.obj = { ref: '11,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 12.2) {
            return this.obj = { ref: '11,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 13.3) {
            return this.obj = { ref: '11,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 14.6) {
            return this.obj = { ref: '11,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '11,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.85:
          if (peso < 9.1) {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 9.8) {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 12.5) {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 13.6) {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 14.9) {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.86:
          if (peso < 9.3) {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 10.0) {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 12.8) {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 13.9) {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 15.2) {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.87:
          if (peso < 9.5) {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 10.2) {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 13.0) {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 14.2) {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 15.5) {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.88:
          if (peso < 9.7) {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 10.5) {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 13.3) {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 14.5) {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 15.8) {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.89:
          if (peso < 9.9) {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 10.7) {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 13.5) {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 14.7) {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 16.1) {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.90:
          if (peso < 10.1) {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 10.9) {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 13.8) {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 15.0) {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 16.4) {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.91:
          if (peso < 10.3) {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 11.1) {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 14.1) {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 15.3) {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 16.7) {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.92:
          if (peso < 10.5) {
            return this.obj = { ref: '13,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 11.3) {
            return this.obj = { ref: '13,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 14.3) {
            return this.obj = { ref: '13,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 15.6) {
            return this.obj = { ref: '13,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 17) {
            return this.obj = { ref: '13,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '13,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.93:
          if (peso < 10.7) {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 11.5) {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 14.6) {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 15.8) {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 17.3) {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.94:
          if (peso < 10.8) {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 11.7) {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 14.8) {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 16.1) {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 17.6) {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.95:
          if (peso < 11.0) {
            return this.obj = { ref: '13,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 11.9) {
            return this.obj = { ref: '13,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 15.1) {
            return this.obj = { ref: '13,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 16.4) {
            return this.obj = { ref: '13,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 17.6) {
            return this.obj = { ref: '13,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '13,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.96:
          if (peso < 11.0) {
            return this.obj = { ref: '14,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 11.9) {
            return this.obj = { ref: '14,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 15.1) {
            return this.obj = { ref: '14,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 16.4) {
            return this.obj = { ref: '14,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 17.6) {
            return this.obj = { ref: '14,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '14,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.97:
          if (peso < 11.4) {
            return this.obj = { ref: '14,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 12.3) {
            return this.obj = { ref: '14,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 15.6) {
            return this.obj = { ref: '14,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 17) {
            return this.obj = { ref: '14,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 18.5) {
            return this.obj = { ref: '14,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '14,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.98:
          if (peso < 11.6) {
            return this.obj = { ref: '14,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 12.5) {
            return this.obj = { ref: '14,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 15.9) {
            return this.obj = { ref: '14,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 17.3) {
            return this.obj = { ref: '14,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 18.9) {
            return this.obj = { ref: '14,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '14,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.99:
          if (peso < 11.8) {
            return this.obj = { ref: '14,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 12.7) {
            return this.obj = { ref: '14,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 16.2) {
            return this.obj = { ref: '14,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 17.6) {
            return this.obj = { ref: '14,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 19.2) {
            return this.obj = { ref: '14,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '14,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1:
          if (peso < 12.0) {
            return this.obj = { ref: '15,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 12.9) {
            return this.obj = { ref: '15,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 16.5) {
            return this.obj = { ref: '15,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 18.0) {
            return this.obj = { ref: '15,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 19.6) {
            return this.obj = { ref: '15,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '15,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.01:
          if (peso < 12.2) {
            return this.obj = { ref: '15,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 13.2) {
            return this.obj = { ref: '15,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 16.8) {
            return this.obj = { ref: '15,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 18.3) {
            return this.obj = { ref: '15,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 20) {
            return this.obj = { ref: '15,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '15,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.02:
          if (peso < 12.4) {
            return this.obj = { ref: '15,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 13.4) {
            return this.obj = { ref: '15,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 17.1) {
            return this.obj = { ref: '15,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 18.7) {
            return this.obj = { ref: '15,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 20.4) {
            return this.obj = { ref: '15,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '15,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.03:
          if (peso < 12.6) {
            return this.obj = { ref: '16 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 13.6) {
            return this.obj = { ref: '16 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 17.4) {
            return this.obj = { ref: '16 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 19.0) {
            return this.obj = { ref: '16 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 20.8) {
            return this.obj = { ref: '16 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '16 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.04:
          if (peso < 12.8) {
            return this.obj = { ref: '16,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 13.9) {
            return this.obj = { ref: '16,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 17.8) {
            return this.obj = { ref: '16,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 19.4) {
            return this.obj = { ref: '16,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 21.2) {
            return this.obj = { ref: '16,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '16,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.05:
          if (peso < 13.0) {
            return this.obj = { ref: '16,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 14.1) {
            return this.obj = { ref: '16,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 18.1) {
            return this.obj = { ref: '16,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 19.8) {
            return this.obj = { ref: '16,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 21.7) {
            return this.obj = { ref: '16,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '16,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.06:
          if (peso < 13.3) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 14.4) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 18.5) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 20.2) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 22.1) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.07:
          if (peso < 13.5) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 14.6) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 18.8) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 20.6) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 22.6) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.08:
          if (peso < 13.7) {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 14.9) {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 19.2) {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 21.0) {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 23.1) {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.09:
          if (peso < 14.0) {
            return this.obj = { ref: '17,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 15.1) {
            return this.obj = { ref: '17,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 19.6) {
            return this.obj = { ref: '17,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 21.4) {
            return this.obj = { ref: '17,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 23.6) {
            return this.obj = { ref: '17,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '17,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.10:
          if (peso < 14.2) {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 15.4) {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 20.0) {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 21.9) {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 24.1) {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.11:
          if (peso < 14.6) {
            return this.obj = { ref: '18,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 15.9) {
            return this.obj = { ref: '18,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 20.7) {
            return this.obj = { ref: '18,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 22.7) {
            return this.obj = { ref: '18,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 25) {
            return this.obj = { ref: '18,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '18,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.12:
          if (peso < 14.6) {
            return this.obj = { ref: '19,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 15.9) {
            return this.obj = { ref: '19,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 20.7) {
            return this.obj = { ref: '19,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 22.7) {
            return this.obj = { ref: '19,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 25) {
            return this.obj = { ref: '19,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '19,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.13:
          if (peso < 14.6) {
            return this.obj = { ref: '19,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 15.9) {
            return this.obj = { ref: '19,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 20.7) {
            return this.obj = { ref: '19,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 22.7) {
            return this.obj = { ref: '19,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 25) {
            return this.obj = { ref: '19,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '19,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.14:
          if (peso < 15.4) {
            return this.obj = { ref: '20 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 16.8) {
            return this.obj = { ref: '20 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 21.9) {
            return this.obj = { ref: '20 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 24.1) {
            return this.obj = { ref: '20 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 26.6) {
            return this.obj = { ref: '20 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '20 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.15:
          if (peso < 15.7) {
            return this.obj = { ref: '20,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 17.1) {
            return this.obj = { ref: '20,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 22.4) {
            return this.obj = { ref: '20,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 24.6) {
            return this.obj = { ref: '20,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 27.2) {
            return this.obj = { ref: '20,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '20,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.16:
          if (peso < 16) {
            return this.obj = { ref: '20,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 17.4) {
            return this.obj = { ref: '20,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 22.8) {
            return this.obj = { ref: '20,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 25.1) {
            return this.obj = { ref: '20,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 27.8) {
            return this.obj = { ref: '20,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '20,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 1.17:
          if (peso < 16.2) {
            return this.obj = { ref: '21,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 17.7) {
            return this.obj = { ref: '21,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 23.3) {
            return this.obj = { ref: '21,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 25.6) {
            return this.obj = { ref: '21,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 28.3) {
            return this.obj = { ref: '21,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '21,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.18:
          if (peso < 16.5) {
            return this.obj = { ref: '21,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 18.0) {
            return this.obj = { ref: '21,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 23.7) {
            return this.obj = { ref: '21,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 26.1) {
            return this.obj = { ref: '21,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 28.9) {
            return this.obj = { ref: '21,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '21,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.19:
          if (peso < 16.8) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 18.3) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 24.1) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 26.6) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 29.5) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.19:
          if (peso < 16.8) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 18.3) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 24.1) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 26.6) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 29.5) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.20:
          if (peso < 17.1) {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 18.6) {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 24.6) {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 27.2) {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 30.1) {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

      }
    }
  }

  public pesoEstaturaMenina(peso: number, altura: number): IObj {
    if (altura > 0.44) {
      switch (altura) {
        case 0.45:
          if (peso < 1.9) {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.0) {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 2.7) {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 3) {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 3.3) {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '2,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.46:
          if (peso < 2.0) {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.2) {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 2.9) {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 3.1) {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 3.5) {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '2,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.47:
          if (peso < 2.2) {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.4) {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 3.1) {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 3.4) {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 3.7) {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '2,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.48:
          if (peso < 2.3) {
            return this.obj = { ref: '3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.5) {
            return this.obj = { ref: '3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 3.3) {
            return this.obj = { ref: '3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 3.6) {
            return this.obj = { ref: '3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 4.0) {
            return this.obj = { ref: '3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.49:
          if (peso < 2.4) {
            return this.obj = { ref: '3,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.6) {
            return this.obj = { ref: '3,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 3.5) {
            return this.obj = { ref: '3,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 3.8) {
            return this.obj = { ref: '3,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 4.2) {
            return this.obj = { ref: '3,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '3,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.5:
          if (peso < 2.6) {
            return this.obj = { ref: '3,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 2.8) {
            return this.obj = { ref: '3,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 3.7) {
            return this.obj = { ref: '3,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 4) {
            return this.obj = { ref: '3,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 4.5) {
            return this.obj = { ref: '3,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '3,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.51:
          if (peso < 2.8) {
            return this.obj = { ref: '3,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 3.0) {
            return this.obj = { ref: '3,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 3.9) {
            return this.obj = { ref: '3,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 4.3) {
            return this.obj = { ref: '3,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 4.8) {
            return this.obj = { ref: '3,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '3,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.52:
          if (peso < 2.9) {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 3.2) {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 4.2) {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 4.6) {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 5.1) {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '3,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.53:
          if (peso < 3.1) {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 3.4) {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 4.4) {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 4.9) {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 5.4) {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.54:
          if (peso < 3.3) {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 3.6) {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 4.7) {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 5.2) {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 5.7) {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '4,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.55:
          if (peso < 3.5) {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 3.8) {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 5) {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 5.5) {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 6.1) {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '4,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.56:
          if (peso < 3.7) {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 4.0) {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 5.3) {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 5.8) {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 6.4) {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '4,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.57:
          if (peso < 3.9) {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 4.3) {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 5.6) {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 6.1) {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 6.8) {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '5,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.58:
          if (peso < 4.1) {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 4.5) {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 5.9) {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 6.5) {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 7.1) {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '5,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.59:
          if (peso < 4.3) {
            return this.obj = { ref: '5,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 4.7) {
            return this.obj = { ref: '5,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 6.2) {
            return this.obj = { ref: '5,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 6.8) {
            return this.obj = { ref: '5,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 7.5) {
            return this.obj = { ref: '5,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '5,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.60:
          if (peso < 4.5) {
            return this.obj = { ref: '5,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 4.9) {
            return this.obj = { ref: '5,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 6.4) {
            return this.obj = { ref: '5,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 7.1) {
            return this.obj = { ref: '5,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 7.8) {
            return this.obj = { ref: '5,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '5,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.61:
          if (peso < 4.7) {
            return this.obj = { ref: '6,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 5.1) {
            return this.obj = { ref: '6,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 6.7) {
            return this.obj = { ref: '6,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 7.4) {
            return this.obj = { ref: '6,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 8.2) {
            return this.obj = { ref: '6,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '6,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.62:
          if (peso < 4.9) {
            return this.obj = { ref: '6,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 5.3) {
            return this.obj = { ref: '6,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 7.0) {
            return this.obj = { ref: '6,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 7.7) {
            return this.obj = { ref: '6,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 8.5) {
            return this.obj = { ref: '6,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '6,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.63:
          if (peso < 5.1) {
            return this.obj = { ref: '6,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 5.5) {
            return this.obj = { ref: '6,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 7.3) {
            return this.obj = { ref: '6,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 8.0) {
            return this.obj = { ref: '6,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 8.8) {
            return this.obj = { ref: '6,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '6,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.64:
          if (peso < 5.3) {
            return this.obj = { ref: '6.9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 5.7) {
            return this.obj = { ref: '6.9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 7.5) {
            return this.obj = { ref: '6.9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 8.3) {
            return this.obj = { ref: '6.9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 9.1) {
            return this.obj = { ref: '6.9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '6.9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.65:
          if (peso < 5.5) {
            return this.obj = { ref: '7,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 5.9) {
            return this.obj = { ref: '7,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 7.8) {
            return this.obj = { ref: '7,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 8.6) {
            return this.obj = { ref: '7,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 9.5) {
            return this.obj = { ref: '7,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '7,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.66:
          if (peso < 5.6) {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 6.1) {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 8.0) {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 8.8) {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 9.8) {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '7,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.67:
          if (peso < 5.8) {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 6.3) {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 8.3) {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 9.1) {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 10) {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '7,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.68:
          if (peso < 6.0) {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 6.5) {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 8.5) {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 9.4) {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 10.3) {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '7,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.69:
          if (peso < 6.1) {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 6.7) {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 8.7) {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 9.6) {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 10.6) {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.70:
          if (peso < 6.3) {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 6.9) {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 9.0) {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 9.9) {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 10.9) {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '8,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.71:
          if (peso < 6.5) {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.0) {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 9.2) {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 10.1) {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 11.1) {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '8,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.72:
          if (peso < 6.6) {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.2) {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 9.4) {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 10.3) {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 11.4) {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '8,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.73:
          if (peso < 6.8) {
            return this.obj = { ref: '8,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.4) {
            return this.obj = { ref: '8,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 9.6) {
            return this.obj = { ref: '8,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 10.6) {
            return this.obj = { ref: '8,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 11.7) {
            return this.obj = { ref: '8,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '8,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.74:
          if (peso < 6.9) {
            return this.obj = { ref: '9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.5) {
            return this.obj = { ref: '9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 9.8) {
            return this.obj = { ref: '9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 10.8) {
            return this.obj = { ref: '9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 12.1) {
            return this.obj = { ref: '9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.75:
          if (peso < 7.1) {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.7) {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 10) {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 11) {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 12.2) {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '9,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.76:
          if (peso < 7.2) {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 7.8) {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 10.2) {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 11.2) {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 12.4) {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '9,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.77:
          if (peso < 7.4) {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.0) {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 10.4) {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 11.5) {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 12.6) {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '9,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.78:
          if (peso < 7.5) {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.2) {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 10.6) {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 11.7) {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 12.9) {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '9,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.79:
          if (peso < 7.7) {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.3) {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 10.8) {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 11.9) {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 13.1) {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '9,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.8:
          if (peso < 7.8) {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.5) {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 11) {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 12.1) {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 13.4) {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '10,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.81:
          if (peso < 8.0) {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.7) {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 11.3) {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 12.4) {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 13.7) {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '10,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.82:
          if (peso < 8.1) {
            return this.obj = { ref: '10,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 8.8) {
            return this.obj = { ref: '10,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 11.5) {
            return this.obj = { ref: '10,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 12.6) {
            return this.obj = { ref: '10,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 13.9) {
            return this.obj = { ref: '10,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '10,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.83:
          if (peso < 8.3) {
            return this.obj = { ref: '10,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 9.0) {
            return this.obj = { ref: '10,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 11.8) {
            return this.obj = { ref: '10,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 13.1) {
            return this.obj = { ref: '10,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 14.3) {
            return this.obj = { ref: '10,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '10,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.84:
          if (peso < 8.5) {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 9.2) {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 12) {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 13.2) {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 14.5) {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '11 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.85:
          if (peso < 8.7) {
            return this.obj = { ref: '11,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 9.4) {
            return this.obj = { ref: '11,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 12.3) {
            return this.obj = { ref: '11,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 13.5) {
            return this.obj = { ref: '11,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 14.9) {
            return this.obj = { ref: '11,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '11,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.86:
          if (peso < 8.9) {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 9.7) {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 12.6) {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 13.8) {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 15.2) {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '11,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.87:
          if (peso < 9.1) {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 9.9) {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 12.8) {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 14.1) {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 15.5) {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '11,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.88:
          if (peso < 9.3) {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 10.1) {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 13.1) {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 14.4) {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 15.9) {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '12 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.89:
          if (peso < 9.5) {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 10.3) {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 13.4) {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 14.7) {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 16.2) {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '12,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.90:
          if (peso < 9.7) {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 10.5) {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 13.7) {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 15.0) {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 16.5) {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '12,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.91:
          if (peso < 9.9) {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 10.7) {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 13.9) {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 15.3) {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 16.9) {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '12,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.92:
          if (peso < 10.1) {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 10.9) {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 14.2) {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 15.6) {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 17.2) {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '13 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.93:
          if (peso < 10.2) {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 11.1) {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 14.5) {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 15.9) {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 17.5) {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '13,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 0.94:
          if (peso < 10.4) {
            return this.obj = { ref: '13,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 11.3) {
            return this.obj = { ref: '13,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 14.7) {
            return this.obj = { ref: '13,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 16.2) {
            return this.obj = { ref: '13,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 17.9) {
            return this.obj = { ref: '13,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '13,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.95:
          if (peso < 10.6) {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 11.5) {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 15.0) {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 16.5) {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 18.2) {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '13,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.96:
          if (peso < 10.8) {
            return this.obj = { ref: '14 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 11.7) {
            return this.obj = { ref: '14 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 15.3) {
            return this.obj = { ref: '14 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 16.8) {
            return this.obj = { ref: '14 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 18.6) {
            return this.obj = { ref: '14 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '14 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.97:
          if (peso < 11) {
            return this.obj = { ref: '14,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 12) {
            return this.obj = { ref: '14,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 15.6) {
            return this.obj = { ref: '14,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 17.1) {
            return this.obj = { ref: '14,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 18.9) {
            return this.obj = { ref: '14,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '14,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.98:
          if (peso < 11.2) {
            return this.obj = { ref: '14,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 12.2) {
            return this.obj = { ref: '14,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 15.9) {
            return this.obj = { ref: '14,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 17.5) {
            return this.obj = { ref: '14,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 19.3) {
            return this.obj = { ref: '14,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '14,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 0.99:
          if (peso < 11.4) {
            return this.obj = { ref: '14,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 12.4) {
            return this.obj = { ref: '14,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 16.2) {
            return this.obj = { ref: '14,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 17.8) {
            return this.obj = { ref: '14,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 19.6) {
            return this.obj = { ref: '14,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '14,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1:
          if (peso < 11.6) {
            return this.obj = { ref: '15 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 12.6) {
            return this.obj = { ref: '15 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 16.5) {
            return this.obj = { ref: '15 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 18.1) {
            return this.obj = { ref: '15 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 20) {
            return this.obj = { ref: '15 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '15 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.01:
          if (peso < 11.8) {
            return this.obj = { ref: '15,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 12.8) {
            return this.obj = { ref: '15,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 16.8) {
            return this.obj = { ref: '15,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 18.5) {
            return this.obj = { ref: '15,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 20.4) {
            return this.obj = { ref: '15,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '15,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.02:
          if (peso < 12) {
            return this.obj = { ref: '15,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 13.1) {
            return this.obj = { ref: '15,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 17.1) {
            return this.obj = { ref: '15,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 18.9) {
            return this.obj = { ref: '15,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 20.8) {
            return this.obj = { ref: '15,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '15,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.03:
          if (peso < 12.3) {
            return this.obj = { ref: '15,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 13.3) {
            return this.obj = { ref: '15,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 17.5) {
            return this.obj = { ref: '15,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 19.2) {
            return this.obj = { ref: '15,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 21.3) {
            return this.obj = { ref: '15,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '15,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.04:
          if (peso < 12.5) {
            return this.obj = { ref: '16,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 13.6) {
            return this.obj = { ref: '16,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 17.8) {
            return this.obj = { ref: '16,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 19.6) {
            return this.obj = { ref: '16,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 21.7) {
            return this.obj = { ref: '16,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '16,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.05:
          if (peso < 12.7) {
            return this.obj = { ref: '16,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 13.8) {
            return this.obj = { ref: '16,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 18.2) {
            return this.obj = { ref: '16,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 20) {
            return this.obj = { ref: '16,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 22.2) {
            return this.obj = { ref: '16,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '16,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.06:
          if (peso < 13) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 14.1) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 18.5) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 20.5) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 22.6) {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '16,9 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.07:
          if (peso < 13.2) {
            return this.obj = { ref: '17,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 14.4) {
            return this.obj = { ref: '17,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 18.9) {
            return this.obj = { ref: '17,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 20.9) {
            return this.obj = { ref: '17,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 23.1) {
            return this.obj = { ref: '17,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '17,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.08:
          if (peso < 13.5) {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 14.7) {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 19.3) {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 21.3) {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 23.6) {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '17,6 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.09:
          if (peso < 13.7) {
            return this.obj = { ref: '18 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 15) {
            return this.obj = { ref: '18 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 19.7) {
            return this.obj = { ref: '18 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 21.8) {
            return this.obj = { ref: '18 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 24.2) {
            return this.obj = { ref: '18 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '18 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.10:
          if (peso < 14) {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 15.3) {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 20.2) {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 22.3) {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 24.7) {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '18,3 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.11:
          if (peso < 14.5) {
            return this.obj = { ref: '19 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 15.8) {
            return this.obj = { ref: '19 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 20.9) {
            return this.obj = { ref: '19 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 23.1) {
            return this.obj = { ref: '19 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 25.7) {
            return this.obj = { ref: '19 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '19 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.12:
          if (peso < 14.8) {
            return this.obj = { ref: '19,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 16.2) {
            return this.obj = { ref: '19,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 21.4) {
            return this.obj = { ref: '19,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 23.6) {
            return this.obj = { ref: '19,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 26.2) {
            return this.obj = { ref: '19,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '19,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.13:
          if (peso < 15.1) {
            return this.obj = { ref: '19,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 16.5) {
            return this.obj = { ref: '19,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 21.8) {
            return this.obj = { ref: '19,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 24.2) {
            return this.obj = { ref: '19,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 26.8) {
            return this.obj = { ref: '19,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '19,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.14:
          if (peso < 15.4) {
            return this.obj = { ref: '20,2 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 16.8) {
            return this.obj = { ref: '20,2 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 22.3) {
            return this.obj = { ref: '20,2 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 24.7) {
            return this.obj = { ref: '20,2 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 27.4) {
            return this.obj = { ref: '20,2 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '20,2 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.15:
          if (peso < 15.7) {
            return this.obj = { ref: '20,7 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 17.2) {
            return this.obj = { ref: '20,7 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 22.8) {
            return this.obj = { ref: '20,7 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 25.2) {
            return this.obj = { ref: '20,7 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 28.1) {
            return this.obj = { ref: '20,7 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '20,7 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.16:
          if (peso < 16) {
            return this.obj = { ref: '21,1 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 17.5) {
            return this.obj = { ref: '21,1 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 23.3) {
            return this.obj = { ref: '21,1 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 25.8) {
            return this.obj = { ref: '21,1 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 28.7) {
            return this.obj = { ref: '21,1 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '21,1 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }


        case 1.17:
          if (peso < 16.3) {
            return this.obj = { ref: '21,5 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 17.8) {
            return this.obj = { ref: '21,5 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 23.8) {
            return this.obj = { ref: '21,5 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 26.3) {
            return this.obj = { ref: '21,5 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 29.3) {
            return this.obj = { ref: '21,5 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '21,5 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.18:
          if (peso < 16.6) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 18.2) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 24.2) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 26.9) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 29.9) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.19:
          if (peso < 16.8) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 18.3) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 24.1) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 26.6) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 29.5) {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '22 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.19:
          if (peso < 16.9) {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 18.5) {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 24.7) {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 27.4) {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 30.6) {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '22,4 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

        case 1.20:
          if (peso < 17.3) {
            return this.obj = { ref: '22,8 kg', text: 'Peso para Estatura: Desnutrição Severa', brush: 'red' };
          } else if (peso < 18.9) {
            return this.obj = { ref: '22,8 kg', text: 'Peso para Estatura: Desnutrição', brush: 'red' };
          } else if (peso < 25.2) {
            return this.obj = { ref: '22,8 kg', text: 'Peso para Estatura: Normalidade', brush: 'green' };
          } else if (peso < 28) {
            return this.obj = { ref: '22,8 kg', text: 'Peso para Estatura: Risco de Sobrepeso', brush: 'yellow' };
          } else if (peso < 31.2) {
            return this.obj = { ref: '22,8 kg', text: 'Peso para Estatura: Sobrepeso', brush: 'red' };
          } else {
            return this.obj = { ref: '22,8 kg', text: 'Peso para Estatura: Obesidade', brush: 'red' };
          }

      }
    }
  }

  public imcMenino(altura: number, peso: number, idade: number): IObj {
    if (altura !== 0) {
      let imcAtual = peso / (altura * altura);

      switch (idade) {
        case 0:
          if (imcAtual < 10.2) {
            return this.obj = { ref: '13,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 11.1) {
            return this.obj = { ref: '13,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.8) {
            return this.obj = { ref: '13,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 16.3) {
            return this.obj = { ref: '13,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 18.1) {
            return this.obj = { ref: '13,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '13,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 1:
          if (imcAtual < 11.3) {
            return this.obj = { ref: '14,9', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.4) {
            return this.obj = { ref: '14,9', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.3) {
            return this.obj = { ref: '14,9', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 17.8) {
            return this.obj = { ref: '14,9', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.4) {
            return this.obj = { ref: '14,9', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '14,9', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 2:
          if (imcAtual < 12.5) {
            return this.obj = { ref: '16,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.7) {
            return this.obj = { ref: '16,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.8) {
            return this.obj = { ref: '16,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.5) {
            return this.obj = { ref: '16,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.1) {
            return this.obj = { ref: '16,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 3:
          if (imcAtual < 13.1) {
            return this.obj = { ref: '16,9', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.3) {
            return this.obj = { ref: '16,9', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '16,9', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20) {
            return this.obj = { ref: '16,9', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.8) {
            return this.obj = { ref: '16,9', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,9', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 4:
          if (imcAtual < 13.4) {
            return this.obj = { ref: '17,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.5) {
            return this.obj = { ref: '17,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '17,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '17,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.1) {
            return this.obj = { ref: '17,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '17,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 5:
          if (imcAtual < 13.5) {
            return this.obj = { ref: '17,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.7) {
            return this.obj = { ref: '17,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.8) {
            return this.obj = { ref: '17,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '17,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.3) {
            return this.obj = { ref: '17,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '17,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 6:
          if (imcAtual < 13.6) {
            return this.obj = { ref: '17,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.7) {
            return this.obj = { ref: '17,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.8) {
            return this.obj = { ref: '17,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '17,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.3) {
            return this.obj = { ref: '17,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '17,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 7:
          if (imcAtual < 13.7) {
            return this.obj = { ref: '17,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.8) {
            return this.obj = { ref: '17,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.8) {
            return this.obj = { ref: '17,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '17,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.3) {
            return this.obj = { ref: '17,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '17,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 8:
          if (imcAtual < 13.6) {
            return this.obj = { ref: '17,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.7) {
            return this.obj = { ref: '17,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '17,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '17,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.2) {
            return this.obj = { ref: '17,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '17,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 9:
          if (imcAtual < 13.6) {
            return this.obj = { ref: '17,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.7) {
            return this.obj = { ref: '17,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '17,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '17,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.1) {
            return this.obj = { ref: '17,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '17,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 10:
          if (imcAtual < 13.5) {
            return this.obj = { ref: '17,0', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.6) {
            return this.obj = { ref: '17,0', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '17,0', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.1) {
            return this.obj = { ref: '17,0', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.0) {
            return this.obj = { ref: '17,0', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '17,0', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 11:
          if (imcAtual < 13.4) {
            return this.obj = { ref: '16,9', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.5) {
            return this.obj = { ref: '16,9', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '16,9', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.0) {
            return this.obj = { ref: '16,9', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.8) {
            return this.obj = { ref: '16,9', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,9', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 12:
          if (imcAtual < 13.4) {
            return this.obj = { ref: '16,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.4) {
            return this.obj = { ref: '16,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '16,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.8) {
            return this.obj = { ref: '16,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.6) {
            return this.obj = { ref: '16,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 13:
          if (imcAtual < 13.3) {
            return this.obj = { ref: '16,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.3) {
            return this.obj = { ref: '16,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.1) {
            return this.obj = { ref: '16,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.7) {
            return this.obj = { ref: '16,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.5) {
            return this.obj = { ref: '16,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 14:
          if (imcAtual < 13.2) {
            return this.obj = { ref: '16,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.2) {
            return this.obj = { ref: '16,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.0) {
            return this.obj = { ref: '16,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.5) {
            return this.obj = { ref: '16,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.3) {
            return this.obj = { ref: '16,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 15:
          if (imcAtual < 13.1) {
            return this.obj = { ref: '16,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.1) {
            return this.obj = { ref: '16,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.8) {
            return this.obj = { ref: '16,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.4) {
            return this.obj = { ref: '16,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.2) {
            return this.obj = { ref: '16,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 16:
          if (imcAtual < 13.1) {
            return this.obj = { ref: '16,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.0) {
            return this.obj = { ref: '16,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.7) {
            return this.obj = { ref: '16,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.3) {
            return this.obj = { ref: '16,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.0) {
            return this.obj = { ref: '16,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 17:
          if (imcAtual < 13.0) {
            return this.obj = { ref: '16,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.9) {
            return this.obj = { ref: '16,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.6) {
            return this.obj = { ref: '16,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.1) {
            return this.obj = { ref: '16,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.9) {
            return this.obj = { ref: '16,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 18:
          if (imcAtual < 12.9) {
            return this.obj = { ref: '16,1', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.9) {
            return this.obj = { ref: '16,1', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.5) {
            return this.obj = { ref: '16,1', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.0) {
            return this.obj = { ref: '16,1', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.8) {
            return this.obj = { ref: '16,1', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,1', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 19:
          if (imcAtual < 12.9) {
            return this.obj = { ref: '16,1', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.8) {
            return this.obj = { ref: '16,1', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.4) {
            return this.obj = { ref: '16,1', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.9) {
            return this.obj = { ref: '16,1', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.7) {
            return this.obj = { ref: '16,1', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,1', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 20:
          if (imcAtual < 12.8) {
            return this.obj = { ref: '16,0', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.7) {
            return this.obj = { ref: '16,0', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.3) {
            return this.obj = { ref: '16,0', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.8) {
            return this.obj = { ref: '16,0', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.6) {
            return this.obj = { ref: '16,0', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,0', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 21:
          if (imcAtual < 12.8) {
            return this.obj = { ref: '15,9', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.7) {
            return this.obj = { ref: '15,9', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.3) {
            return this.obj = { ref: '15,9', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '15,9', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '15,9', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,9', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 22:
          if (imcAtual < 12.7) {
            return this.obj = { ref: '15,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.6) {
            return this.obj = { ref: '15,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.2) {
            return this.obj = { ref: '15,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '15,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 23:
          if (imcAtual < 12.7) {
            return this.obj = { ref: '15,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.6) {
            return this.obj = { ref: '15,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.1) {
            return this.obj = { ref: '15,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '15,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 24:
          if (imcAtual < 12.7) {
            return this.obj = { ref: '15,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.6) {
            return this.obj = { ref: '15,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.0) {
            return this.obj = { ref: '15,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 25:
          if (imcAtual < 12.8) {
            return this.obj = { ref: '16,0', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.8) {
            return this.obj = { ref: '16,0', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.3) {
            return this.obj = { ref: '16,0', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.8) {
            return this.obj = { ref: '16,0', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '16,0', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,0', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 26:
          if (imcAtual < 12.8) {
            return this.obj = { ref: '15,9', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.7) {
            return this.obj = { ref: '15,9', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.3) {
            return this.obj = { ref: '15,9', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.8) {
            return this.obj = { ref: '15,9', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '15,9', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,9', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 27:
          if (imcAtual < 12.7) {
            return this.obj = { ref: '15,9', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.7) {
            return this.obj = { ref: '15,9', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.2) {
            return this.obj = { ref: '15,9', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '15,9', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,9', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,9', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 28:
          if (imcAtual < 12.7) {
            return this.obj = { ref: '15,9', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.6) {
            return this.obj = { ref: '15,9', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.2) {
            return this.obj = { ref: '15,9', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '15,9', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,9', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,9', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 29:
          if (imcAtual < 12.7) {
            return this.obj = { ref: '15,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.6) {
            return this.obj = { ref: '15,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.2) {
            return this.obj = { ref: '15,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '15,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 30:
          if (imcAtual < 12.6) {
            return this.obj = { ref: '15,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.6) {
            return this.obj = { ref: '15,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.1) {
            return this.obj = { ref: '15,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '15,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.2) {
            return this.obj = { ref: '15,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 31:
          if (imcAtual < 12.6) {
            return this.obj = { ref: '15,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.5) {
            return this.obj = { ref: '15,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.1) {
            return this.obj = { ref: '15,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.2) {
            return this.obj = { ref: '15,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 32:
          if (imcAtual < 12.5) {
            return this.obj = { ref: '15,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.5) {
            return this.obj = { ref: '15,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.0) {
            return this.obj = { ref: '15,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.1) {
            return this.obj = { ref: '15,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 33:
          if (imcAtual < 12.5) {
            return this.obj = { ref: '15,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.5) {
            return this.obj = { ref: '15,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.0) {
            return this.obj = { ref: '15,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.1) {
            return this.obj = { ref: '15,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 34:
          if (imcAtual < 12.5) {
            return this.obj = { ref: '15,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.4) {
            return this.obj = { ref: '15,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.0) {
            return this.obj = { ref: '15,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.0) {
            return this.obj = { ref: '15,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 35:
          if (imcAtual < 12.4) {
            return this.obj = { ref: '15,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.4) {
            return this.obj = { ref: '15,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.0) {
            return this.obj = { ref: '15,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 36:
          if (imcAtual < 12.4) {
            return this.obj = { ref: '15,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.4) {
            return this.obj = { ref: '15,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.0) {
            return this.obj = { ref: '15,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 37:
          if (imcAtual < 12.4) {
            return this.obj = { ref: '15,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.4) {
            return this.obj = { ref: '15,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.3) {
            return this.obj = { ref: '15,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 38:
          if (imcAtual < 12.3) {
            return this.obj = { ref: '15,5', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.3) {
            return this.obj = { ref: '15,5', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,5', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.3) {
            return this.obj = { ref: '15,5', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,5', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,5', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 39:
          if (imcAtual < 12.3) {
            return this.obj = { ref: '15,5', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.3) {
            return this.obj = { ref: '15,5', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,5', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.3) {
            return this.obj = { ref: '15,5', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,5', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,5', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 40:
          if (imcAtual < 12.3) {
            return this.obj = { ref: '15,5', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,5', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,5', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,5', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,5', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 41:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,5', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,5', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,5', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,5', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 42:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.2) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.8) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 43:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.2) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.7) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.8) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 44:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.7) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.8) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 45:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.7) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.8) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 46:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.7) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.8) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 47:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.7) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 16.7) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 48:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.7) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 49:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.7) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 50:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.7) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 51:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.6) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 52:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.6) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 53:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.6) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.0) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 54:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.6) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.0) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 55:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.6) {
            return this.obj = { ref: '15,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.0) {
            return this.obj = { ref: '15,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 56:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.9) {
            return this.obj = { ref: '15,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.6) {
            return this.obj = { ref: '15,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.1) {
            return this.obj = { ref: '15,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 57:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.9) {
            return this.obj = { ref: '15,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.6) {
            return this.obj = { ref: '15,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '15,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.1) {
            return this.obj = { ref: '15,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 58:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.9) {
            return this.obj = { ref: '15,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.6) {
            return this.obj = { ref: '15,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.3) {
            return this.obj = { ref: '15,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.2) {
            return this.obj = { ref: '15,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 59:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.9) {
            return this.obj = { ref: '15,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.6) {
            return this.obj = { ref: '15,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.3) {
            return this.obj = { ref: '15,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.2) {
            return this.obj = { ref: '15,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 60:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.9) {
            return this.obj = { ref: '15,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.6) {
            return this.obj = { ref: '15,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.3) {
            return this.obj = { ref: '15,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

      }
    }
  }

  public imcMenina(altura: number, peso: number, idade: number): IObj {
    if (altura !== 0) {
      let imcAtual = peso / (altura * altura);

      switch (idade) {
        case 0:
          if (imcAtual < 10.1) {
            return this.obj = { ref: '13,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 11.1) {
            return this.obj = { ref: '13,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.6) {
            return this.obj = { ref: '13,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 16.1) {
            return this.obj = { ref: '13,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 17.7) {
            return this.obj = { ref: '13,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '13,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 1:
          if (imcAtual < 10.8) {
            return this.obj = { ref: '14,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.0) {
            return this.obj = { ref: '14,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.0) {
            return this.obj = { ref: '14,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 17.5) {
            return this.obj = { ref: '14,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 19.1) {
            return this.obj = { ref: '14,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '14,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 2:
          if (imcAtual < 11.8) {
            return this.obj = { ref: '15,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.3) {
            return this.obj = { ref: '15,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.0) {
            return this.obj = { ref: '15,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.7) {
            return this.obj = { ref: '15,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 3:
          if (imcAtual < 12.4) {
            return this.obj = { ref: '16,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.6) {
            return this.obj = { ref: '16,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.9) {
            return this.obj = { ref: '16,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.7) {
            return this.obj = { ref: '16,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.5) {
            return this.obj = { ref: '16,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 4:
          if (imcAtual < 12.7) {
            return this.obj = { ref: '16,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.9) {
            return this.obj = { ref: '16,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.3) {
            return this.obj = { ref: '16,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.0) {
            return this.obj = { ref: '16,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.0) {
            return this.obj = { ref: '16,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 5:
          if (imcAtual < 12.9) {
            return this.obj = { ref: '16,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.1) {
            return this.obj = { ref: '16,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '16,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.2) {
            return this.obj = { ref: '16,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.2) {
            return this.obj = { ref: '16,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 6:
          if (imcAtual < 13.0) {
            return this.obj = { ref: '16,9', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.1) {
            return this.obj = { ref: '16,9', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '16,9', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '16,9', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.3) {
            return this.obj = { ref: '16,9', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,9', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 7:
          if (imcAtual < 13.0) {
            return this.obj = { ref: '16,9', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.2) {
            return this.obj = { ref: '16,9', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '16,9', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '16,9', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.3) {
            return this.obj = { ref: '16,9', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,9', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 8:
          if (imcAtual < 13.0) {
            return this.obj = { ref: '16,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.1) {
            return this.obj = { ref: '16,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '16,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.2) {
            return this.obj = { ref: '16,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.2) {
            return this.obj = { ref: '16,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 9:
          if (imcAtual < 12.9) {
            return this.obj = { ref: '16,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.1) {
            return this.obj = { ref: '16,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.3) {
            return this.obj = { ref: '16,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 20.1) {
            return this.obj = { ref: '16,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 22.1) {
            return this.obj = { ref: '16,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 10:
          if (imcAtual < 12.9) {
            return this.obj = { ref: '16,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 14.0) {
            return this.obj = { ref: '16,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.2) {
            return this.obj = { ref: '16,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '16,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.9) {
            return this.obj = { ref: '16,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 11:
          if (imcAtual < 12.8) {
            return this.obj = { ref: '16,5', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.9) {
            return this.obj = { ref: '16,5', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 18.0) {
            return this.obj = { ref: '16,5', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.8) {
            return this.obj = { ref: '16,5', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.8) {
            return this.obj = { ref: '16,5', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,5', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 12:
          if (imcAtual < 12.7) {
            return this.obj = { ref: '16,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.8) {
            return this.obj = { ref: '16,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.9) {
            return this.obj = { ref: '16,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.9) {
            return this.obj = { ref: '16,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.6) {
            return this.obj = { ref: '16,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 13:
          if (imcAtual < 12.6) {
            return this.obj = { ref: '16,2', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.7) {
            return this.obj = { ref: '16,2', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.7) {
            return this.obj = { ref: '16,2', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.5) {
            return this.obj = { ref: '16,2', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.4) {
            return this.obj = { ref: '16,2', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,2', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 14:
          if (imcAtual < 12.6) {
            return this.obj = { ref: '16,1', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.6) {
            return this.obj = { ref: '16,1', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.6) {
            return this.obj = { ref: '16,1', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.3) {
            return this.obj = { ref: '16,1', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.3) {
            return this.obj = { ref: '16,1', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,1', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 15:
          if (imcAtual < 12.5) {
            return this.obj = { ref: '16,0', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.5) {
            return this.obj = { ref: '16,0', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.5) {
            return this.obj = { ref: '16,0', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.2) {
            return this.obj = { ref: '16,0', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.1) {
            return this.obj = { ref: '16,0', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '16,0', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 16:
          if (imcAtual < 12.4) {
            return this.obj = { ref: '15,9', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.5) {
            return this.obj = { ref: '15,9', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.4) {
            return this.obj = { ref: '15,9', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 19.1) {
            return this.obj = { ref: '15,9', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.0) {
            return this.obj = { ref: '15,9', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,9', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 17:
          if (imcAtual < 12.4) {
            return this.obj = { ref: '15,8', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.4) {
            return this.obj = { ref: '15,8', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.3) {
            return this.obj = { ref: '15,8', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.9) {
            return this.obj = { ref: '15,8', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.9) {
            return this.obj = { ref: '15,8', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,8', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 18:
          if (imcAtual < 12.3) {
            return this.obj = { ref: '15,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.3) {
            return this.obj = { ref: '15,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.2) {
            return this.obj = { ref: '15,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.8) {
            return this.obj = { ref: '15,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.8) {
            return this.obj = { ref: '15,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 19:
          if (imcAtual < 12.3) {
            return this.obj = { ref: '15,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.3) {
            return this.obj = { ref: '15,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.1) {
            return this.obj = { ref: '15,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.8) {
            return this.obj = { ref: '15,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.7) {
            return this.obj = { ref: '15,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 20:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.2) {
            return this.obj = { ref: '15,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.0) {
            return this.obj = { ref: '15,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '15,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.6) {
            return this.obj = { ref: '15,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 21:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17) {
            return this.obj = { ref: '15,5', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '15,5', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '15,5', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,5', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 22:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,5', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,5', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,5', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,5', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,5', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 23:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 24:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 25:
          if (imcAtual < 12.4) {
            return this.obj = { ref: '15,7', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.3) {
            return this.obj = { ref: '15,7', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.1) {
            return this.obj = { ref: '15,7', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '15,7', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.6) {
            return this.obj = { ref: '15,7', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,7', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 26:
          if (imcAtual < 12.3) {
            return this.obj = { ref: '15,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.3) {
            return this.obj = { ref: '15,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.0) {
            return this.obj = { ref: '15,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '15,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.6) {
            return this.obj = { ref: '15,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 27:
          if (imcAtual < 12.3) {
            return this.obj = { ref: '15,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.3) {
            return this.obj = { ref: '15,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.0) {
            return this.obj = { ref: '15,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '15,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '15,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 28:
          if (imcAtual < 12.3) {
            return this.obj = { ref: '15,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.3) {
            return this.obj = { ref: '15,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.0) {
            return this.obj = { ref: '15,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '15,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '15,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 29:
          if (imcAtual < 12.3) {
            return this.obj = { ref: '15,6', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.2) {
            return this.obj = { ref: '15,6', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 17.0) {
            return this.obj = { ref: '15,6', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '15,6', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,6', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,6', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 30:
          if (imcAtual < 12.3) {
            return this.obj = { ref: '15,5', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,5', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,5', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,5', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,5', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 31:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,5', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,5', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,5', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,5', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 32:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,5', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,5', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,5', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,5', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 33:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,5', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,5', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,5', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,5', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,5', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,5', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 34:
          if (imcAtual < 12.2) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 35:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 36:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 37:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 38:
          if (imcAtual < 12.1) {
            return this.obj = { ref: '15,4', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,4', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,4', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,4', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,4', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,4', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 39:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 40:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.3) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 41:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 13.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 42:
          if (imcAtual < 12.0) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.9) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 43:
          if (imcAtual < 11.9) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.9) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.4) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 44:
          if (imcAtual < 11.9) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.9) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.4) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 45:
          if (imcAtual < 11.9) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.9) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 46:
          if (imcAtual < 11.9) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.9) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 47:
          if (imcAtual < 11.8) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.8) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.5) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 48:
          if (imcAtual < 11.8) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.8) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.6) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 49:
          if (imcAtual < 11.8) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.8) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.5) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.6) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 50:
          if (imcAtual < 11.8) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.8) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.7) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 51:
          if (imcAtual < 11.8) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.8) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.7) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 52:
          if (imcAtual < 11.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.8) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.7) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 53:
          if (imcAtual < 11.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.6) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.8) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 54:
          if (imcAtual < 11.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.8) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 55:
          if (imcAtual < 11.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.9) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 56:
          if (imcAtual < 11.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.8) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 20.9) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 57:
          if (imcAtual < 11.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.7) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.0) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 58:
          if (imcAtual < 11.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.8) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.0) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }


        case 59:
          if (imcAtual < 11.6) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.8) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.0) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

        case 60:
          if (imcAtual < 11.6) {
            return this.obj = { ref: '15,3', text: 'Desnutrição Severa', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 12.7) {
            return this.obj = { ref: '15,3', text: 'Desnutrição', brush: 'red', imc: imcAtual };
          } else if (imcAtual < 16.9) {
            return this.obj = { ref: '15,3', text: 'Normalidade', brush: 'green', imc: imcAtual };
          } else if (imcAtual < 18.8) {
            return this.obj = { ref: '15,3', text: 'Risco de Sobrepeso', brush: 'yellow', imc: imcAtual };
          } else if (imcAtual < 21.1) {
            return this.obj = { ref: '15,3', text: 'Sobrepeso', brush: 'red', imc: imcAtual };
          } else {
            return this.obj = { ref: '15,3', text: 'Obesidade', brush: 'red', imc: imcAtual };
          }

      }
    }
  }

}
