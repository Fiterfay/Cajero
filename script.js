// Cuentas y contraseñas
const accounts = [
    { id: 1, password: '1234', balance: 200 },
    { id: 2, password: '5678', balance: 290 },
    { id: 3, password: '9012', balance: 67 }
];

let selectedAccount = null;

function login() {
    const accountId = document.getElementById('account').value;
    const password = document.getElementById('password').value;

    const account = accounts.find(acc => acc.id === parseInt(accountId));

    if (account && account.password === password) {
        selectedAccount = account;
        document.getElementById('login').style.display = 'none';
        document.getElementById('accountSelection').style.display = 'block';
        document.getElementById('error').textContent = '';
    } else {
        document.getElementById('error').textContent = 'Credenciales incorrectas. Por favor, intente nuevamente.';
    }
}

function consultarSaldo() {
    document.getElementById("balance").innerHTML = "Saldo disponible: $" + selectedAccount.balance;
  }
  
  function retirarSaldo() {
    const montoRetiro = parseInt(document.getElementById("monto-retiro").value);
  
    if (montoRetiro > 0 && montoRetiro <= selectedAccount.balance) {
      selectedAccount.balance -= montoRetiro;
      document.getElementById("balance").innerHTML = "Se han retirado: $" + montoRetiro;
    } else {
      document.getElementById("balance").innerHTML = "Saldo insuficiente";
    }
  }
  
  function ingresarSaldo() {
    const montoIngreso = parseInt(document.getElementById("monto-ingreso").value);
    
    if (montoIngreso > 0) {
      selectedAccount.balance += montoIngreso;
      document.getElementById("balance").innerHTML = "Se han depositado: $" + montoIngreso;
    } else {
      document.getElementById("balance").innerHTML = "Monto inválido.";
    }
  }
  