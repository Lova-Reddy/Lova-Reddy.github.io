runner = document.getElementById('runner')

function appendValue(value){
    runner.value += value;
}
function flush(){
    runner.value = '';
}
function del(){
    let length = runner.value.length;
    runner.value = runner.value.substring(0,length-1);
}
function compute(){
    let result;
    try{
        result = eval(runner.value);
    } catch(error){
        result = 'Error';
    }
    runner.value = result;
}