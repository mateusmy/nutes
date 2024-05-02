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
                    var link = posts[i].getElementsByTagName("link")[0].textContent;
                    var dataConteudo = posts[i].getElementsByTagName("pubDate")[0].textContent;
                    var autor = posts[i].getElementsByTagName("dc:creator")[0].textContent;
                    var conteudo = posts[i].getElementsByTagName("content:encoded")[0].textContent;

                    // Limita o conteúdo a 7 linhas e adiciona [...]
                    var limiteDeCaracteres = 800; // Ajuste esse valor conforme necessário  
                    var conteudoLimitado = conteudo.slice(0, limiteDeCaracteres);
                    if (conteudo.length > limiteDeCaracteres) {
                        conteudoLimitado += ' [...]';
                    }

                    var data = new Date(dataConteudo);
                    var dia = data.getDate().toString().padStart(2, '0');
                    var mes = (data.getMonth() + 1).toString().padStart(2, '0');
                    var ano = data.getFullYear();
                    var hora = data.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                    var dataFormatada = dia + '/' + mes + '/' + ano + ' ' + hora;

                    var postHTML =
                        '<div class="adicionar-conteudo3">' +
                        '<img src="/assets/img/noticias/imagem2.png" class="card-img-top" alt="...">' +
                        '<div class="card-body card-back">' +
                        '<h4 class="card-title"><strong>' + titulo + '</strong></h4>' +
                        '<p class=""><small class="text-muted">Por ' + autor + '</small></p>' +
                        '<p class=""><small class="text-muted">' + dataFormatada + '</small></p>' +
                        '<p class="card-text-noticias">' + conteudoLimitado + '</p>' + // Usando o conteúdo limitado  
                        '<p class="justify-self-end btn-noticias back-services2 me-3 mb-2 mt-3"><a href="noticia.html?id=' + postId + '" class="btn-cardS">+ SAIBA MAIS</a></p>' +
                        '</div>' +
                        '</div>';

                    document.querySelector(".adicionar-conteudo3").innerHTML = postHTML;

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


function carregarXMLPorID2(id) {
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
                    var link = posts[i].getElementsByTagName("link")[0].textContent;
                    var dataConteudo = posts[i].getElementsByTagName("pubDate")[0].textContent;
                    var autor = posts[i].getElementsByTagName("dc:creator")[0].textContent;
                    var conteudo = posts[i].getElementsByTagName("content:encoded")[0].textContent;

                    // Limita o conteúdo a 7 linhas e adiciona [...]
                    var limiteDeCaracteres = 800; // Ajuste esse valor conforme necessário  
                    var conteudoLimitado = conteudo.slice(0, limiteDeCaracteres);
                    if (conteudo.length > limiteDeCaracteres) {
                        conteudoLimitado += ' [...]';
                    }



                    var data = new Date(dataConteudo);
                    var dia = data.getDate().toString().padStart(2, '0');
                    var mes = (data.getMonth() + 1).toString().padStart(2, '0');
                    var ano = data.getFullYear();
                    var hora = data.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                    var dataFormatada = dia + '/' + mes + '/' + ano + ' ' + hora;

                    var postHTML =
                        '<div class="adicionar-conteudo3">' +
                        '<img src="/assets/img/noticias/imagem2.png" class="card-img-top" alt="...">' +
                        '<div class="card-body card-back">' +
                        '<h4 class="card-title"><strong>' + titulo + '</strong></h4>' +
                        '<p class=""><small class="text-muted">Por ' + autor + '</small></p>' +
                        '<p class=""><small class="text-muted">' + dataFormatada + '</small></p>' +
                        '<p class="card-text-noticias">' + conteudoLimitado + '</p>' + // Usando o conteúdo limitado  
                        '<p class="justify-self-end btn-noticias back-services2 me-3 mb-2 mt-3"><a href="noticia.html?id=' + postId + '" class="btn-cardS">+ SAIBA MAIS</a></p>' +
                        '</div>' +
                        '</div>';

                    document.querySelector(".adicionar-conteudo4").innerHTML = postHTML;

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

// Fornecer o ID do post desejado/fixado 
var idDoPost = "1866";
carregarXMLPorID(idDoPost);
var idDoPost2 = "1871";
carregarXMLPorID2(idDoPost2);
carregarUltimasNoticias();

function carregarUltimasNoticias() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var posts = xmlDoc.getElementsByTagName("item");

            // Invertendo a ordem dos posts
            var postsInvertidos = [];
            for (var i = posts.length - 1; i >= 0; i--) {
                postsInvertidos.push(posts[i]);
            }

            // Seleciona a lista onde as notícias serão adicionadas
            var listaNoticias = document.querySelector(".list-group");

            // Limpa a lista antes de adicionar as novas notícias
            listaNoticias.innerHTML = "";

            // Itera sobre os últimos 10 posts já invertidos
            for (var i = 0; i < Math.min(postsInvertidos.length, 10); i++) {
                var titulo = postsInvertidos[i].getElementsByTagName("title")[0].textContent;
                var dataConteudo = postsInvertidos[i].getElementsByTagName("pubDate")[0].textContent;

                // Formata a data
                var data = new Date(dataConteudo);
                var dia = data.getDate().toString().padStart(2, '0');
                var mes = (data.getMonth() + 1).toString().padStart(2, '0');
                var ano = data.getFullYear();

                // Cria um novo item de lista para a notícia
                var listItem = document.createElement("li");
                listItem.classList.add("list-group-item", "mb-4");

                // Define o ID da notícia como um atributo de dados do item da lista
                var postId = postsInvertidos[i].getElementsByTagName("wp:post_id")[0].textContent;
                listItem.dataset.idNoticia = postId;

                const larguraTela = window.innerWidth;
                // const alturaTela = window.innerHeight;


                if (larguraTela >= 768 && larguraTela <= 1440) {
                    var limiteDeCaracteres2 = 60; // Ajuste esse valor conforme necessário         
                    var titulo = titulo.slice(0, limiteDeCaracteres2);
                    titulo += '...';
                }


                // Adiciona o título e a data formatada ao item da lista
                listItem.innerHTML = '<strong>' + (i + 1) + ' - ' + titulo + '</strong> | ' + dia + ' de ' + obterNomeDoMes(mes) + ' de ' + ano;

                // Adiciona um evento de clique para redirecionar para a página noticia.html
                listItem.addEventListener('click', function () {
                    // Obtém o ID da notícia clicada
                    var idNoticia = this.dataset.idNoticia;
                    // Redireciona para a página noticia.html passando o ID da notícia pela URL
                    window.location.href = 'noticia.html?id=' + idNoticia;
                });

                // Adiciona o item da lista à lista de notícias
                listaNoticias.appendChild(listItem);
            }
        }
    };

    xhttp.open("GET", "noticias/not.xml", true);
    xhttp.send();
}

// Função para obter o nome do mês a partir de seu número
function obterNomeDoMes(numeroDoMes) {
    var nomesDosMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return nomesDosMeses[parseInt(numeroDoMes) - 1];
}



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
                            '<a id="line2" href="noticia.html?id=' + postId + '">' + titulo2 + '</a>' +
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

function carregarXMLMobile() {
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




                    // Iterar sobre os últimos três posts do XML e armazená-los em um array temporário invertido
                    var startIndex = Math.max(0, posts.length - 1);   // Garante que não exceda o tamanho do array
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
                            '<img src="assets/img/blog/imagem1.png" alt="" class="img-fluid">' + 
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



                    // Adiciona o HTML dos posts à div com class "carousel-inner"
                    document.querySelector(".adicionar-conteudoMobile").innerHTML = postHTML; 



                }



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



//Chamar a função quando a página for carregada 
window.onload = function () {
    // Função para verificar a largura da tela e carregar o conteúdo apropriado
    function verificarLarguraTela() {
        const larguraTela = window.innerWidth;

        if (larguraTela <= 767) {
            carregarXMLMobile();
            console.log("mobile")
        } else {
            carregarXML();
            console.log("notebook")
        }
    }

    // Chamar a função inicialmente ao carregar a página
    verificarLarguraTela();

    // Adicionar um ouvinte de evento de redimensionamento da janela para verificar continuamente se a largura da tela mudou
    window.addEventListener('resize', verificarLarguraTela);
};
// window.onload = function () {
//     const whySection = document.getElementById('why');
//     observer.observe(whySection);
//     carregarXML();
// }; 






