import { describe, it, expect } from '@jest/globals';
import start from './app';

describe('App', () => {
	it('should have a start function', () => {
		expect(typeof start).toBe('function');
	});
});
