export function sorter(a:String,b:String) : number {
    const elA=a.split('.');
    const elB=b.split('.');
    let n=0;
    if (elA.length>elB.length) {
        n=elA.length;
        const m=elB.length;
        elB.length=n;
        elB.fill("0",m,n)
    } else {
        n=elB.length;
        const m=elA.length;
        elA.length=n;
        elA.fill("0",m,n)
    }
    for(let i=0;i<n;i++) {
        if (Number(elA[i]) > Number(elB[i])){
            return 1;
        }
        if (Number(elA[i]) < Number(elB[i])){
            return -1;
        }
    }
    return  0;
}

export function sortSemver(mas:String[]) : String[] {
    return mas.sort(sorter);
}
