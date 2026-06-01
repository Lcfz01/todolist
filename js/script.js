$(document).ready(function(){


    var listContainer = $('#list-container');
    var inputBox = $('#input-box');

    addTask = function(){
        if(inputBox.val() !== ''){
        listContainer.append('<li>' + inputBox.val() +'<span class="delete-btn" onclick="deleteTask(this)">\u00d7</span>'+ '</li>');
        inputBox.val('');
        saveTasks();
    }else{
        alert('Enter a valid task!');
    }
}

    saveTasks = function(){
        localStorage.setItem("data",listContainer.html());
    }

    showTasks = function(){
        listContainer.html(localStorage.getItem("data"));
    }
    deleteTask = function(span){
        $(span).parent().remove();
        saveTasks();

    }
    deleteAllTasks = function(){
        localStorage.removeItem("data");
    }
    
    listContainer.on('click','li',function(){
        $(this).toggleClass('checked');
        saveTasks();
    });

    showTasks();
});
