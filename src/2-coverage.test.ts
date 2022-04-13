import {Rules} from "./string-long";

it("Should cover the code", function () {
    Rules.isLong("");
    Rules.isLong("dsfsdfd");
});

it("Should cover the code and test the code", function () {
    const result1 = Rules.isLong("123456");
    expect(result1).toBe(true);
    const result2 = Rules.isLong("");
    expect(result2).toBe(false);
});