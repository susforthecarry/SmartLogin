window.addEventListener('load', function(){
    var storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
        var displayContent = document.querySelector(".displayy");
        displayContent.textContent = 'welcome to '+ storedUserName
    }
})