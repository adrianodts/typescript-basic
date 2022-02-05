// const sample 
// using const the variable is declared and intialized, but can't be modified
function showWithConst() {
    var text = 'Adriano Dantas';
    if (true) {
        var text_1 = "another text";
        // here we can declare the text variable, but it's valid only inside this scope.
    }
    //text = "It does't compile. Cannot assign to 'text' because it is a constant."
    console.log(text);
    var object = {
        name: 'Adriano Dantas'
    };
    // we can assign the value of object
    object.name = 'Adriano';
    console.log(object);
}
showWithConst();
