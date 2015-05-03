describe('calculator', function ()
{
    var calculator = require('../app/calculator.js');

    describe('add', function ()
    {
        it('should return sum of two numbers', function ()
        {
            expect(calculator.add(1, 2)).toEqual(3);
        });
    });
    describe('subtract', function ()
    {
        it('should return difference between second and first number', function ()
        {
            expect(calculator.subtract(1, 2)).toEqual(1);
        });
    });
});
