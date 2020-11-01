// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts


exports.config = {
    allScriptsTimeout: 11000,
    specs: ['./src/features/**/*.feature'],
    capabilities: {
        browserName: 'firefox',
        specs: ["./src/features/internet-explorer/**/graceful-shutdown.feature"],

        'moz:firefoxOptions': {
            args: ['--headless']
        }
    },

    seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',

    localSeleniumStandaloneOpts: {
        port: 4444,
        jvmArgs: [
            '-Dwebdriver.gecko.driver=./node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.27.0.exe'
        ]
    },

    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['./src/steps/**/*.steps.ts'],
        format: 'json:tmp/results.json',
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.e2e.json')
        });
    },
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            // read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }]
};
