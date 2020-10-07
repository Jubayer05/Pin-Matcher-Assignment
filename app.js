// UI variables
const wrongNotify = document.getElementById("wrong_notify"),
        rightNotify = document.getElementById("right_notify"),
        generateNum = document.getElementById("generate_num"),
        clearAll = document.getElementById("clearAll"),
        keyboardInput = document.getElementById("keyboard_num"),
        remainTimes = document.getElementById("remainTimes"),
        generateBtn = document.querySelector(".generate-btn"),
        submitBtn = document.querySelector(".submit-btn");
        
        

        wrongNotify.style.display = "none";
        rightNotify.style.display = "none";

// Show Random Number
generateBtn.addEventListener("click", randomNum);

// Click Number and show it in the box
function dis(val) {
    keyboardInput.value+=val;
}


function randomNum() {
    const randomNum = Math.round(Math.random()*10000);
    if(randomNum > 999 && randomNum < 10000){
        generateNum.value = randomNum;
    }
}

submitBtn.addEventListener("click", checkPin);

// Clear Input
function clearInput() {
    keyboardInput.value = "";
}

// BackSpace
function backSpace() {
    let keyBack = keyboardInput.value;
    keyboardInput.value = keyBack.substring(0, keyBack.length - 1); 
}


// Check If the number is match or not
function checkPin () {
    if (generateNum.value === keyboardInput.value) {
        rightNotify.style.display = "block";
        document.querySelector("body").style.background = "green";
        keyboardInput.setAttribute('disabled', true);
        
        setTimeout(function() {
            rightNotify.style.display = "none";
        }, 3000)
        
    } else {
            wrongNotify.style.display = "block";
            document.querySelector("body").style.background = "red";

            // show remain alert 
            remainAlert();

        setTimeout(function() {
            wrongNotify.style.display = "none";
            document.querySelector("body").style.background = "black";
        }, 3000)
        
    }
}

function remainAlert() {
    let remain = parseInt(remainTimes.textContent);
    if(remain > 0) {
        remain = remain - 1;
        remainTimes.textContent = remain;
        console.log(remainTimes.textContent);
    } else if(remain == 0) {
        submitBtn.setAttribute('disabled', true);
    }
    
}