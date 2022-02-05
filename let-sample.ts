// let sample 
// using let the variable is declared by using scopes and tsc compiler
// doesn't permit declare variable with the same name in the same scope.
function showWithLet() {
    let text = 'Adriano Dantas'
    if (true) {
        let text = "another text"
        // text variable is valid only inside this scope.
    }
    //let text = "It does't compile"
    console.log(text)
    // here the value of variable text is.... "Adriano Dantas"
}
showWithLet()