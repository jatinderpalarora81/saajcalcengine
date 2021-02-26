// import {lehengaCholiSizes} from "./measurementData";
// import {LehengaCholiStyle} from "../typedef/style";
// import {changePct} from "./percentageCalc";
// import {compareSizes} from "./sizeComparator";
//
//
// export function calculateLehengaSize(input:LehengaCholiStyle){
//     let comment = ''
//     const lcStyles:LehengaCholiStyle[] = lehengaCholiSizes.types;
//     for( let i = 0; i < lcStyles.length-1; i++){
//         let style = lcStyles[i];
//         let nextStyle = lcStyles[i+1];
//         const inputBust = Number(input.bust);
//         const inputWaist = Number(input.aroundWaist);
//         if(inputBust <= nextStyle.bust && inputBust > style.bust){
//            // if(inputWaist <= nextStyle.aroundWaist && inputWaist > style.aroundWaist){
//                 comment = comment + 'Size '+ nextStyle.size+' \n';
//                 comment = comment + compareSizes(input.aroundWaist, nextStyle.aroundWaist, lcStyles[0].aroundWaist, lcStyles[lcStyles.length-1].aroundWaist, 'around waist' ).message;
//                 comment = comment + compareSizes(input.bust, nextStyle.bust, lcStyles[0].bust, lcStyles[lcStyles.length-1].bust, 'around bust' ).message;
//                 comment = comment + compareSizes(input.aroundHips, nextStyle.aroundHips, lcStyles[0].aroundHips, lcStyles[lcStyles.length-1].aroundHips, 'around hips' ).message;
//                 comment = comment + compareSizes(input.armHoleSize, nextStyle.armHoleSize, lcStyles[0].armHoleSize, lcStyles[lcStyles.length-1].armHoleSize, 'around arm hole' ).message;
//                 //comment = comment + 'Around arm hole diff '+ changePct(input.armHoleSize, style.armHoleSize);
//                 break;
//            // }
//         }
//
//     }
//     return comment;
// }
export {}