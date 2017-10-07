import {expect} from 'chai';
import 'mocha';
import parse from "../../src/parser/parser";
import rationalZeros from "../../src/modules/zeros";
import {potentialZeros, actualZeros} from "../../src/modules/zeros";
import * as math from "mathjs";

describe("Rational Zeros Test", function(){
    it("Should apply 'rule of signs' to determine potential zeros", function(){
        // http://www.purplemath.com/modules/rtnlroot.htm
        let poly = parse("x^4 + 2x^3 - 7x^2 - 8x + 12");
        let potential = potentialZeros(poly);
        let expected = [1,2,3,4,6,12,-1,-2,-3,-4,-6,-12];
        expected.forEach((val)=>{
            expect(potential.has(val)).to.be.true;
        })
    });

    it("Should test potential zeros to find actual zeros", function(){
        // http://www.purplemath.com/modules/rtnlroot.htm
        let poly = parse("x^4 + 2x^3 - 7x^2 - 8x + 12");
        let potential = potentialZeros(poly);
        let actual = actualZeros(potential, poly);
        let expected = [1, 2, -2, -3];
        expect(actual.size).to.equal(expected.length);
        expected.forEach((val)=>{
            expect(actual.has(val)).to.be.true;
        });
    });

    /*it("Should apply rule of signs to determine potential zeros", function(){
        // http://www.sparknotes.com/math/algebra2/polynomials/section4.rhtml
        let poly = parse("x^3 - 9x + 2x^4 - 19x^2 +9");
        let output = rationalZeros(poly);
        let pot = [];
        output.potential_zeros.forEach((number) => {
            pot.push( math.format(math.fraction(number)));
        });
        let act = [];
        output.actual_zeros.forEach((number) => {
            act.push( math.format(math.fraction(number)));
        });
        console.log(pot.join(" , "));
        console.log(act.join(" , "));
    });*/
});