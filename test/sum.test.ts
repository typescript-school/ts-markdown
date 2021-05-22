import sum from '../src/sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum.sum(2,1)).toBe(3);
});
