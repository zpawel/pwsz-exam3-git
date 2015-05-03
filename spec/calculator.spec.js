describe('calculator', function ()
{
    var calculator = require('calculator');

    describe('add', function ()
    {
        it('should return sum of two numbers', function ()
        {
            expect(calculator.add(1, 2)).toEqual(3);
        });
    });
});
