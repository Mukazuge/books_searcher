import { IsbnValidatorPipe } from './isbn-validator.pipe';

describe('IsbnValidatorPipe', () => {
  it('create an instance', () => {
    const pipe = new IsbnValidatorPipe();
    expect(pipe).toBeTruthy();
  });
});
