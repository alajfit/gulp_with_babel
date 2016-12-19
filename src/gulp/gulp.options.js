// All options and paths are defined here
const options = {
    isProduction: false,
    useSourceMaps: true
};
const basePaths = {
    src: 'src',
    build: 'build'
};
const sassPaths = {
    src: `${basePaths.src}/css/sass/main.scss`,
    build: `${basePaths.src}/css`,
    all: `${basePaths.src}/css/sass/**/*.scss`
};
const jsPaths = {
    src: `${basePaths.src}/scripts/app.js`,
    build: `${basePaths.build}/js`,
    all: `${basePaths.src}/scripts/**/*.js`
};

// settings object is built here
const settings = (function () {
    return {
        optons: {
            isProduction: options.isProduction,
            useSourceMaps: options.useSourceMaps
        },
        paths: {
            base: {
                src: basePaths.src,
                build: basePaths.build,
            },
            sass: {
                src: sassPaths.src,
                build: sassPaths.build,
                all: sassPaths.all
            },
            js: {
                src: jsPaths.src,
                build: jsPaths.build,
                all: jsPaths.all
            }
        }
    }
})();

// Settings object is exorted back here
module.exports = settings;
