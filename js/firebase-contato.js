import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBJYK5t9icWafVMrXJsBtOtQHMtpKcGJ-U",
    authDomain: "cineserra-9bca4.firebaseapp.com",
    projectId: "cineserra-9bca4",
    storageBucket: "cineserra-9bca4.appspot.com",
    messagingSenderId: "915111612570",
    appId: "1:915111612570:web:66cafbf24792fd32ae8f23"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("contatoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    set(ref(db, "mensagens/" + nome), {
        nome: nome,
        email: email,
        mensagem: mensagem,
        data: new Date().toISOString()
    })
        .then(() => {
            document.getElementById("mensagemSucesso").classList.remove("d-none");
            document.getElementById("contatoForm").reset();
        })
        .catch((error) => {
            alert("Erro ao enviar mensagem: " + error.message);
            console.error(error);
        });
});