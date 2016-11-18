(function () {
    var app = angular.module("studentdata", []);
    var MainController = function ($scope) {
        $scope.imageData = [
                            { src: '../Content/image/student_add_image.jpg', description: 'Add a student' , id:1},
                            { src: '../Content/image/data_view.jpg', description: 'Retrieve student data' , id:2}
        ];
        $scope.template = [
                            '../Scripts/Template/DefaultHomePage.html',
                            '../Scripts/Template/AddStudent.html', 
                            '../Scripts/Template/ViewStudentData.html',
        ];
        $scope.NameText = "Name:";
        $scope.IDText = "ID:";
        $scope.AgeText = "Age:";
        $scope.viewID = 0;
        $scope.display = function (id) {
            $scope.viewID = id;
        };
    };

    app.controller("MainController", MainController);
}());