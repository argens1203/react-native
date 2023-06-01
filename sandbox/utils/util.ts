export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    if (value === null || value === undefined) return false;
    // const testDummy: TValue = value;
    return true;
}

export function anyMissing(arr: any[]){
    for (const a of arr){
        if (a === undefined){
            return true;
        }
    }
    return false;
}