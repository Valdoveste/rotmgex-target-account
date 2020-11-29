const checkbox = document.getElementById("btn-show-pass");
const btnTarget = document.getElementById("btn-target");

checkbox.addEventListener("change", (event) =>{
    let passwordInput = document.getElementsByTagName("input")[4]; 
    let svgEye = document.getElementsByTagName("svg");

    switch(checkbox.checked){
        case true:
            passwordInput.type="text";
            showEye(0,1)
            break;
        case false:
            passwordInput.type="password";
            showEye(1,0)
        break;
    }
    
    function showEye(x,y){
        svgEye[x].style.display="flex"
        svgEye[y].style.display="none"
    }
});

var finalString = document.getElementById("string-base64");
const btnCopy = document.getElementById("copy-to-clipboard");

btnCopy.addEventListener("click", copyEvent => {
    finalString.select();
    document.execCommand("copy");
});
  

btnTarget.addEventListener("click", event =>{
    let reqInputs = document.getElementsByClassName("required-inputs");

    const filePath = String.raw `C:\Users\Usuario\Documents\RealmOfTheMadGod\Production\RotMG Exalt.exe`;

    var repLocal = filePath.replace("C", reqInputs[0].value);
    var repUser = repLocal.replace("Usuario", reqInputs[1].value);
    
    console.log(repUser);
    finalString.value = '"'+ repUser +'" '+ '"'+ "data:{platform:Deca,password:"+btoa(reqInputs[3].value)+",guid:"+btoa(reqInputs[2].value)+",env:4}"+ '"';
});