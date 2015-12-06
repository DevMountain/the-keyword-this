describe('practice', function () {
	describe('user', function () {
		it('should exist', function () {
			expect(user).toBeDefined();
		})
		it('should be an object', function () {
			expect(user).toEqual(jasmine.any(Object));
		})
		it('should have username and email properties which are strings', function () {
			expect(user.hasOwnProperty('username')).toBe(true);
			expect(user.hasOwnProperty('email')).toBe(true);
			expect(user.username).toEqual(jasmine.any(String));
			expect(user.email).toEqual(jasmine.any(String));
		})
		it('should have a getUsername method', function () {
			expect(user.hasOwnProperty('getUsername')).toBe(true);
			expect(user.getUsername).toEqual(jasmine.any(Function));
		})
		describe('getUserName', function () {
			it('should return the users username', function () {
				expect(user.getUsername()).toEqual(user.username);
			})
		})
	})
	describe('Car', function () {
		it('should exist', function () {
			expect(Car).toBeDefined();
		})
		it('should be a function', function () {
			expect(Car).toEqual(jasmine.any(Function))
		})
		it('should return an object when invoked with new (var prius = new Car(...))', function () {
			var car = new Car('Toyota', 'Prius', 2015);
			expect(car).toEqual(jasmine.any(Object));
		})
		describe('return object', function () {
			it('should have a moveCar method', function () {
				var car = new Car('Toyota', 'Prius', 2015);
				expect(car.hasOwnProperty('moveCar')).toBe(true);
				expect(car.moveCar).toEqual(jasmine.any(Function));
			})
			describe('moveCar', function () {
				it('should return a number', function () {
					var car = new Car('Toyota', 'Prius', 2015);
					expect(car.moveCar()).toEqual(jasmine.any(Number));
				})
			})
		})


	})
})