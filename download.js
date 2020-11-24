//Resume Download Button Event Listener
document.getElementById("download").addEventListener("click", function(){
    // Start the download of yournewfile.txt file with the content from the text area
        var element = document.createElement('a');
        element.setAttribute('href', 'Media/Resume.pdf');
        element.setAttribute('download', 'Media/Resume.pdf');
        element.style.display='none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }, false);

//Submit Button Event Listener
//POST Request to the recommended link in the project assignment. I tried it a couple times but it was not working. :(
document.getElementById("submit").addEventListener("click", function(){
        var element = document.getElementById("submitted");    
        var req = new XMLHttpRequest();
        var payload = {firstName:null,lastName:null,email:null,reason:null};
        payload.firstName = document.getElementById('firstName').value;
        payload.lastName = document.getElementById('lastName').value;
        payload.email = document.getElementById('email').value;
        payload.reason = document.getElementById('reason').value;
        
        req.open('POST', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php');
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(JSON.stringify(payload));
        
        element.textContent = "Submitted! Hope to talk with you soon!";
        event.preventDefault();
    }, false);