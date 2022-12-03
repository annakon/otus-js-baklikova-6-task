export function sortSemver(mas:String[]) : String[] {
    return mas.sort((a:String,b:String) : number => {
        const elA=a.split('.');
        const elB=b.split('.');
        const n = elA.length>elB.length ? elB.length : elA.length;
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

    );
}
