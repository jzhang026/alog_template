import { maxValueRodSteel } from './rod-cutting'
import { test, expect } from 'vitest'

test('dp - rod cutting', () => {
    const prices = [0, 3, 7, 11, 12, 15, 17, 18, 25, 28, 30];
    const n = 10;
    expect(maxValueRodSteel(prices, n)).toMatchInlineSnapshot(`36`);
})