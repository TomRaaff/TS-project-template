module.exports = {
	roots: [
		'<rootDir>/src',
	],
	testMatch: [
		'**/__tests__/**/*.+(ts|js)',
		'**/?(*.)+(spec|test).+(ts|js)',
	],
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/dist/'
	],
	coveragePathIgnorePatterns: [
		'/jest-config/',
		'/node_modules/'
	],
	transform: {
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.js$': 'babel-jest'
	},
	transformIgnorePatterns: [
		'<rootDir>/node_modules/(?!tr-utilities-lib)/'
	]
};
