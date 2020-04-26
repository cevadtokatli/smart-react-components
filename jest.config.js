module.exports = {
    setupFiles: ["<rootDir>/src/test/setup.tsx"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "/src/.*.test.tsx$",
    moduleFileExtensions: ["ts", "tsx", "js", "json", "node"]
}