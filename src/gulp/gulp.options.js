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
    src: `${basePaths.src}/css/sass/**.*`,
    build: `${basePaths.src}/css`
};
const jsPaths = {
    src: `${basePaths.src}/scripts/app.js`,
    build: `${basePaths.build}/js`
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
                build: basePaths.build
            },
            sass: {
                src: sassPaths.src,
                build: sassPaths.build
            },
            js: {
                src: jsPaths.src,
                build: jsPaths.build
            }
        }
    }
})();

// Settings object is exorted back here
module.exports = settings;
