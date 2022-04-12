import {Rules} from "./index";

it("Should cover the code", function () {
    Rules.isLongerThanFiveChar("");
    Rules.isLongerThanFiveChar("dsfsdfd");
});

it("Should cover the code and test the code", function () {
    const result1 = Rules.isLongerThanFiveChar("12345");
    expect(result1).toBe(true);
    const result2 = Rules.isLongerThanFiveChar("");
    expect(result2).toBe(false);
});