////////////////////////////////////////////////////
// Basic JS state container library.....
////////////////////////////////////////////////////
(function() {
    
    // init store
    var store = {};

    // int state
    store.state = {}

    // an object of registered dispatchers
    store.dispatchers = {}

    // registering dispatcher
    store.on = function(dispatcher, callback) {
        store.dispatchers[dispatcher] = callback;
    }

    // dispatching registered dispatcher
    store.dispatch = function(dispatcher, args) {
        if (!store.dispatchers[dispatcher]) {
            throw "Dispatcher [ " + [dispatcher] + " ] doesn't exists";
            return;
        }

        // dynamically calling dispatcher
        var state = store.dispatchers[dispatcher](args);

        // storing state
        store.state = state;
    }

    // registering store to the Global object
    window.store = store

}())




////////////////////////////////////////////////////
// SHOWING EXAMPLE......
////////////////////////////////////////////////////
var userStore = store 

// register dispatcher
userStore.on("RENDER_USER_NAME", function(state) {
    console.log(state.name);

    document.getElementById("print-user-name").innerHTML = state.name;

    return state;
});

// executing dispatcher
userStore.dispatch("RENDER_USER_NAME", {
    name: 'Iftekher Sunny'
});

// getting userStore's state
console.log(userStore.state);




////////////////////////////////////////////////////
// execute when input value change
////////////////////////////////////////////////////
document.getElementById("user").addEventListener("keyup", function () {

    // executing dispatcher
    userStore.dispatch("RENDER_USER_NAME", {
        name: document.getElementById("user").value
    });
});

