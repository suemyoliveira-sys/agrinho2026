function resposta(tipo){

    const resultado = document.getElementById("resultado");

    if(tipo === "certo"){
        resultado.innerHTML =
        "✅ Correto! A irrigação inteligente reduz o desperdício de água.";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML =
        "❌ Incorreto. Sistemas de irrigação inteligentes ajudam a economizar água.";
        resultado.style.color = "red";
    }
}
