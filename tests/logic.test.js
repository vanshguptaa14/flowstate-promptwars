// logic.test.js
const calculateWaitTime = (count) => Math.round(count / 3.5);

test('Should accurately predict wait time for crowd size', () => {
    expect(calculateWaitTime(35)).toBe(10);
    expect(calculateWaitTime(100)).toBe(29);
});