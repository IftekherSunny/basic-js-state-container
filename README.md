## Basic JS State Container

```js

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

```


## License
This library is licensed under the [MIT License](https://github.com/iftekhersunny/basic-js-state-container/blob/master/LICENSE)