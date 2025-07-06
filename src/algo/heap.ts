export class Heap<T> {
    array: T[] = [];
    size = 0;
    comp: (a: T, b: T) => boolean
    constructor(comp: (a: T, b: T) => boolean) {
        this.comp = comp;
    }
    pop() {
        if (this.size == 0) return void 0;
        let ret = this.array[1];
        this.array[1] = this.array[this.size];
        this.size--;
        let i = 1;
        let a = this.array;
        while (true) {
            let nextPos = i;
            if (this.comp(a[i], a[i * 2])) nextPos = i * 2;
            if (this.comp(a[nextPos], a[i * 2 + 1])) nextPos = i * 2 + 1;
            if (nextPos == i) break;
            let t = a[i];
            a[i] = a[nextPos];
            a[nextPos] = t;
            i = nextPos;
        }
        return ret;
    }
    peek() {
        if (this.size === 0) return -1;
        return this.array;
    }

    insert(data: T) {
        this.size++;
        this.array[this.size] = data;
        let i = this.size;
        while (Math.floor(i / 2) > 0 && this.comp(this.array[i], this.array[Math.floor(i / 2)])) {
            let pi = Math.floor(i / 2);
            let t = this.array[i];
            this.array[i] = this.array[pi];
            this.array[pi] = t;
            i = pi;
        }
    }

}