const cuentas = [ 
    { nombre: "Abigail", saldo: 300, password: 'Abimmgail'},
    { nombre: "Ingrid", saldo: 500, password: 'IngridRules'},
    { nombre: "Miriam", saldo: 400, password: 'Miri666'}
] 


let i=0

//Elección de cuentas

function Cuenta1(){
    i=0
}

function Cuenta2(){
    i=1
    console.log(i)
}

function Cuenta3(){
    i=2
    console.log(i)
}

//Parámetros de ingreso y alerta de contraseña inválida

function Ingresar(){
    const password = document.getElementById("contraseña").value
    if(password === cuentas[i].password){
        window.location.href = "indexDos.html"

    }else{
        document.getElementById("error").innerHTML = "Contraseña incorrecta, revise sus datos y vuelva a ingresar"  
    }
}

//Operaciones del cajero automático

function Saldo(){
    document.getElementById("saldo").innerHTML = "Tu saldo es de $ " + cuentas[i].saldo + " MXN"
}

function Depositar(){
    const sumaDeposito = document.getElementById("depósito").value
    let suma = parseInt(sumaDeposito) + cuentas[i].saldo
   
    if(suma > 990){
        document.getElementById("alertaDeposito").innerHTML = "No se puede proceder a realizar tu depósito, realiza nuevamente la operación"
        suma = 0
    }else{
        document.getElementById("depósito").style.display = 'none';
        document.getElementById("btnDeposito").style.display = 'none';
        document.getElementById("alertaDeposito").innerHTML = "Cantidad ingresada: $ " + sumaDeposito + " MXN " + "Saldo actual: $ " + suma + "MXN"
    }
}

function Retirar(){
    const restaRetiro = document.getElementById("retiro").value
    let resta= cuentas[i].saldo - parseInt(restaRetiro)
    
    if(resta < 10){
        document.getElementById("alertaRetiro").innerHTML = "No se puede proceder a realizar tu retiro, revisa nuevamente tu saldo"
    }else{
        document.getElementById("retiro").style.display = 'none';
        document.getElementById("btnRetiro").style.display = 'none';
        document.getElementById("alertaRetiro").innerHTML = "Cantidad retirada: $ " + restaRetiro + " MXN " + "Saldo actual: $ " + resta + "MXN"
    }
}

//Redirección a páginas de depósito y retiro

function Pagedepositar(){
    window.location.href = "depositar.html"
}

function Pageretirar(){
    window.location.href = "retirar.html"
}

