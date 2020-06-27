


// function foo(){
//     alert("hello world")
// }
function getnumber(num){
    // console.log(num)
    var result = document.getElementById("result")
    result.value +=num;

}

function clearresult(){
    var result = document.getElementById("result")
    result.value=""
}

function getresult(){
    var result = document.getElementById("result")
    // console.log(result.value)
    result.value= eval(result.value)
}
