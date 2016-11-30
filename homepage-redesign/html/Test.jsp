<div ng-controller="test.controller">
    <div class="row section-header">
        <div class="col-md-12">
            Test Component
        </div>
    </div>
    <div class="row">
        <div class="col-md-2 col-md-offset-1">
            Value to Request:
        </div>
        <div class="col-md-4">
            <input ng-model="vm.messageToSend" class="form-control">
        </div>
    </div>
    <div class="row">
        <div class="col-md-2 col-md-offset-1">
            Number to Request:
        </div>
        <div class="col-md-4">
            <input ng-model="vm.numberToPost" class="form-control">
        </div>
    </div>
    <div class="row actions">
        <div class="col-md-4 col-md-offset-3">
            <button ng-click="func.testGetCall()">GET</button>
            <button ng-click="func.testPostCall()">POST</button>
        </div>
    </div>
    <div class="row result">
        <div class="col-md-2 col-md-offset-1 header">
            Result:
        </div>
        <div class="col-md-4" ng-bind="vm.testData">
        </div>
    </div>
 </div>
