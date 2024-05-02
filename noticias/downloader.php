<?php
// URL do arquivo XML a ser baixado
$url = "https://nutes.uepb.edu.br/wp-admin/export.php?download=true";

// Nome do arquivo XML
$filename = "noticias.xml";

// Diretório de destino para salvar o arquivo XML
$targetDir = "noticias/";

// Realiza o download do arquivo XML
$fileContents = file_get_contents($url);

// Salva o arquivo XML no diretório de destino
file_put_contents($targetDir . $filename, $fileContents);

echo "Download concluído com sucesso!";
