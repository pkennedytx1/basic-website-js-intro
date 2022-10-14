var myFirstVariable = {
    greeting: "Howdy Hey",
    school: "Texas A&M",
    age: 31,
    deeperObject: {
        moreGreetings: "Hola!"
    },
    myFunc: function() {
        return 2 + 2;
    }
};

var mySecondVariable = ["Hoedy Hey", 31, { singleKey: "Sup"}, function() { return 2 + 2}];

var myFirstFunction = function() {
    for(var i = 0; i < mySecondVariable.length; i++) {
        if ((typeof mySecondVariable[i]) === 'function') {
            console.log(mySecondVariable[i]());
        } else {
            console.log(mySecondVariable[i]);
        }
    }
}

myFirstVariable.food = "sushi";

console.log(myFirstVariable);