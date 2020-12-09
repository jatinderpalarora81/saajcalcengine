export type CholiStyle ={
    bust:number,
    shoulderLength: number,
    aroundArm:number,
    blouseLength:number,
    armHoleSize:number,
    waist:number
}

export type LenengaCholi = LehengaStyle & CholiStyle;

type LehengaStyle ={
    aroundHips:number,
    lehengaLength:number,
    aroundWaist:number
}

type KameezLengthStyle = {
    bust:number,
    shoulderLength: number,
    aroundArm:number,
    armHoleSize:number,
    waist:number
    kameezLength:number
}

export type KammezStyle = CholiStyle & KameezLengthStyle;

export type SalwarStyle ={
    aroundThigh:number,
    salwarLength:number,
    aroundWaist:number,
    aroundKnee:number,
    aroundCalf:number
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