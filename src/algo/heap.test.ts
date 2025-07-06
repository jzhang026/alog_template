import { expect, test } from "vitest"
import { Heap } from "./heap"

test("simple", () => {
    const heap = new Heap<number>((a, b) => a < b);
    heap.insert(1);
    heap.insert(2);
    heap.insert(3);
    heap.insert(4);
    heap.insert(5);
    heap.insert(6);
    heap.insert(7);
    expect(heap.array).toMatchInlineSnapshot()
})
