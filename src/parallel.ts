export class Parallel {
    private result: number[] = [];

    constructor(private readonly num:number) {

    }

    num_mas(...args:Array<() => Promise<number>>): Array<Array<() => Promise<number>>> {

        const res: Array<Array<() => Promise<number>>>=[];
        for (let i = 0; i <Math.ceil(args.length/this.num); i++) {
            for (let j=0; j<this.num && (i*this.num+j)<args.length;j++) {
                if (i===0) res[j]=[];
                res[j].push(args[i*this.num+j]);
            }
        }
        return res;
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
