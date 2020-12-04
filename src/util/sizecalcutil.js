
export function calculateSize(values){
    let size = "Free Size"
    if( values.bust < 35.5 && values.waist < 32 && values.hips < 39){
        size =  "XS";
    }else  if( values.bust < 37.5 && values.waist < 34 && values.hips < 41){
        size =  "S";
    }
    else  if( values.bust < 39.5 && values.waist < 36 && values.hips < 43){
        size =  "M";
    }else  if( values.bust < 41.5 && values.waist < 38 && values.hips < 45){
        size =  "L";
    }else  if( values.bust < 43.5 && values.waist < 40 && values.hips < 47){
        size =  "XL";
    }else  if( values.bust < 45.5 && values.waist < 42 && values.hips < 49){
        size =  "XXL";
    }
    return size;
}