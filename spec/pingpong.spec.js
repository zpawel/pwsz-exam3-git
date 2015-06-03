describe('pingpong', function ()
{
    var pingpong = require('../app/pingpong.js');

    describe('ping', function ()
    {
        it('should return pong', function ()
        {
            expect(pingpong.ping()).toEqual('pong');
        });
    });
});
