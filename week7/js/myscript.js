
function update1(){
    var e = document.createElement('h2');
    e.innerHTML = "Web222";
    document.body.appendChild(e);
}

function changeColor(){
    var e = document.querySelector('#heading');

    e.style.color="red";
}

function remove(){
    //var e = document.getElementById('heading');
    //document.body.removeChild(e);
    document.body.lastChild.remove();
    //document.body.removeChild(document.body.lastChild);
}

function update2(){
    var e = document.createElement("h2");
    e.innerHTML = "Welcome to DOM!!";

    var e2 = document.getElementById("heading");
    //document.body.insertBefore(e,e2);
    //document.body.replaceChild(e,e2);

}


//second method to add event
document.getElementById('method2').onclick = function(){
    var e = document.getElementById('heading');
    e.style.backgroundColor = 'yellow';
};

function foo(){
    console.log('Hello');
};

document.getElementById('method2').onclick = foo();

document.getElementById('method3').addEventListener('click', foo);

document.getElementById('method3').addEventListener('click', function(){
    var e = document.getElementById('heading');
    e.style.backgroundColor = 'green';
});


// document.getElementById('clock').onclick= function(){
//     var currentTime = new Date();
//     let e = document.createElement('h1');
//     e.innerHTML = currentTime.toLocaleTimeString();
//     document.body.appendChild(e);
// };


    let e = document.createElement('h1');
    document.body.appendChild(e);
    var t1;
    document.getElementById('clock').onclick= function(){

        function updateTime(){
            var currentTime = new Date();
            e.innerHTML = currentTime.toLocaleTimeString();
        }
    
    if(this.value==="Add Clock" || this.value==="Start"){
        t1 = setInterval(updateTime,100);
        this.value = "Stop";
    }
    else if(this.value==="Stop"){
        clearInterval(t1);
        this.value = "Start";
    }   
};
