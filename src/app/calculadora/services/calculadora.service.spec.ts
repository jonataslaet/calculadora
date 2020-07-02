import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService],(service: CalculadoraService) => {
      let soma = service.calcular(1,4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it ('deve garantir que 1 - 3 = -2',
    inject([CalculadoraService],(service: CalculadoraService)=>{
      let subtracao = service.calcular(1,3,CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-2);
    })
  );

  it ('deve garantir que 1/2 = 0.5',
    inject ([CalculadoraService],(service: CalculadoraService)=>{
      let divisao = service.calcular(1,2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.5);
    })
  );

  it ('deve garantir que 3 * 7 = 21',
    inject([CalculadoraService], (service: CalculadoraService)=>{
      let multiplicacao = service.calcular(3,7,CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(21);
    })
  );




    it ('deve retornar zero por ser inválido',
      inject ([CalculadoraService], (service: CalculadoraService)=>{
        let invalido = service.calcular(1,2, '%');
        expect(invalido).toEqual(0);
      })
    );











});
