import { AuthorValidatorPipe } from './author-validator.pipe';

describe('AuthorValidatorPipe', () => {
  it('create an instance', () => {
    const pipe = new AuthorValidatorPipe();
    expect(pipe).toBeTruthy();
  });
});
