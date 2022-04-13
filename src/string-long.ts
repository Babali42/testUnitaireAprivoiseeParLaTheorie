export class Rules{
    static isLong(str: string): boolean{
        if(str.length > 5)
            return true;
        return false;
    }
}