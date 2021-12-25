import {Info} from "../typedef/style";

export const fileName = (info:Info):string=>{
    // const num = Math.floor(Math.random() * 10000);
    const name = info.email.toLowerCase();
    return name+".json";
}