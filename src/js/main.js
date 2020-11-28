const checkbox = document.getElementById("btn-show-pass");

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
