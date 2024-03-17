/** @type {import("prettier").Config} */
const prettierConfig = {
    trailingComma: "all",
    overrides: [
        {
            files: ["*.json"],
            options: {
                // Prevent consolidating multiple values on one line
                printWidth: 1,
            },
        },
    ],
};

module.exports = prettierConfig;
