import { addOne } from './detects';

describe('Detects.addOne', () => {
	it('should add one to its input value', () => {
		// arrange
		const expected = 3;
		// act
		const result = addOne(2);
		// assert
		expect(result).toBe(3);
	});
})
