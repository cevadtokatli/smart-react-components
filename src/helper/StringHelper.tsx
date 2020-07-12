export default class StringHelper {
    /**
     * Renders a number with given digits as string.
     * 
     * @param value
     * @param digit 
     * @param placeholder 
     */
    static renderNumber(value:number, digit:number, placeholder:string): string {
        let str = value.toString()
        while(str.length < digit)
            str = placeholder + str
        return str
    }
}