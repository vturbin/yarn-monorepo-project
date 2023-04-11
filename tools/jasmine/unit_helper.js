var jasmineReporters = require("jasmine-reporters");

var junitReporter = new jasmineReporters.JUnitXmlReporter({ filePrefix: "test-results" });

jasmine.getEnv().addReporter(junitReporter);
