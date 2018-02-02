import { sum, minus, getMessage} from '../__tests_target/myFunctions';
//import { sum, minus, getMessage } from 'MyFunctions';


// describe(name, fn) -- group together multiple tests
// describe.only - test this group only, and skip the other groupd 
// test(name, fn) -- equivalent to it(name, fn)
// test.only - test this one only, and skip the other tests (including within other describe)


describe.skip('test sum function', () => {
  test('test sum fuction 18 + 7', () => {
    expect(sum(18,7)).toBe(25);
  });

  test('test sum fuction 18 + 8', () => {
    expect(sum(18,8)).toBe(26);
  });

  test('test sum fuction 18 + 9', () => {
    expect(sum(18,9)).toBe(29);
  });
});

describe('test minus function', () => {

  test('test minus fuction 8 - 7', () => {
    expect(minus(8,7)).toBe(2);
  });

  test('test minus fuction 8 - 8', () => {
    expect(minus(8,8)).toBe(2);
  });

});


test('test minus fuction 5 - 3', () => {
  expect(minus(5,3)).toBe(3);
});


test('test getMessage fuction Hello not Hi', () => {
  expect(getMessage("Hello")).toBe("Hi");
});





