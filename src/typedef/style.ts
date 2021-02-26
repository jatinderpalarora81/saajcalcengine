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
    pattern : PatternType,
    bust:number,
    belowBustWaist?:number
    shoulderWidth?: number,
    aroundArm_Elbow?:number,
    sleeveLength?:number,
    armHoleSize?:number,
    tucksPoint?:number,
    frontNeckDepth?:number,
    backNeckDepth?:number,
    topLength?: number,
    pads?:boolean,
    comments: string
}

type BottomStyle = {
    aroundHips?:number,
    aroundThighSize?: number,
    aroundCalfSize?: number,
    aroundKneeSize?: number,
    aroundWaistSize?: number,
    inseamLength? : number,
    outseamLength? : number
}

export type BlouseStyle = TopStyle;


type LehengaStyle ={
    aroundHips:number,
    lehengaLength:number,
    aroundWaist:number
}

export type WesternStyle ={
    topSize: TopStyle,
    aroundHips:number,
    dressLength:number,
    aroundWaist:number
}

export type LehengaCholiStyle = LehengaStyle & BlouseStyle;

type KameezStyle = {
    topStyle: TopStyle,
    hipsSize: number
}
export type SalwarKameezStyle = KameezStyle & BottomStyle;


export enum PatternType {
    LehenhaCholi = 'Lehenga Choli',
    Western = 'Western Dress',
    SalwarKammez = 'Salwarr Kameez'

}

export type Info = {
    name:string,
    email:string,
    phone:string
}

export interface CommonProps {
    postMeasurement(measurements:any): boolean,
    validateUserInfo():boolean
}
