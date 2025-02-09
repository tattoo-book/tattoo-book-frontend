// commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2, // Level: error
            'always', // Apply rule in the always case
            [
                'feat', // New feature (minor)
                'fix', // Bug fix (patch)
                'docs', // Documentation only changes
                'style', // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
                'refactor', // A code change that neither adds a feature nor fixes a bug
                'perf', // A code change that improves performance
                'test', // Adding missing tests or correcting existing tests
                'build', // Changes that affect the build system or external dependencies (example scopes: gulp, npm, webpack)
                'ci', // Changes to our CI configuration files (example scopes: Travis, Circle, BrowserStack)
                'chore', // Other changes that don't modify src or test files
                'revert', // Reverts a previous commit
                'wip', // Work in progress
                'release', // Release/tag creation
            ],
        ],
        'scope-enum': [
            2,
            'always',
            [
                // Add your scopes here.  Examples:
                'auth',
                'user',
                'product',
                'api',
                'core',
                'shared',
                'nestjs', // For NestJS specific changes
                '*', // Allow any scope (use with caution)
            ],
        ],
        'subject-min-length': [2, 'always', 5], // Minimum subject length
        'subject-case': [
            2,
            'never', // Or 'lower-case' if you prefer all lowercase
            ['upper-case', 'kebab-case', 'pascal-case', 'sentence-case'], // Cases to disallow
        ],
        'header-max-length': [2, 'always', 100], // Maximum header length
        'body-max-line-length': [2, 'always', 100], // Maximum body line length
        'footer-max-line-length': [2, 'always', 100], // Maximum footer line length
        'scope-case': [2, 'always', 'kebab-case'], // Scope must be kebab-case
        'type-case': [2, 'always', 'lower-case'], // Type must be lowercase
        'subject-full-stop': [2, 'never', '.'], // Subject should not end with a dot
    },
};