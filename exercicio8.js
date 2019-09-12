"use strict";
exports.__esModule = true;
var piscina = /** @class */ (function () {
    function piscina(diametro, custo) {
        this.diametro = diametro;
        this.custo = custo;
    }
    piscina.prototype.raio = function () {
        return this.diametro / 2;
    };
    piscina.prototype.area = function () {
        return 3.14159 * (this.raio() * this.raio());
    };
    piscina.prototype.custoTotal = function () {
        return this.area() * this.custo;
    };
    return piscina;
}());
exports.piscina = piscina;
