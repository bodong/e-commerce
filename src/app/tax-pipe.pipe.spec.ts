/* tslint:disable:no-unused-variable */
  
import { TestBed, async } from '@angular/core/testing';
import { TaxPipePipe } from './tax-pipe.pipe';


describe('Pipe: TaxPipe', () => {
  let pipe = new TaxPipePipe();

  it('create an instance', () => {
    
    expect(pipe).toBeTruthy();
  });

  it('should give default 7% of tax ', () => {
    
    expect(pipe.transform(100)).toBe(7)
    expect(pipe.transform(50)).toBe(3.5)
  });

  it('should give tax by arg ', () => {
    
    expect(pipe.transform(100, 10)).toBe(10)
  });

  it('should give tax are 0 ', () => {
    
    expect(pipe.transform(100, 0)).toBe(0)
  });
});
