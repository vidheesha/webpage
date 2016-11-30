angular.module('bb-homepage')
    .filter('appendIcidQuery', [AppendIcidQueryFilter]);

function AppendIcidQueryFilter() {

    return function(input, icidQuery) {

        if(input === undefined) {
            return input;
        }

        var returnVal = input;

        if(returnVal.indexOf('?') > 0) {
            return returnVal + '&icid=' + icidQuery;
        }

        return returnVal + '?icid=' + icidQuery;
    }
}
