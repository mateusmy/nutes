function carregarXML() {
    // Fazer uma requisição AJAX para carregar o arquivo XML
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                // Verificar se o conteúdo do arquivo XML é válido
                if (this.responseXML !== null) {
                    // Parsear o XML
                    var xmlDoc = this.responseXML;
                    // Extrair os dados dos posts
                    var posts = xmlDoc.getElementsByTagName("item");
                    var postsHTML = ""; // Variável para armazenar o HTML dos posts
                    var postsHTML2 = ""; // Variável para armazenar o HTML dos posts



                    // Iterar sobre os últimos três posts do XML e armazená-los em um array temporário invertido
                    var startIndex = Math.max(0, posts.length - 3); // Garante que não exceda o tamanho do array
                    var tempPosts = [];
                    for (var i = posts.length - 1; i >= startIndex; i--) {
                        var titulo = posts[i].getElementsByTagName("title")[0].textContent;
                        var categoria = posts[i].getElementsByTagName("category")[0].textContent;
                        var conteudoEncoded = posts[i].getElementsByTagName("content:encoded")[0].textContent;
                        var dataConteudo = posts[i].getElementsByTagName("pubDate")[0].textContent;
                        var postId = posts[i].getElementsByTagName("wp:post_id")[0].textContent;

                        // Converter a data para o formato desejado
                        var data = new Date(dataConteudo);
                        var dia = data.getDate().toString().padStart(2, '0');
                        var mes = (data.getMonth() + 1).toString().padStart(2, '0');
                        var ano = data.getFullYear();
                        var hora = data.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

                        // Formatar a data no formato DD/MM/YYYY HH:mm:ss
                        var dataFormatada = dia + '/' + mes + '/' + ano + ' ' + hora;

                        // Extrair o src da tag img dentro do conteúdo
                        var srcMatch = conteudoEncoded.match(/src="([^"]+)"/);
                        var src = srcMatch ? srcMatch[1] : ''; // src da imagem



                        // Aqui você pode processar os dados e gerar o HTML para cada post
                        var postHTML =
                            '<div class="col-md-4 section-desc" data-aos-delay="100">' +
                            '<article>' +
                            '<div class="post-img">' +
                            '<img src="' + src + '" alt="" class="img-fluid">' +  
                            '</div>' +
                            '<p class="post-category">' + categoria + '</p>' +
                            '<h2  class="title">' +
                            '<a id="line2" href="">' + titulo + '</a>' +
                            '</h2>' +
                            '<div class="row">' +
                            ' <div class="col">' +
                            ' <p class="data-more"> ' + dataFormatada + '</p>' +
                            '</div>' +
                            ' <div class="col">' +
                            '<p class="post-more"><a href="noticia.html?id=' + postId + '">Saiba mais ></a></p>' +
                            '</div>' +
                            '</div>' +
                            '</article>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</article>' +
                            '</div>';

                        tempPosts.push(postHTML); // Adiciona o HTML do post ao array temporário
                    }

                    // Inverter a ordem das postagens antes de adicioná-las ao HTML
                    postsHTML = tempPosts.join('');

                    var startIndex2 = Math.max(3, posts.length - 6); // Garante que não exceda o tamanho do array
                    var tempPosts2 = [];
                    for (var i = posts.length - 4; i >= startIndex2; i--) {
                        var titulo2 = posts[i].getElementsByTagName("title")[0].textContent;
                        var categoria2 = posts[i].getElementsByTagName("category")[0].textContent;
                        var dataConteudo2 = posts[i].getElementsByTagName("pubDate")[0].textContent;
                        // Converter a data para o formato desejado
                        var data2 = new Date(dataConteudo2);
                        var dia2 = data2.getDate().toString().padStart(2, '0');
                        var mes2 = (data2.getMonth() + 1).toString().padStart(2, '0');
                        var ano2 = data2.getFullYear();
                        var hora2 = data2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

                        // Formatar a data no formato DD/MM/YYYY HH:mm:ss
                        var dataFormatada2 = dia2 + '/' + mes2 + '/' + ano2 + ' ' + hora2;


                        // Aqui você pode processar os dados e gerar o HTML para cada post
                        var postHTML2 =
                            '<div class="col-md-4 section-desc" data-aos-delay="100">' +
                            '<article>' +
                            '<div class="post-img">' +
                            '<img src="assets/img/blog/imagem1.png" alt="" class="img-fluid">' + 
                            '</div>' +
                            '<p class="post-category">' + categoria2 + '</p>' +
                            '<h2 class="title">' +
                            '<a id="line2" href="">' + titulo2 + '</a>' +
                            '</h2>' +
                            '<div class="row">' +
                            ' <div class="col">' +
                            ' <p class="data-more">' + dataFormatada2 + ' </p>' +
                            '</div>' +
                            ' <div class="col">' +
                            '<p class="post-more"><a href="noticia.html?id=' + postId + '">Saiba mais ></a></p>' +
                            '</div>' +
                            '</div>' +
                            '</article>' +
                            '</div>' +
                            '</div>' +
                            '</div>';

                        tempPosts2.push(postHTML2);  // Adiciona o HTML do post à variável postsHTML
                    }
                    // Inverter a ordem das postagens antes de adicioná-las ao HTML
                    postsHTML2 = tempPosts2.join('');

                    // Adiciona o HTML dos posts à div com class "carousel-inner"
                    document.querySelector(".adicionar-conteudo").innerHTML = postsHTML;
                    document.querySelector(".adicionar-conteudo2").innerHTML = postsHTML2;


                }
                // Iterar sobre os últimos três posts do XML


                else {
                    // Exibir uma mensagem de erro se o conteúdo do arquivo XML for inválido
                    document.getElementById("posts").innerHTML = "<p>Erro ao carregar o conteúdo do arquivo XML.</p>";
                    console.log("Erro ao carregar o conteúdo do arquivo XML");
                }
            } else {
                // Exibir uma mensagem de erro se houver um erro ao carregar o arquivo XML
                document.getElementById("posts").innerHTML = "<p>Erro ao carregar o arquivo XML.</p>";
                console.log("Erro ao carregar o conteúdo do arquivo XML");
            }
        }
    };

    // // Especificar o caminho do arquivo XML
    xhttp.open("GET", "noticias/not.xml", false); // Verifique se o caminho do arquivo XML está correto
    xhttp.send();
    // Especificar o caminho do arquivo XML via link

}



// Chamar a função quando a página for carregada
window.onload = function () {
    // carregarXMLFixadas();
    carregarXML();
};

// Extrai o ID da URL
var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');

// Verifica se o ID foi passado na URL
if (id) {
    // Chama a função para carregar o XML com o ID fornecido
    carregarXMLPorID(id);
} else {
    console.error("ID não fornecido na URL.");
}

function carregarXMLPorID(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var posts = xmlDoc.getElementsByTagName("item");
            var postEncontrado = false;

            for (var i = 0; i < posts.length; i++) {
                var postId = posts[i].getElementsByTagName("wp:post_id")[0].textContent;

                // Verifica se o ID do post corresponde ao ID fornecido
                if (postId === id) {
                    postEncontrado = true;

                    var titulo = posts[i].getElementsByTagName("title")[0].textContent;
                    var autor = posts[i].getElementsByTagName("dc:creator")[0].textContent;
                    var dataConteudo = posts[i].getElementsByTagName("pubDate")[0].textContent;
                    var conteudoCompleto = posts[i].getElementsByTagName("content:encoded")[0].textContent;

                    // Converter a data para o formato desejado
                    var data = new Date(dataConteudo);
                    var dia = data.getDate().toString().padStart(2, '0');
                    var mes = (data.getMonth() + 1).toString().padStart(2, '0');
                    var ano = data.getFullYear();
                    var hora = data.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

                    // Formatar a data no formato DD/MM/YYYY HH:mm:ss
                    var dataFormatada = dia + '/' + mes + '/' + ano + ' ' + hora;

                    // Remove todas as tags HTML do conteúdo
                    var conteudo1 = conteudoCompleto.replace(/<[^>]+>/g, '');

                    // Divide o conteúdo em duas partes: os primeiros 300 caracteres e o restante
                    var limiteDeCaracteres = 849;
                    var conteudo = conteudo1.slice(0, limiteDeCaracteres);

                    var conteudoContinuacao = conteudo1.slice(limiteDeCaracteres);
                    console.log(conteudoContinuacao)
                    // Exibe os dados obtidos do XML na página
                    document.getElementById("titulo").innerText = titulo;
                    document.getElementById("autor").innerHTML = "<span class='autor'>Postado por " + autor + "</span>"; // Adicionando "Postado por" antes do nome do autor
                    document.getElementById("data").innerText = dataFormatada;
                    document.getElementById("conteudo").innerText = conteudo.replace(/(\r\n|\n|\r)/gm, "");

                    document.getElementById("conteudo-continuacao").innerText = conteudoContinuacao;

                    // Pare o loop após encontrar o post correspondente
                    break;
                }
            }

            // Verifica se o post foi encontrado
            if (!postEncontrado) {
                console.error("Post com o ID fornecido não encontrado.");
            }
        }
    };

    xhttp.open("GET", "noticias/not.xml", true);
    xhttp.send();
}



