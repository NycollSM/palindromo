(function (){
    let txt = document.getElementById('txtP').value;
    let button = document.getElementById('buttonP');

    button.addEventListener('click', ()=> { 
        event.preventDefault();
        console.log(txt.value);
    });
})();