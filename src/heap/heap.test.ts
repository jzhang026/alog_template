import { expect, test } from "vitest"
import { Heap } from "./heap"

test("simple", () => {
    const heap = new Heap<number>((a, b) => a < b);
    for (let i = 1; i <= 7; i++) {
        heap.insert(i);
    }
    expect(heap.array).toMatchInlineSnapshot(`
      [
        ,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
      ]
    `);
    heap.insert(-1);
    /**
     *              -1
     *         1        3
     *       2  5     6   7
     *     4
     */
    expect(heap.array).toMatchInlineSnapshot(`
      [
        ,
        -1,
        1,
        3,
        2,
        5,
        6,
        7,
        4,
      ]
    `);
    let peak = heap.pop();
    let q = [];
    while (peak) {
        q.push(peak);
        peak = heap.pop();
    }
    expect(q).toMatchInlineSnapshot(`
      [
        -1,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
      ]
    `)

})
