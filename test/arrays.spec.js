var expect = require('chai').expect;

describe("Arrays", function() {

	var array, one, two;

	beforeEach(function() {
		array = [];
		one = { value : "first" };
		two = { value : "second" };
	});

	describe("adding elements", function() {

		it("'push' adds at the end by default", function() {
			array.push(one);
			array.push(two);

			expect(array[1]).to.equal('green me!');
		});

		it("'unshift' adds at the beggining", function() {
			array.unshift(one);
			array.unshift(two);

			expect(array[0]).to.equal('green me!');
		});

		it("'splice' offers insertion", function() {
			array.push(one);
			array.push(two);
			bird = { value : "bird" };
			array.splice(0, 1, bird);

			expect(array[0]).to.equal('green me!');
		});

		it("'splice' offers multi-insertion", function() {
			array.push(one);
			array.push(two);
			fox = { value : "fox" };
			cat = { value : "cat" };
			array.splice(1, 2, fox, cat);

			expect(array[1]).to.equal('green me!');
			expect(array[2]).to.equal('green me!');
		});
	});

	describe("removing elements", function() {

		it("'pop' removes the last element", function() {
			array.push(one);
			array.push(two);
			array.pop();

			expect(array.length).to.equal('green me!');
			expect(array[0]).to.equal('green me!');
		});

		it("'pop' returns the last element", function() {
			array.push(one);
			array.push(two);

            		expect(array.pop()).to.equal('green me!');
		});

		it("'shift' removes the first element", function() {
			array.push(one);
			array.push(two);
			array.shift();

			expect(array.length).to.equal('green me!');
			expect(array[0]).to.equal('green me!');
		});

		it("'splice' can help to remove any element", function() {
			array.push(one);
			array.push(two);
			array.splice(array.indexOf(one), 1);

			expect(array.length).to.equal('green me!');
			expect(array[0]).to.equal('green me!');
		});

	});

	describe("2D", function() {

		var grid, A1, B2;

		beforeEach(function() {
			grid = [];
			A1 = { value : "first" }
			B2 = { value : "second" }
		});

		it("can be simulated with arrays of arrays", function() {
			grid[0] = [];
			grid[1] = [];
			grid[0][0] = A1;
			grid[1][1] = B2;

			expect(grid[0][0]).to.equal('green me!');
			expect(grid[1][1]).to.equal('green me!');
		});
	});

    describe('instanceof Array', function() {

        var isArray = function(o) {
            return o instanceof Array;
        };

        it('returns false for an integer', function() {
            expect(isArray(1)).to.equal('green me!');
        });

        it('returns false for a string', function() {
            expect(isArray("42")).to.equal('green me!');
        });

        it('returns true for a empty array', function() {
            expect(isArray([])).to.equal('green me!');
        });

    });

    describe('Join', function() {

        it('accepts a separator as parameter', function() {
            expect(['A', 'B B'].join('\n')).to.equal('green me!');
        });
    });

    describe('Reverse', function() {

        it('modifies the original array', function() {
            var letters = ['a', 'b', 'c'];
            letters.reverse();

            expect(letters).to.deep.equal('green me!');
        });

        it('also returns the reverted array', function() {
            expect(['a', 'b', 'c'].reverse()).to.deep.equal('green me!');
        });
    });

    describe('Concat', function() {

        it('concatenates the two given arrays', function() {
            expect([1, 2].concat([3, 4])).to.deep.equal('green me!');
        });

        it('concatenates the three given arrays', function() {
            expect([1, 2].concat([3, 4], [5, 6])).to.deep.equal('green me!');
        });
    });
});
