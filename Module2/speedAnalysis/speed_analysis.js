let testText =  "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    document.getElementById('inputText').value = testText;

    document.getElementById('output').innerHTML = "";
    startTime = new Date().getTime();

    var button = documnet.getElementById('btn');
    button.innerHTML = "End Test";
    button.onclick = endTest;
}


function endTest(){
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeLapsed = (endTime - startTime)/ 1000;  // in seconds  
    var userTypeTest = document.getElementById("userInput").value;

     // Split the text using regex to count words correctly
    var typeWords = userTypeTest.split(/\s+/).filter(function(word){
        return word!= "";
    }).length;

    var wpm = 0;  // Default value

    if(timeLapsed !== 0 && !isNaN(typeWords))
    {
        wpm = Math.round((typeWords/timeLapsed)*60);
    }

    // Display the result
    var outDisplay = document.getElementById("output");
    outDisplay.innerHTML = "<h2>Typing Test Results:</h2>" +
                    "<p>Typeword: " + typeWords + "</p>" +
                    "<p>Time: "+ timeLapsed.toFixed(2) +"</p>" +
                    "<p>Word per Time: " + wpm + "<>/p";

    // Reset button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;    
}


