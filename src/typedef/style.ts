export enum Size {
    MIN = 'MIN',
    XS = 'XS',
    S= 'S',
    M = 'M',
    L='M',
    XL='XL',
    XXL='XXL',
    MAX='MAX'
}


type TopStyle = {
    size?:Size,
    bust:number,
    shoulderLength?: number,
    sleeveAround?:number,
    sleeveLength?:number,
    armHoleSize?:number,
    aroundWaistForTop:number,
    topLength : number
}

type BottomStyle = {
    aroundHips:number,
    aroundThighSize: number,
    aroundCalfSize: number,
    aroundKneeSize: number,
    aroundWaistSize: number,
    InseamLength : number,
    OutseamLength : number
}

export type BlouseStyle = TopStyle;
export type CholiStyle = TopStyle;


type LehengaStyle ={
    aroundHips:number,
    lehengaLength:number,
    aroundWaist:number
}
export type LehengaCholiStyle = LehengaStyle & CholiStyle;

export type KameezStyle = {
    topStyle: TopStyle,
    hipsSize: number
}
export type SalwarStyle = BottomStyle;

export type PatternType<TYPE> = {
   types: TYPE[]
}

export type Info = {
    name:string,
    email:string,
    phone:string
}

export interface CommonPros {
    getInfo(): Info,
    validateInfo():boolean
}
export enum SizeStatus{
    UNKNOWN,
    CALCULATED,
    INVALID
}
export type SizeDiffMessage = {
    diff? : number,
    message? : string,
    sizeStatus: SizeStatus
}