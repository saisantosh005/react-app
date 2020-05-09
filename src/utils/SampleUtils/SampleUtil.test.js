import {add} from '.';

/*global expect*/;

describe("add tests",()=>{
    it("should return sum of two numbers",()=>{
        expect(add(1,2)).toBe(3);
        
    });
    it("should return negative Number",()=>{
        expect(add(1,-2)).toBe(-1);
    })
});



