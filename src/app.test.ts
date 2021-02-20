import { describe, it, expect } from '@jest/globals';
import app from './app';

describe('App', () => {
	it('should have a start function', () => {
		expect(typeof app).toBe('function');
	});
});
