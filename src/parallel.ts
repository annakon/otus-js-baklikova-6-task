export class Parallel {
    private result: number[] = [];

    constructor(private readonly num:number) {

    }

    num_mas(...args:Array<() => Promise<number>>): Array<Array<() => Promise<number>>> {
        if (this.num === 1) {
            return [args];
        }
        return [[args[0], args[2], args[4]], [args[1], args[3]]]
    }

    async jobs(...args:Array<() => Promise<number>>) : Promise<number[]> {

        this.result = [];

        const qwe = this.num_mas(...args);

        const p: Array<Promise<boolean>> = []
        qwe.forEach((part: Array<() => Promise<number>>) => {
            p.push(this.processPart(part));
        })

        await Promise.all(p)

        return this.result;
    }

    private async processPart(part: Array<() => Promise<number>>) : Promise<boolean> {
        for(let i=0;i<part.length;i++) {
            const h = await part[i]();
            this.result.push(h);
        }

        return true
    }
}
