(function (window) {

    var obj2 = {};

    obj2.names = ["Alex", "Jhon", "Mark", "joey"];

    obj2.sayHello = function () {

        for (var i in obj2.names) {


            if (obj2.names[i][0] !== 'j' && obj2.names[i][0] !== 'J') {


                console.log("Hello " + obj2.names[i]);

            }

        }
    }

    window.obj2 = obj2;

})(window);

