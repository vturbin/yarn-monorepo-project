module.exports = function (wallaby) {
    var path = require("path");
    process.env.NODE_PATH += path.delimiter + path.join(wallaby.localProjectDir, "..", "..", "node_modules");

    return {
        files: ["tsconfig.json", "src/**/*.ts", "!src/**/*.spec.ts"],

        tests: ["src/**/*.spec.ts"],
        filesWithNoCoverageCalculated: ["src/**/*.spec-helper.ts"],
        env: {
            type: "node",
        },
        testFramework: "jasmine",
    };
};
