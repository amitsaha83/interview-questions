var sum=2;
var matrix=[[0,4,5],[],[8,5],[1,2,3,4,5,6]];

function doit(sum, matrix) {
  var rows=matrix.length;
  //console.log(rows);

  var matchCtr=0;
  for(var i=0; i<rows-1; i++) {
    for(var j=0; j<matrix[i].length; j++) {
      matchCtr += checkMatch(matrix[i][j], i, rows, sum, matrix)
    }
  }
  if(matchCtr>0){
    console.log("matches="+matchCtr);
  }
  else {
    console.log("No Match");
  }
}

function checkMatch(curval, currow, rows, sum, matrix) {
  var matchCtr=0;
  for(var i=currow+1; i<rows; i++) {
    for(var j=0; j<matrix[i].length; j++) {

      if((curval+matrix[i][j])==sum) {
        matchCtr++;
        console.log(currow, sum, curval, matrix[i][j], '*');
      }
      else
        console.log(currow, sum, curval, matrix[i][j]);
    }
  }
  return matchCtr;
}


doit(sum, matrix);
console.log(matrix);
