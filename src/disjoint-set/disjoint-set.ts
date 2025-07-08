export class DisjointSet<T> {
    parent: Map<T, T>;
    rank: Map<T, number>;
    constructor() {
        this.parent = new Map();
        this.rank = new Map();
    }

    find(x: T): T {
        return this.parent.get(x) === x ? x : this.find(this.parent.get(x)!);
    }

    add(x: T) {
        this.parent.set(x, x);
        this._ensureRank(x);
    }

    union(x: T, y: T) {
        let rank_x = this._ensureRank(x);
        let rank_y = this._ensureRank(y);

        let root_x = this.find(x);
        let root_y = this.find(y);

        if (rank_x < rank_y) {
            this.parent.set(root_x, root_y);
        } else {
            this.parent.set(root_y, root_x)
        }

        if (rank_x === rank_y) {
            this.rank.set(root_x, this.rank.get(root_x)! + 1);
        }
    }

    getAllSets() {
        let ret: Map<T, T[]> = new Map();
        for (let [k] of this.parent) {
            let root = this.find(k);
            if (!ret.has(root)) ret.set(root, []);
            ret.get(root)!.push(k)
        }
        return Array.from(ret);
    }

    private _ensureRank(x: T) {
        if (!this.rank.has(x)) {
            this.rank.set(x, 0);
        }
        return this.rank.get(x)!;
    }
}