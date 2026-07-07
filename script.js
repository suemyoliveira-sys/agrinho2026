```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Agro Forte — soluções sustentáveis para o agronegócio. Tecnologia, conservação e futuro." />
<title>Agro Forte, Futuro Sustentável</title>

<style>
/* ==========================================================================
   CSS embutido: style.css consolidado
   ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Skip link (acessibilidade) */
.skip-link {
    position: absolute;
    left: -9999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
.skip-link:focus {
    left: 10px;
    top: 10px;
    width: auto;
    height: auto;
    padding: 8px 12px;
    background: #fff;
    color: #2c5e3b;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.12);
    z-index: 2000;
    text-decoration: none;
}

/* Texto apenas para leitores de tela */
.sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0,0,0,0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}

/* Global */
html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;
    padding-top: 70px; /* Compensa o header fixo */
}

/* Foco acessível */
a:focus, button:focus, input:focus, textarea:focus {
    outline: 3px solid rgba(76, 175, 80, 0.25);
    outline-offset: 3px;
    border-radius: 4px;
}

/* Listas */
ul {
    list-style: none;
}

/* Seções */
section {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

section h2 {
    font-size: 2rem;
    color: #2c5e3b;
    margin-bottom: 20px;
    position: relative;
}

section h2::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #4caf50;
    margin: 10px auto 0 auto;
    border-radius: 2px;
}

/* HEADER */
header {
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    gap: 10px;
}

header .logo {
    font-size: 1.4rem;
    font-weight: bold;
    color: #2c5e3b;
}

header nav[role="navigation"] ul {
    display: flex;
    gap: 20px;
    align-items: center;
}

header nav ul li a {
    font-weight: 500;
    color: #555;
    transition: color 0.3s ease, transform 0.15s ease;
}

header nav ul li a:hover,
header nav ul li a:active {
    color: #4caf50;
    transform: translateY(-2px);
}

/* BANNER */
.banner {
    background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
                url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    max-width: 100%;
    padding: 0 20px;
    text-align: center;
}

.banner h1 {
    font-size: 3rem;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
}

.banner p {
    font-size: 1.3rem;
    margin-bottom: 30px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}

/* Botões */
.btn {
    background-color: #4caf50;
    color: white;
    padding: 12px 30px;
    border-radius: 25px;
    font-weight: bold;
    transition: background 0.3s ease, transform 0.2s ease;
    border: none;
    cursor: pointer;
}

.btn:hover {
    background-color: #388e3c;
    transform: translateY(-2px);
}

/* ESTRUTURA DOS CARDS */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 40px;
}

.card {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-top: 4px solid #4caf50;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: left;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

.card h3 {
    color: #333;
    margin-bottom: 15px;
    font-size: 1.4rem;
}

.card p {
    color: #666;
    font-size: 0.95rem;
}

/* Customização para a seção de Desafios */
#desafios .card {
    border-top-color: #d84315;
}

/* SUSTENTABILIDADE & QUIZ */
#sustentabilidade {
    background-color: #edf7ed;
    max-width: 100%;
}

#sustentabilidade p {
    font-size: 1.1rem;
    margin-bottom: 30px;
}

#sustentabilidade ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

#sustentabilidade ul li {
    background: #fff;
    padding: 15px 25px;
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    font-weight: 500;
}

/* Quiz - padronizei com .quiz-btn */
#quiz {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 30px;
}

#quiz p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.quiz-btn,
#quiz button {
    background-color: #f1f1f1;
    border: 2px solid #ccc;
    color: #333;
    padding: 10px 20px;
    margin: 10px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.quiz-btn:hover,
#quiz button:hover {
    background-color: #2c5e3b;
    color: white;
    border-color: #2c5e3b;
}

#resultado {
    margin-top: 15px;
    font-weight: bold;
    font-size: 1.1rem;
}

/* CONTATO & FORMULÁRIO */
#contato {
    background-color: #f0f4f1;
    max-width: 100%;
}

#contato form {
    max-width: 600px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

#contato label {
    display: block;
    font-size: 0.95rem;
    margin-bottom: 6px;
    color: #333;
}

#contato input,
#contato textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
}

#contato input:focus,
#contato textarea:focus {
    border-color: #4caf50;
}

#contato textarea {
    height: 120px;
    resize: vertical;
}

#contato button[type="submit"] {
    background-color: #2c5e3b;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

#contato button[type="submit"]:hover {
    background-color: #1e3f28;
}

#contato h3 {
    font-weight: 500;
    color: #555;
    margin-top: 30px;
    font-style: italic;
}

/* FOOTER */
footer {
    background-color: #2c5e3b;
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 0.9rem;
}

/* RESPONSIVIDADE */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        gap: 10px;
        text-align:
