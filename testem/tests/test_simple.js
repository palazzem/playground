var expect = chai.expect;

describe('A box', function () {
    it('should be initiliazed', function () {
        var box = new Box();
        expect(box).to.be.defined;
    });

    it('should be empty when initialized', function () {
        var box = new Box();
        expect(box.size).to.be.equal(0);
    });
    
    it('should contains any object', function () {
        var box = new Box();
        var object = {};
        var series = [];

        box.add(object);
        box.add(series);
        expect(box.size).to.be.equal(2);
    });

    it('should be possible to throw everything out', function () {
        var box = new Box();
        var object = {};

        box.add(object);
        box.throwAway();
        expect(box.size).to.be.equal(0);
    });
});
