(function (window) {

    var obj1 = {};

    obj1.names = ["Alex", "Jhon", "Mark", "joey"];

    obj1.sayGoodbye = function () {

        for (var i in obj1.names) {


            if (obj1.names[i][0] === 'j' || obj1.names[i][0] === 'J') {


                console.log("Goodbye " + obj1.names[i]);

            }

        }
    }

    window.obj1 = obj1;

})(window);

