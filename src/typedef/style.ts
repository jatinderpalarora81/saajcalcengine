export type CholiStyle ={
    bust:number,
    shoulderLength: number,
    aroundArm:number,
    blouseLength:number,
    armHoleSize:number,
    waist:number
}

export type LenengaCholi = LehengaStyle & CholiStyle;

export type LehengaStyle ={
    aroundHips:number,
    lehengaLength:number,
    aroundWaist:number
}

type KameezLengthStyle = {
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