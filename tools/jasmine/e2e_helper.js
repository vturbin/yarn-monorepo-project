var jasmineReporters = require("jasmine-reporters");

var junitReporter = new jasmineReporters.JUnitXmlReporter({ filePrefix: "e2e-results" });

jasmine.getEnv().addReporter(junitReporter);

jasmine.getEnv().addReporter({
    specStarted: function (result) {
        console.log(`\n${result.fullName}`);
    },
});
