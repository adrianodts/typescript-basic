// var sample 
// The problem here is that text var can be declared more than once inside de function. 
function showWithVar() {
    var text = 'Adriano Dantas'
    if (true) {
        var text = "another text"
    }
    console.log(text)
}
showWithVar()