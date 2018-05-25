//var arr=[1,3,9,4,8,1,5,2,6,7,6,-3,-2]
var arr=[1,5,8, 1,2,3, 5,2,0,0,0,0,1]

function doit(arr) {
  if(arr==null || arr.length==0)
    return -1;
  if(arr[0]<1)
    return -1;

  var ctr=0;
  var curpos=0;
  while(curpos<arr.length) {
    ctr++;
    console.log(arr[curpos]);
    if(arr[curpos]<1){
      return -1;
    }
    if(arr[curpos] >= (arr.length-1-curpos)) {
      break;
    }

    var maxpos=curpos+1;
    for(var i=curpos+1; i<=curpos+arr[curpos]; i++) {
      if((maxpos+arr[maxpos])<=(i+arr[i])) {
        maxpos=i;
      }
    }
    curpos=maxpos;
  }
  return ctr;
}

console.log(arr);
console.log("steps="+doit(arr));
