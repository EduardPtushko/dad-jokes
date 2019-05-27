module.exports = {
    roots: ["<rootDir>/src/", "<rootDir>/tests/"],
    preset: "ts-jest",
    // testEnvironment: "node",
    verbose: true,
    testPathIgnorePatterns: ["/node_modules/"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    globals: {
        "ts-jest": {
            diagnostics: {
                ignoreCodes: [],
            },
        },
    },
};
