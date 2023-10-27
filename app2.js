function doAddition()
{
var num1=document.getElementById('id1').value
var num2=document.getElementById('id2').value
if(num1=="")
{
alert('Please enter frist number')
}
if(num2=="")
{
alert('Please enter frist number')
}
else{
var total=eval(num1)+eval(num2)
document.getElementById('id3').value=total
}
}
function doClear()
{
var result=confirm('Do you want to clear')
if(result==true)
{
document.getElementById('id1').value=""
document.getElementById('id2').value=""
document.getElementById('id3').value=""
}
}
