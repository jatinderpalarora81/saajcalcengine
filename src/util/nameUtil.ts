import {Info} from "../typedef/style";

export const fileName = (info:Info):string=>{
    const num = Math.floor(Math.random() * 10000);
    const name = info.name && info.name != '' ? info.name.replace(/ /g,''):'name';
    return name+'_'+info.phone+'_'+num;
}