import { AuthorValidatorPipe } from './author-validator.pipe';

describe('AuthorValidatorPipe', () => {
  const pipe: AuthorValidatorPipe = new AuthorValidatorPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return undefined', () => {
    const actual = pipe.transform('random string' as string);
    expect(actual).toEqual('Undefined' as string);
  });

  it('should return the first author in the array', () => {
    const actual = pipe.transform(['first author', 'second author'] as string[]);
    expect(actual).toEqual('first author' as string);
  });
});
