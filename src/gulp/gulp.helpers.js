// Allows us to load a task from the gulp folder
var loadTask = function (pluginName) {
    return require('./gulp.' + pluginName + '.js');
};

// All helpers passed back as an object
const helpers = {
    loadTask: loadTask
};

module.exports = helpers;
