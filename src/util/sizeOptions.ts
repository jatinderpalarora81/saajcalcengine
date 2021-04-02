

const calc = (start:number , end:number, text:string ='Select', increment:number = .5)=>{
    let arr:string[] = [];
    arr.push(text)
    for( let i = start ; i <= end; i = i+increment){
        arr.push(i +" inches ("+ (i*2.54).toFixed(0) +' cm)');
    }
    return arr;
}

export const chestSizes = calc(20, 60, );
export const shoulderWidth = calc(10, 30, 'Select' );
export const topLength = calc(10, 28, );
export const armHole = calc(10, 30, 'Select');
export const sleeveLength = calc(0, 25, 'Select', .5 );


export const belowBustWaistSize = calc(18, 60);
export const aroundArm_ElbowSize = calc(5, 20);
export const tucksPointSize = calc(5, 20);
export const frontNeckDepthSize = calc(5, 15);
export const backNeckDepthSize = calc(5, 15);

export const hipSize = calc(20, 65);
export const waistSize = calc(20, 65);
export const lehengaLen = calc(25, 48);
export const salwarLen = calc(25, 48);
export const dressLen = calc(25, 48);