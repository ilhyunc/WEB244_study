var e = document.createElement('h4');
e.innerHTML="Students List:";
document.getElementById('id2').appendChild(e);

var names = ["Ilhyun", "Tom", "Jerry"];

var ol_element = document.createElement('ol');
for(let i=0;i<names.length;i++){
    let = li_element = document.createElement('li');
    li_element.innerHTML = names[i];
    ol_element.appendChild(li_element);
}

document.getElementById('id2').appendChild(ol_element);