//calc 1-2+3-4+...n
function sum2(n){
    var sum = 0;
    if(n<=0){
        console.log("error: n must>8");
        return null;
    }else{
        //O(n)
        for(var i=1; i<=n; i++){
            /*if(i%2==0)
              sum -= i;
            else
              sum += i;*/
            (i%2==0) ? sum -= i : sum += i;
        }
        return sum;
        //O(1)
        //return (i%2==0) ? (-1)*(n/2) : (n+1)/2;
    }

}

//test
var n=100;
console.log("1-2+3-4+..."+n+"="+sum2(n));