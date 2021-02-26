// import {SizeDiffMessage, SizeStatus} from "../typedef/style";
// import {changePct} from "./percentageCalc";
//
//
// export function compareSizes( input: number|any, actual:number|any, min:number|any, max:number|any, prop:string):SizeDiffMessage{
//     if( !input ){
//         return {sizeStatus:SizeStatus.UNKNOWN}
//     }else if( input < min  || input > max){
//         return {sizeStatus:SizeStatus.INVALID}
//     }else {
//         let diff = changePct(input, actual)
//         const state = diff < 0 ? 'tight' : diff.toFixed(0) === '0' ? 'fit' : 'loose';
//         diff = Math.abs(diff);
//         let stateType;
//         if(diff <= 1){
//             stateType = 'perfect'
//         }else if( diff <=5 ){
//             stateType = 'slightly';
//         }else if( diff <= 10 ){
//             stateType = 'litle';
//         }else if( diff <= 15 ){
//             stateType = 'litle extra';
//         }else if( diff <= 20 ){
//             stateType = 'very';
//         }else if( diff <= 25 ){
//             stateType = 'very very';
//         }else {
//             stateType = 'extra';
//         }
//         const msg = ' You may find it '+stateType+' '+state+' "'+prop+'"'+'\n';
//         return {diff: diff, sizeStatus:SizeStatus.CALCULATED, message:msg}
//     }
// }
export {}