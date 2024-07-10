// Get the input field and the button
var inputField = document.getElementById('formGroupExampleInput');
var button = document.querySelector('button');
var loginButton = document.querySelector('.loginButton');

// Add an event listener to the button
button.addEventListener('click', function(){
    // Get the username from the input field
    var userNameData = inputField.value;
    
    // Store the username in local storage
    localStorage.setItem('userName', userNameData);
    
    // Navigate to the home page
    window.location.href = './Home.html';
});

// Add an event listener to the login button
loginButton.addEventListener('click', function(){
    // Navigate to the home page
    window.location.href = './Home.html';
});

// On the home page
window.addEventListener('load', function(){
    // Retrieve the username from local storage
    var storedUserName = localStorage.getItem('userName');
    
    if (storedUserName) {
        // Display the username on the home page
        var displayContent = document.querySelector(".displayy");
        displayContent.textContent = 'welcome to '+ storedUserName;
    }
});
