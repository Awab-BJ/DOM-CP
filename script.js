function plus1(){
    var n=document.getElementById('num1');
    value=n.innerHTML;
    ++value;
    document.getElementById('num1').innerHTML=value;
}
function moins1(){
    var n=document.getElementById('num1');
    value=n.innerHTML;
    if(value>1){
    --value;
    document.getElementById('num1').innerHTML=value;
    }
}
function plus2(){
    var n=document.getElementById('num2');
    value=n.innerHTML;
    ++value;
    document.getElementById('num2').innerHTML=value;
}
function moins2(){
    var n=document.getElementById('num2');
    value=n.innerHTML;
    if(value>1){
    --value;
    document.getElementById('num2').innerHTML=value;
    }
}
function sum(){
    var n=document.getElementById('num1');
    s1=n.innerHTML;
    document.getElementById('sum1').innerHTML=(s1*2.99).toFixed(2);
    var m=document.getElementById('num2');
    s2=m.innerHTML;
    document.getElementById('sum2').innerHTML=(s2*3.19).toFixed(2);
    var st=document.getElementById('tot');
    st=(s1*2.99)+(s2*3.19);
    document.getElementById('tot').innerHTML=(st).toFixed(2);
}
function remove(){ 
    var parentElem = document.getElementById('main');
    var childElem1 = document.getElementById('b1');
    var childElem2 = document.getElementById('b2');
    parentElem.removeChild(childElem1);
    parentElem.removeChild(childElem2);
    document.getElementById('tot').innerHTML=('0.00');
    document.getElementById('item').innerHTML=('0');
}