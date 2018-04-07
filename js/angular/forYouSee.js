var forYouSeeApp = angular.module('forYouSeeApp', []);

forYouSeeApp.filter('filterList', function(){
    return function(items, field, value){
        if (value) {
            return items.filter(it => it[field].toLowerCase().indexOf(value.toLowerCase()) > -1);
        }
    
        return items;
    }
});