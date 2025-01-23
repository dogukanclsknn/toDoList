let toDoAdd = document.getElementById('toDoAdd');
let toDoContainer = document.getElementById('toDoContainer');
let toDoText = document.getElementById('toDoText');


toDoAdd.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);    
    paragraph.innerHTML = toDoText.value;
    toDoText.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

    toDoDelete.addEventListener('click', function(){
        paragraph.remove();
    });
});  