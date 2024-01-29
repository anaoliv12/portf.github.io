<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $celular = $_POST['celular'];
    $mensagem = $_POST['mensagem'];

    $destinatario = "santos.developer8877@gmail.com"; // Substitua pelo seu endereço de e-mail

    $assunto = "Nova mensagem do formulário de contato";

    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "E-mail: $email\n";
    $corpo_email .= "Celular: $celular\n\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    mail($destinatario, $assunto, $corpo_email);

    // Redirecionar para uma página de agradecimento ou qualquer outra página após o envio
    header("Location: obrigado.html");
}
?>
