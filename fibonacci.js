// iteration version
function fib(n){
    //prevent n<0
    var a=0,b=1;
    for(var i=1; i<=n; i++){
        a = a+b;
        b = a-b;
    }
    return a;
}
    //test
    var n=50
    console.log("fibonacci "+n+"="+fib(n))
