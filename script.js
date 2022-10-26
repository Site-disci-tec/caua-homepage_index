function validar() {
    var n1 = document.getElementById("inputtext").value;
    var n2 = document.getElementById("inputemail").value;
    var nota = document.getElementById("inputnum").value;
    var opc = document.getElementById("formselect").value;

    if (n1=="") {
        document.getElementById("inputtext").focus();
        document.getElementById("inputtext").style.backgroundColor="#f00";
        window.alert("preencha este campo");
        return false;
    }
    else{
        document.getElementById("inputtext");
        document.getElementById("inputtext").style.backgroundColor="#8f6ec7";
    }
    if(n2=="") {
        document.getElementById("inputemail").style.backgroundColor="#f00";
        document.getElementById("inputemail").focus();
        window.alert("digite o email");
        return false;
        
       
    }
    else{
        document.getElementById("inputemail");
        document.getElementById("inputemail").style.backgroundColor="#8f6ec7";
    }
    if(nota<0 || nota>7 || nota=="") {
        document.getElementById("inputnum").style.backgroundColor="#8f6ec7";
        document.getElementById("inputnum").focus();
        window.alert("dados inválidos");
        return false;
    }

}   

function clicar1() {
    if(document.getElementById("radmf").checked) {
        document.getElementById("radf").checked = false
        document.getElementById("radc").checked = false
        document.getElementById("radmc").checked = false
    }
    else{
        document.getElementById("radmf").checked = false
    }
}
    function clicar2() {
        if(document.getElementById("radf").checked) {
            document.getElementById("radmf").checked = false
            document.getElementById("radc").checked = false
            document.getElementById("radmc").checked = false
        }
        else{
            document.getElementById("radf").checked = false
        }
    
}
function clicar3() {
    if(document.getElementById("radc").checked) {
        document.getElementById("radmf").checked = false
        document.getElementById("radf").checked = false
        document.getElementById("radmc").checked = false
    }
    else{
        document.getElementById("radc").checked = false
    }

}

function clicar4() {
    if(document.getElementById("radmc").checked) {
        document.getElementById("radmf").checked = false
        document.getElementById("radc").checked = false
        document.getElementById("radmf").checked = false
    }
    else{
        document.getElementById("radmc").checked = false
    }

}

function clicar5() {
    if(document.getElementById("rad1").checked) {
        document.getElementById("rad2").checked = false
        document.getElementById("rad3").checked = false
        document.getElementById("radm4").checked = false
    }
    else{
        document.getElementById("rad1").checked = false
    }
}
    function clicar6() {
        if(document.getElementById("rad2").checked) {
            document.getElementById("rad1").checked = false
            document.getElementById("rad3").checked = false
            document.getElementById("rad4").checked = false
        }
        else{
            document.getElementById("rad2").checked = false
        }
    
}
function clicar7() {
    if(document.getElementById("rad3").checked) {
        document.getElementById("rad1").checked = false
        document.getElementById("rad2").checked = false
        document.getElementById("radm4").checked = false
    }
    else{
        document.getElementById("rad3").checked = false
    }

}

function clicar8() {
    if(document.getElementById("rad4").checked) {
        document.getElementById("rad1").checked = false
        document.getElementById("rad2").checked = false
        document.getElementById("rad3").checked = false
    }
    else{
        document.getElementById("rad4").checked = false
    }

}

function clicar9() {
    if(document.getElementById("rad5").checked) {
        document.getElementById("rad6").checked = false
        document.getElementById("rad7").checked = false
        document.getElementById("radm8").checked = false
    }
    else{
        document.getElementById("rad5").checked = false
    }
}
    function clicar10() {
        if(document.getElementById("rad6").checked) {
            document.getElementById("rad5").checked = false
            document.getElementById("rad7").checked = false
            document.getElementById("rad8").checked = false
        }
        else{
            document.getElementById("rad6").checked = false
        }
    
}
function clicar11() {
    if(document.getElementById("rad7").checked) {
        document.getElementById("rad5").checked = false
        document.getElementById("rad6").checked = false
        document.getElementById("radm8").checked = false
    }
    else{
        document.getElementById("rad7").checked = false
    }

}

function clicar12() {
    if(document.getElementById("rad8").checked) {
        document.getElementById("rad5").checked = false
        document.getElementById("rad6").checked = false
        document.getElementById("rad7").checked = false
    }
    else{
        document.getElementById("rad8").checked = false
    }

}

function clicar13() {
    if(document.getElementById("rad9").checked) {
        document.getElementById("rad10").checked = false
        document.getElementById("rad11").checked = false
        document.getElementById("radm12").checked = false
    }
    else{
        document.getElementById("rad9").checked = false
    }
}
    function clicar14() {
        if(document.getElementById("rad10").checked) {
            document.getElementById("rad9").checked = false
            document.getElementById("rad11").checked = false
            document.getElementById("rad12").checked = false
        }
        else{
            document.getElementById("rad10").checked = false
        }
    
}
function clicar15() {
    if(document.getElementById("rad11").checked) {
        document.getElementById("rad9").checked = false
        document.getElementById("rad10").checked = false
        document.getElementById("radm12").checked = false
    }
    else{
        document.getElementById("rad11").checked = false
    }

}

function clicar16() {
    if(document.getElementById("rad12").checked) {
        document.getElementById("rad9").checked = false
        document.getElementById("rad10").checked = false
        document.getElementById("rad11").checked = false
    }
    else{
        document.getElementById("rad12").checked = false
    }

}

function clicar17() {
    if(document.getElementById("rad13").checked) {
        document.getElementById("rad14").checked = false
        document.getElementById("rad15").checked = false
        document.getElementById("radm16").checked = false
    }
    else{
        document.getElementById("rad13").checked = false
    }
}
    function clicar18() {
        if(document.getElementById("rad14").checked) {
            document.getElementById("rad13").checked = false
            document.getElementById("rad15").checked = false
            document.getElementById("rad16").checked = false
        }
        else{
            document.getElementById("rad14").checked = false
        }
    
}
function clicar19() {
    if(document.getElementById("rad15").checked) {
        document.getElementById("rad13").checked = false
        document.getElementById("rad14").checked = false
        document.getElementById("radm16").checked = false
    }
    else{
        document.getElementById("rad15").checked = false
    }

}

function clicar20() {
    if(document.getElementById("rad16").checked) {
        document.getElementById("rad13").checked = false
        document.getElementById("rad14").checked = false
        document.getElementById("rad15").checked = false
    }
    else{
        document.getElementById("rad16").checked = false
    }

}


