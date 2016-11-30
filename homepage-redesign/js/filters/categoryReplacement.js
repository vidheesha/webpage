angular.module('bb-homepage')
    .filter('categoryReplacement', [CategoryReplacementFilter]);

function CategoryReplacementFilter() {

    return function(input, categoryName, subCategoryName) {

        var returnVal = input;
        returnVal = returnVal.split("{categoryName}").join(categoryName);
        returnVal = returnVal.split("{subCategoryName}").join(subCategoryName);
        return returnVal;
    }
}
