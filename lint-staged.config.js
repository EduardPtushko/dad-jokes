module.exports = {
    linters: {
        'src/**/*.{js,jsx,ts,tsx}': ['eslint'],
        'src/**/*.{js,jsx,ts,tsx,css,sass}': ['prettier --write', 'git add']
    }
}