export class FizzBuzz{
    static FizzBuzz(a: number) : string {
        const a_string = a.toString();
        let return_value = '';

        if (a % 3 == 0 || a_string.includes('3')) {
            return_value += 'Fizz';
        }
        if (a % 5 == 0 || a_string.includes('5')) {
            return_value += 'Buzz';
        }

        return return_value == '' ? a_string : return_value;
    }
}