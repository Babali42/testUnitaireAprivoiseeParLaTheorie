export class Rules{
    static isLongerThanFiveChar(str: string): boolean{
        if(str.length > 5)
            return true;
        return false;
    }
}