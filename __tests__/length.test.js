import fill from '../src/length'

test('standart', () => {
      const array = [1, 2, 3, 4];  
      expect(fill(array, '*', 1, 3)).toStrictEqual([1, '*', '*', 4]);  
    });