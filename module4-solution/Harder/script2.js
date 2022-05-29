(function (window) {

    var obj2 = {};

    obj2.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    obj2.sayHello = function () {

        for (var i in obj2.names) {


            if (obj2.names[i][0] !== 'j' && obj2.names[i][0] !== 'J') {


                console.log("Hello " + obj2.names[i]);

            }

        }
    }

    window.obj2 = obj2;

})(window);

