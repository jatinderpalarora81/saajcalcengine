

const calcInchesCM = (start:number , end:number, text:string ='Select', increment:number = .5)=>{
    let arr:string[] = [];
    arr.push(text)
    for( let i = start ; i <= end; i = i+increment){
        arr.push(i +" inches ("+ (i*2.54).toFixed(0) +' cm)');
    }
    return arr;
}

const calcInchesFeet = (start:number , end:number, text:string ='Select', increment:number = .5)=>{
    let arr:string[] = [];
    arr.push(text)
    for( let i = start ; i <= end; i = i+increment){
        let l = i/12;
        arr.push(parseInt(l +"") +" Feet " + i%12 + " inches  ("+ (i*2.54).toFixed(0) +' cm)');
    }
    return arr;
}

export const chestSizes = calcInchesCM(20, 60, );
export const bodyHeight = calcInchesFeet(20, 72, 'Select', 1);
export const shoulderWidth = calcInchesCM(10, 35, 'Select' );
export const topLength = calcInchesCM(10, 28, );
export const fullToplngth = calcInchesCM(20, 60, );
export const armHole = calcInchesCM(10, 35, 'Select');
export const sleeveLength = calcInchesCM(0, 35, 'Select', .5 );


export const belowBustWaistSize = calcInchesCM(18, 60);
export const aroundArm = calcInchesCM(5, 20);
export const tucksPointSize = calcInchesCM(5, 18);
export const frontNeckDepthSize = calcInchesCM(5, 15);
export const backNeckDepthSize = calcInchesCM(5, 15);

export const hipSize = calcInchesCM(20, 65);
export const waistSize = calcInchesCM(20, 60);
export const lehengaLen = calcInchesCM(25, 48);
export const salwarLen = calcInchesCM(25, 48);
