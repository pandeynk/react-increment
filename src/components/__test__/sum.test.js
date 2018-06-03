import sum from "./../sum.js";

describe("test sum function", ()=>{
    it("check if 1 is odd", ()=>{
        expect(sum(1)).toEqual("odd");
    });

    it("check if 2 is even", ()=>{
        expect(sum(2)).toEqual("even");
    });
});
