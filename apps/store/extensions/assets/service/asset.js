/*var assetManager = function(manager) {
    var get = manager.get;
    manager.get = function(id) {
        return get.call(manager, id);
    };
    return manager;
};*/

var assetLinks = function (user) {
    return {
        title: 'Services',
        links: [
            {
                title: 'Services',
                url: ''
            }
        ],
        isCategorySupport: true
   };
};
