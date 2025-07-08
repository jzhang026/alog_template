import { expect, test } from "vitest";
import { DisjointSet } from "./disjoint-set"
test('disjoint set', () => {
    const disjointSet = new DisjointSet<number>();
    disjointSet.add(1);
    disjointSet.add(2);
    disjointSet.add(3);
    disjointSet.add(4);
    disjointSet.add(5);

    expect(JSON.stringify(disjointSet.getAllSets())).toMatchInlineSnapshot(`"[[1,[1]],[2,[2]],[3,[3]],[4,[4]],[5,[5]]]"`);

    disjointSet.union(3, 4);
    disjointSet.union(1, 2);
    disjointSet.union(2, 5);
    expect(disjointSet.parent).toMatchInlineSnapshot(`
      Map {
        1 => 1,
        2 => 1,
        3 => 3,
        4 => 3,
        5 => 1,
      }
    `)
    expect(JSON.stringify(disjointSet.getAllSets())).toMatchInlineSnapshot(`"[[1,[1,2,5]],[3,[3,4]]]"`)
})