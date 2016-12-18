var loadTask = function (pluginName) {
    return require('./src/gulp/gulp.' + pluginName + '.js');
};

const helpers = {
    loadTask: loadTask
};

module.exports = helpers;
