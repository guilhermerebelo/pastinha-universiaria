// 'use strict'

module.exports = directive;

directive.$inject = [];
function directive() {
    return {
        restrict: 'E',
        template: require('./pastinha.directive.html'),
        scope: {},
        bindToController: {},
        controller: controller,
        controllerAs: 'vm'
    };
}

controller.$inject = ['$scope', 'PastinhaService', '$firebase'];
function controller($scope, PastinhaService, $firebase) {
    var vm = this;

    var nomeService = $firebase.database().ref('users');

    nomeService.on("value", function(snapshot) {
        vm.pastinha = snapshot.val();
    });

    vm.create = create;

    function create() {
        var data = {
            nome: 'guilhremrewriew',
            idade: 17
        };

        $firebase.database().ref('users').push(data);
    }
}
