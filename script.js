const capitalCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const smallCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


const numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const symbolCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{" ,"[","}","]",",","|",":",";","<",">",".","?","/"]

let passwordCharacters = []

let rangeBtn = document.querySelector("#password-length")
let rangeValue = document.querySelector(".range-value")

let plusIcon = document.querySelector(".plus")
let minusIcon = document.querySelector(".minus")

function updateRangeValue(){
    rangeValue.textContent = rangeBtn.value
    updateRangeBg()
}
rangeBtn.addEventListener("input", updateRangeValue)

plusIcon.addEventListener("click", function minusRangeValue(){
    console.log("minus clicked")
    rangeBtn.value++
    updateRangeValue()
})
minusIcon.addEventListener("click", function addRangeValue(){
        rangeBtn.value--
        updateRangeValue()
    })

function updateRangeBg(){
    let percentage = ((rangeBtn.value - rangeBtn.min)/(rangeBtn.max-rangeBtn.min))*100
    rangeBtn.style.background = `linear-gradient(to right, #4ADF86 ${percentage}%, #e0e0e0 ${percentage}%)`
    console.log(percentage)
}

updateRangeBg()

let randomNumber = Math.floor(Math.random()*passwordCharacters.length)
let capitalLetters = document.querySelector("#capital-letters")
let smallLetters = document.querySelector("#small-letters")
let numbers = document.querySelector("#numbers")
let symbols = document.querySelector("#symbols")
let passwordOne = document.querySelector(".password-one")
let passwordTwo = document.querySelector(".password-two")

function updateRandomNumber(){
    randomNumber = Math.floor(Math.random()*passwordCharacters.length)
}

function addCapitalLetters() {
    updateRandomNumber()
    if(capitalLetters.checked){     
        console.log("capitalletters clicked")
        passwordCharacters.push(...capitalCharacters)
        console.log(passwordCharacters)
    } else{ 
        if(smallLetters.checked || numbers.checked || symbols.checked){
            console.log("capitalletters unclicked")
            passwordCharacters = passwordCharacters.filter(function(element){
                return capitalCharacters.indexOf(element) === -1
            })

            console.log(passwordCharacters)
        } else{
                capitalLetters.checked = true
        }
    }
}
capitalLetters.addEventListener("change", addCapitalLetters)
window.addEventListener("load", addCapitalLetters)

function addsmallLetters(){
        updateRandomNumber()
        if(smallLetters.checked){     
            console.log("smallletters clicked")
            passwordCharacters.push(...smallCharacters)
            console.log(passwordCharacters)
        } else{ 
            if(capitalLetters.checked || numbers.checked || symbols.checked){
                console.log("smallletters unclicked")
                passwordCharacters = passwordCharacters.filter(function(element){
                    return smallCharacters.indexOf(element) === -1
            })
            console.log(passwordCharacters)
            }
            else{
                smallLetters.checked = true
            }
        }
    }

smallLetters.addEventListener("change" , addsmallLetters)
window.addEventListener("load", addsmallLetters)

function addNumbers() {
    updateRandomNumber()
    if(numbers.checked){
        console.log("numbers clicked")
        passwordCharacters.push(...numberCharacters)
        console.log(passwordCharacters)
    } else{
        if(capitalLetters.checked || smallLetters.checked || symbols.checked){
            console.log("numbers unclicked")
        passwordCharacters = passwordCharacters.filter(function(element){
            return numberCharacters.indexOf(element) === -1 
        })
        console.log(passwordCharacters)
        }
        else{
            numbers.checked = true
        }
    }
}
numbers.addEventListener("change", addNumbers)
window.addEventListener("load", addNumbers)


function addSymbols(){
    updateRandomNumber()
    if(symbols.checked){
        console.log("symbols clicked")
        passwordCharacters.push(...symbolCharacters)
        console.log(passwordCharacters)
        
    } else{
        if(capitalLetters.checked || smallLetters.checked || numbers.checked){
            console.log("symbols unclicked")
            passwordCharacters = passwordCharacters.filter(function(element){
            return symbolCharacters.indexOf(element) === -1
        })
        console.log(passwordCharacters)
        } else{
        symbols.checked = true
        }
    }
}

symbols.addEventListener("change", addSymbols)
window.addEventListener("load", addSymbols)

let generatePassword = document.querySelector(".generate-password-btn")

generatePassword.addEventListener("click", function(){
    console.log(passwordCharacters)
    let randomStringsone = []
    for(i = 0; i <rangeBtn.value; i++){
        updateRandomNumber()
      randomStringsone.push(passwordCharacters[randomNumber])
    }
    passwordOne.textContent = randomStringsone.join("")
})

generatePassword.addEventListener("click", function(){
    let randomStringstwo = []
    for(i = 0; i <rangeBtn.value; i++){
        updateRandomNumber()
      randomStringstwo.push(passwordCharacters[randomNumber])
    }
    passwordTwo.textContent = randomStringstwo.join("")
})

let copyOne = document.querySelector(".copyone");
passwordOne = document.querySelector(".password-one");  // Assuming this is the element you want to copy from

copyOne.addEventListener('click', function() {
    // Check if passwordOne has content
    if (passwordOne.textContent.trim() === "") {
        alert("No password generated yet!");
        return; // Exit the function if there's no content
    }

    // Create a range and selection to copy text
    const range = document.createRange();
    range.selectNodeContents(passwordOne);  // Selects the entire content of the passwordOne element
    
    const selection = window.getSelection();
    selection.removeAllRanges(); // Clear any current selection
    selection.addRange(range); // Add the new range

    // Execute the copy command
    try {
        document.execCommand('copy');
        alert('Text copied to clipboard!');
    } catch (err) {
        alert('Failed to copy text!');
    }

    // Optionally, clear the selection after copying
    selection.removeAllRanges();
});


let copyTwo = document.querySelector(".copytwo");
passwordTwo = document.querySelector(".password-two");  // Assuming this is the element you want to copy from

copyTwo.addEventListener('click', function() {
    // Check if passwordOne has content
    if (passwordTwo.textContent.trim() === "") {
        alert("No password generated yet!");
        return; // Exit the function if there's no content
    }

    // Create a range and selection to copy text
    const range = document.createRange();
    range.selectNodeContents(passwordTwo);  // Selects the entire content of the passwordTwo element
    
    const selection = window.getSelection();
    selection.removeAllRanges(); // Clear any current selection
    selection.addRange(range); // Add the new range

    // Execute the copy command
    try {
        document.execCommand('copy');
        alert('Text copied to clipboard!');
    } catch (err) {
        alert('Failed to copy text!');
    }

    // Optionally, clear the selection after copying
    selection.removeAllRanges();
});
