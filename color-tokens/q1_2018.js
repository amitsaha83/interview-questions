function decode(encoded) {

    let output = ''
    let arr = Array.from(encoded);
    
    //reverse arr
    let p=0, q=arr.length-1;
    while(p<q) {
        let temp = arr[p];
        arr[p] = arr[q];
        arr[q] = temp;
        p++;
        q--;
    }
    
    //decoding
    let x=parseInt(arr[0]);
    let i=1;
    while(i<=arr.length) {
        if((x>=65 && x<=90) ||
        (x>=97 && x<=122) ||
        (x==32) )
        {
            output += String.fromCharCode(x);
            x=parseInt(arr[i++])
        }
        else {
            if(x>1000) {
                console.log("Invalid input");
                return '';
            }
            else {
                x = 10*x + parseInt(arr[i++]);
            }
        }
    }
    return output
}

function pairsum(arr, sum) {
    let p = new Set();
    let q = new Set();
    for(let i=0; i<arr.length; i++) {
        let a = arr[i];
        let b = sum-arr[i];
        if(p.has(a)) {
            q.add(a);
        }
        else {
            if(p.has(b)) {
                //do nothing
            }
            else {
                p.add(b);
            }
        }
    }
    return q.size;
}

function giveoutput1() {
    for(var i=0; i<10; i++) {
        setTimeout(function() {
            console.log(i);
        })
    }
}

function giveoutput2() {
    var info = {
        "name": "Charles",
        "age": 20,
        "city": "San Jose",
        "state": "CA"
    }
    info.city = 'undefined'
    console.log(info);
}

function giveoutput3() {
    var token = {
        name: "Charles",
        expire: 86400
    };
    var t1 = Object.create(token);
    delete t1.expire;

    console.log(t1.expire);
}

function runTest() {
    console.log();
    console.log(decode("1219950180111108236115111016623101401611235115012312161151110101111127"));
    
    console.log();
    console.log(pairsum([1,2,3,4,5,5,5,5,6,7,8,9,1,9],10));

    console.log();
    giveoutput1();
    console.log();
    giveoutput2();
    console.log();
    giveoutput3();
}

runTest();