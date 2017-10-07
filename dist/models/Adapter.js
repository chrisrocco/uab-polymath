"use strict";
exports.__esModule = true;
var Polynomial_1 = require("./Polynomial");
var PolyJS = require("polynomial");
var Monomial_1 = require("./Monomial");
var Adapter = /** @class */ (function () {
    function Adapter(lhs, rhs) {
        this.lhs = Adapter.toPolyJS(lhs);
        this.rhs = Adapter.toPolyJS(rhs);
    }
    Adapter.prototype.add = function () {
        return this.next(this.lhs.add(this.rhs));
    };
    Adapter.prototype.subtract = function () {
        return this.next(this.lhs.sub(this.rhs));
    };
    Adapter.prototype.multiply = function () {
        return this.next(this.lhs.mul(this.rhs));
    };
    Adapter.prototype.divide = function () {
        return this.next(this.lhs.div(this.rhs));
    };
    Adapter.prototype.next = function (polyJSOutput) {
        return Adapter.fromPolyJS(polyJSOutput);
    };
    Adapter.toPolyJS = function (polynomial) {
        var data = {};
        polynomial.monomials.forEach(function (monomial) {
            data[monomial.degree + ""] = monomial.coefficient;
        });
        return new PolyJS(data);
    };
    Adapter.fromPolyJS = function (polynomial) {
        var _monos = polynomial.coeff;
        var monos = [];
        for (var key in _monos) {
            if (_monos.hasOwnProperty(key))
                monos.push(new Monomial_1["default"](_monos[key], parseInt(key)));
        }
        return new Polynomial_1["default"](monos);
    };
    return Adapter;
}());
exports["default"] = Adapter;
//# sourceMappingURL=Adapter.js.map