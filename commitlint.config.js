module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
    "type-case": [2, "always", "lower-case"], // Commit type should always be lowercase
    "subject-case": [2, "always", "lower-case"], // Commit description should start with a lowercase letter
    "subject-full-stop": [2, "never", "."], // Commit description should not end with a period
    "header-max-length": [2, "always", 72], // Maximum header length (type + description) 72 characters
  },
};
