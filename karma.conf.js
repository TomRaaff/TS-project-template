module.exports = function (config) {
	config.set({
				   frameworks: ['jasmine', 'karma-typescript'],
				   files: [
					   { pattern: 'src/**/*.ts' }
				   ],
				   preprocessors: {
					   '**/*.ts': ['karma-typescript']
				   },
				   reporters: ['progress', 'karma-typescript', 'kjhtml'],
				   htmlReporter: {
					   outputDir: 'coverage/karma_html', // where to put the reports
					   templatePath: null, // set if you moved jasmine_template.html
					   focusOnFailures: true, // reports show failures on start
					   namedFiles: false, // name files instead of creating sub-directories
					   pageTitle: null, // page title for reports; browser info by default
					   urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
					   reportName: 'report-summary-filename', // report summary filename; browser info by default

					   // experimental
					   preserveDescribeNesting: false, // folded suites stay folded
					   foldAll: false, // reports start folded (only with preserveDescribeNesting)
				   },
				   browsers: ['Chrome'],
				   singleRun: false,
				   client: {
					   clearContext: false
				   }
			   });
};
