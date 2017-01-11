module.exports = {
  findMissing : function (arr1,arr2){
    
    var array1 = arr1;
    var array2 = arr2;
    var missingNumber = 0;
    
    if((array1 && array2) == 0){
      
      return missingNumber;
      
    }else if(array1.length == array2.length){
      
      return missingNumber;
      
    }else{
      
    for (var j = 0; j<array2.length;j++){
      for (var i = 0; i<array1.length;i++){
        
        if (array2[j] == array1[i] ){
          array2[j] = 0;
        }
      }
    }
    
    for(var loop =0; loop < array2.length; loop++ ){
      
      missingNumber += array2[loop];
      
    }
    
    return missingNumber;
    
    }
  }
}