(function () {
    var app = angular.module("studentdata", []);
    var MainController = function ($scope) {
        $scope.imageData = [
                            { src: '../Content/image/student_add_image.jpg', description: 'Add a student' },
                            { src: '../Content/image/data_view.jpg', description: 'Retrieve student data' }
        ];

        $scope.myData = [{ name: "Moroni", age: 50 },
                 { name: "Tiancum", age: 43 },
                 { name: "Jacob", age: 27 },
                 { name: "Nephi", age: 29 },
                 { name: "Enos", age: 34 }];

    };

    app.controller("MainController", MainController);
}());