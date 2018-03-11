var quickSort = function(array){
  if(array.length <= 1) return array;
  var pivot = array[array.length-1]
  var left = []
  var right = []

  for(i=0; i < array.length-1; i++){
    if(array[i]<= pivot){
        left.push(array[i])
    }
    else
      right.push(array[i])
  }
   return [...quickSort(left),pivot,...quickSort(right)]
}
module.exports = quickSort
