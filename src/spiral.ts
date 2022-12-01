export function spiral<T>(A:T[][],depth=0,res: T[]=[]) : T[] {

    const lenW = A[0].length;
    // let maxDepthW = Math.ceil(lenW / 2);

    const lenH = A.length;
   // let maxDepthH = Math.ceil(lenH / 2);
    const maxDepth=lenW>lenH?Math.ceil(lenH / 2):Math.ceil(lenW / 2);

    for(let i = depth; i < lenW - depth; i++) {
        res.push(A[depth][i]);
    }

    for(let i = depth + 1; i < lenH - depth; i++) {
        res.push(A[i][lenW - depth-1]);
    }

    for(let i = lenW - depth - 1; i > depth; i--) {
        res.push(A[lenH - depth-1][i]);
    }

    for(let i = lenH - depth - 1; i > depth + 1; i--) {
        res.push(A[i][depth]);
    }

    if(depth <= maxDepth) spiral(A,depth + 1,res);

    return res;
}
