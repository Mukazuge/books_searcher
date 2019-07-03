import { IsbnValidatorPipe } from './isbn-validator.pipe';

describe('IsbnValidatorPipe', () => {
  const pipe = new IsbnValidatorPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a filtered array by books that contains the property "isbn"', () => {
    const testData: any[] = [
      {
        author: 'john',
        isbn: '123467890'
      },
      {
        author: 'Erick',
        isbn: '6667744'
      },
      {
        author: 'Thomas'
      },
    ];

    const expectedResult: any[] = [
      {
        author: 'john',
        isbn: '123467890'
      },
      {
        author: 'Erick',
        isbn: '6667744'
      }
    ];
    const actual = pipe.transform(testData);
    expect(actual).toEqual(expectedResult);
  });
});
