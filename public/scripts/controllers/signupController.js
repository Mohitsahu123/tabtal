tabtalent.controller('SignupController', ['$http', '$scope', '$stateParams', '$state', '$rootScope', function ($http, $scope, $stateParams, $state, $rootScope) {

    
    $scope.registerUser = function () {
        $http.post('https://glacial-reef-26552.herokuapp.com/index.php/users/signup', $scope.cred).then(function (res) {
            $rootScope.user = (res.data || {}).data;
            $rootScope.user.experiences = [];
            $rootScope.user.skills = [];
            $rootScope.user.educations = [];
            $state.go('app.register');
            localStorage.setItem('TabTalentUser', JSON.stringify($rootScope.user));
        }, function (error) { 
            $scope.message = error.data.message;
        });
    }
    
}]);