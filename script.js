//Task 1

var arr=[1,2,3,3,4,5,5,6,7,8,8]
var result=[]

for(i=0;i<arr.length;i++){
  if (result.includes(arr[i])){
    continue;
  }
  else{
    result.push(arr[i]);
  }
}
console.log(result)

//Task 2
var arr="Malayalam"
var res=arr.toLowerCase()
var result2=res.split('')
var result3=result2.reverse()

if (result3.join('')==res){
    console.log("true")
}
else{
    console.log("false")
}

//Task3 
var str="Hello"
 console.log(str.split('').reverse().join(''))