function setShow(str){
    document.getElementById(str).style.display="block";
}
function setNotShow(str){
    document.getElementById(str).style.display="none";
}
function setContent(str1,str2){

    document.getElementById(str1).innerText=str2;
}
function getContent(str1){
    return document.getElementById(str1).value;
}
function getTextContent(str1){
    return document.getElementById(str1).innerText;
}