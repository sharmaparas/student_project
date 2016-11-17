(function () {
    var app = angular.module("studentdata", []);
    var MainController = function ($scope) {
        $scope.imageData = [
                            { src: '../Content/image/student_add_image.jpg', description: 'Add a student' , id:0},
                            { src: '../Content/image/data_view.jpg', description: 'Retrieve student data' , id:1}
        ];
    };

    app.controller("MainController", MainController);
}());