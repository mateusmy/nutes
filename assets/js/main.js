/**
* Template Name: Arsha
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });





  const navItems = document.querySelectorAll('#side-menu li a');
  const sections = document.querySelectorAll('section');
  const footer = document.querySelector('footer');

  function setActiveClass(index) {
    for (let j = 0; j < navItems.length; j++) {
      navItems[j].classList.remove('active');
    }

    for (let j = 0; j < sections.length; j++) {
      sections[j].classList.remove('active');
    }

    navItems[index].classList.add('active');
    sections[index].classList.add('active');
  }

  function handleScroll() {
    let currentPosition = window.scrollY + 100;

    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].offsetTop;
      const sectionHeight = sections[i].offsetHeight;
      const threshold = 150;

      if (currentPosition >= sectionTop - threshold && currentPosition < sectionTop + sectionHeight) {
        setActiveClass(i);
      }
    }

    const footerTop = footer.offsetTop;
    const footerHeight = footer.offsetHeight;

    // Ajuste o valor 50 conforme necessário para aumentar ou diminuir o deslocamento
    if (currentPosition >= footerTop - window.innerHeight + 500 && currentPosition < footerTop + footerHeight) {
      document.getElementById('side-menu').classList.add('hidden');
    } else {
      document.getElementById('side-menu').classList.remove('hidden');
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Adicione click event listener a cada item de navegação
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      const targetPosition = targetSection.offsetTop;

      // Adicione um pequeno deslocamento para baixo (por exemplo, 20 pixels)
      const offset = 120;
      const adjustedPosition = targetPosition - offset;

      // Scroll to the target section
      window.scrollTo({
        top: adjustedPosition,
        behavior: 'smooth'
      });

      // Set 'active' class for the clicked item and section
      setActiveClass(i);
    });
  }

  // Adicione a função para rolar para o topo e marcar a primeira seção como ativa ao carregar a página
  function scrollToTopAndSetFirstSectionActive() {
    // Rola a página para o topo no carregamento
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });

    // Adicione 'active' ao primeiro item de navegação e à primeira seção
    setActiveClass(0);
  }

  // Chame a função ao carregar a página
  document.addEventListener('DOMContentLoaded', scrollToTopAndSetFirstSectionActive);



  function getOffsetTop(element) {
    let offsetTop = 0;
    while (element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }
    return offsetTop;
  }

  function updateMenuPosition() {
    const cta2Section = document.getElementById('cta2Lab'); // Altere o ID para ser exclusivo
    const sideMenu = document.getElementById('side-menu2Lab'); // Altere o ID para ser exclusivo
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Altura que o menu irá subir gradualmente
    const larguraTela = window.innerWidth;
    var gradualHeight = 450;

    if (larguraTela >= 768 && larguraTela <= 1440) {
      console.log("e")
      gradualHeight = 330;
    }

    // const gradualHeight = 450;    

    // Calcula a altura de deslocamento para suavizar o movimento do menu
    const displacement = Math.min(scrollTop, gradualHeight);

    if (scrollTop > getOffsetTop(cta2Section)) {
      sideMenu.style.transform = `translateY(-${displacement}px)`;
      sideMenu.classList.add('fixed-menu');
    } else {
      sideMenu.style.transform = 'translateY(0)';
      sideMenu.classList.remove('fixed-menu');
    }

    // Adicionar lógica para marcar o item de menu ativo aqui
    const sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].offsetTop;
      const sectionHeight = sections[i].offsetHeight;
      const threshold = 150;

      if (scrollTop >= sectionTop - threshold && scrollTop < sectionTop + sectionHeight) {
        const menuLinksLab = document.querySelectorAll('#side-menu2Lab a');
        menuLinksLab.forEach(link => {
          link.classList.remove('active');
        });

        const activeLink = document.querySelector(`#side-menu2Lab a[href="#${sections[i].id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    }

    // Lógica para esconder sideMenu quando chegar ao rodapé
    const footer = document.querySelector('footer');
    const footerTop = footer.offsetTop;
    const footerHeight = footer.offsetHeight;
    const windowHeight = window.innerHeight;

    if (scrollTop >= footerTop - windowHeight + 500 && scrollTop < footerTop + footerHeight) {
      sideMenu.classList.add('hidden');
    } else {
      sideMenu.classList.remove('hidden');
    }
  }


  function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);

    // Ajuste esta variável conforme necessário
    const offset = 70;

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  window.addEventListener('scroll', updateMenuPosition);

  (function () {
    const menuLinksLab = document.querySelectorAll('#side-menu2Lab a');
    menuLinksLab.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        smoothScroll(targetId);

        // Atualizar a classe 'active' para o item clicado
        menuLinksLab.forEach(link => {
          link.classList.remove('active');
        });

        link.classList.add('active');
      });
    });
  })();



  $(document).ready(function () {
    $('.btn').on('click', function () {
      //Fecha todos os outros collapses
      $('.collapse').not($(this).data('bs-target')).collapse('hide');

      //Remove a seta de todos os botões
      $('.btn').removeClass('active');

      //Adiciona a seta apenas ao botão clicado
      $(this).addClass('active');
    });
  });

  // $(document).ready(function () {
  //   $('.btn').on('click', function () {
  //     // Fecha todos os outros collapses
  //     $('.collapse').not($(this).data('bs-target')).collapse('hide');

  //     // Remove a seta de todos os botões
  //     $('.btn').removeClass('active');

  //     // Adiciona a seta apenas ao botão clicado
  //     $(this).addClass('active');
  //   });

  //   // Adiciona um ouvinte de evento para o evento 'show.bs.collapse'
  //   $('.collapse').on('show.bs.collapse', function () {
  //     // Adiciona classes do Bootstrap para controle de transição (fade)
  //     $(this).addClass('show');
  //     $(this).removeClass('collapsing');
  //     $(this).addClass('collapse');
  //   });

  //   // Adiciona um ouvinte de evento para o evento 'hide.bs.collapse'
  //   $('.collapse').on('hide.bs.collapse', function () {
  //     // Adiciona classes do Bootstrap para controle de transição (fade)
  //     $(this).removeClass('show');
  //     $(this).addClass('collapsing');
  //     $(this).removeClass('collapse');
  //   });
  // });

  // função da animação dos números

  function countAnimation(target, end, duration) {
    let current = 0;
    const range = end - current;
    const increment = range / (duration / 16); // Ajuste este valor para alterar a velocidade
    const timer = setInterval(() => {
      current += increment;
      document.getElementById(target).innerText = Math.round(current);
      if (current >= end) {
        clearInterval(timer);
        document.getElementById(target).innerText = end; // Garante que o número final seja exato
      }
    }, 16);
  }

  function countAnimationWithMillions(target, end, duration) {
    let current = 0;
    const range = end - current;
    const increment = range / (duration / 16); // Ajuste este valor para alterar a velocidade
    const timer = setInterval(() => {
      current += increment;
      if (current >= 1000000) {
        document.getElementById(target).innerText = '+ DE 2 MILHÕES';
        clearInterval(timer);
      } else {
        document.getElementById(target).innerText = Math.round(current);
        if (current >= end) {
          clearInterval(timer);
          document.getElementById(target).innerText = end; // Garante que o número final seja exato
        }
      }
    }, 16);
  }

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        countAnimation('count1', 1500, 1000);
        countAnimation('count2', 200, 1000);
        countAnimation('count3', 5000, 1000);
        countAnimationWithMillions('countMillions', 1000000, 2000);
        observer.disconnect();
      }
    });
  }


  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  const whySection = document.getElementById('why');
  observer.observe(whySection);


})()





function toggleSearch() {
  var searchBar = document.getElementById("navbar-search-autocomplete");
  const lupaImg = document.getElementById("img-lupa");
  if (searchBar.style.display === "none") {
    searchBar.style.animation = "wipeIn 1s forwards"; // Aumentando a duração da animação
    searchBar.style.display = "block";
    document.getElementById("form1").focus(); // Auto-focus on the search input field when it appears
    lupaImg.src = "assets/img/social/lupaClose.png";

  } else {
    searchBar.style.animation = "wipeOut 1s forwards";
    // Aplicando animação de saída
    lupaImg.src = "assets/img/social/lupa.png";
    setTimeout(function () {
      searchBar.style.display = "none"; // Ocultando o elemento após a animação de saída
    }, 1000); // Tempo correspondente à duração da animação
  }
}
function toggleSearchIn() {
  var searchBar = document.getElementById("navbar-search-autocomplete");
  const lupaImg = document.getElementById("img-lupa");
  if (searchBar.style.display === "none") {
    searchBar.style.animation = "wipeIn 1s forwards"; // Aumentando a duração da animação
    searchBar.style.display = "block";
    document.getElementById("form1").focus(); // Auto-focus on the search input field when it appears
    lupaImg.src = "../assets/img/social/lupaClose.png";

  } else {
    searchBar.style.animation = "wipeOut 1s forwards";
    // Aplicando animação de saída
    lupaImg.src = "../assets/img/social/lupa.png";
    setTimeout(function () {
      searchBar.style.display = "none"; // Ocultando o elemento após a animação de saída
    }, 1000); // Tempo correspondente à duração da animação
  }
}




// Obter todas as imagens com a classe social-icons
var socialIcons = document.querySelectorAll('.social-icons img');

//Adicionar um ouvinte de evento de clique a cada imagem, exceto a primeira
for (var i = 6; i < socialIcons.length; i++) {
  socialIcons[i].addEventListener('click', function () {
    // Obter a classe da imagem clicada
    var className = this.className;
    // Mapear a classe da imagem para o URL correspondente
    var urlMapping = {
      'instagram': 'https://www.instagram.com/nutesuepb/',
      'facebook': 'https://pt-br.facebook.com/people/NUTES-UEPB/100063728133055/',
      'linkedin': 'https://www.linkedin.com/in/nutes-uepb-457111150/',
      'twitter': 'https://twitter.com/nutesuepb'
    };
    // Obter o URL correspondente à classe da imagem clicada
    var url = urlMapping[className];
    // Abrir o URL em uma nova aba
    window.open(url, '_blank');
  });
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("languageDropdown");
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}


// Fechar o dropdown se o usuário clicar fora dele
window.onclick = function (event) {




  var dropdown = document.getElementsByClassName("dropdown")[0];
  if (event.target !== dropdown && !dropdown.contains(event.target)) {
    var dropdownContent = document.getElementById("languageDropdown");
    dropdownContent.style.display = "none";
  }
}

document.getElementById('curriculo').addEventListener('click', function () {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function () {
  var fileInput = document.getElementById('fileInput');
  var fileLabel = document.getElementById('fileLabel');
  var fileIcon = document.getElementById('fileIcon');

  if (fileInput.files.length > 0) {
    var file = fileInput.files[0];
    if (file.type === 'application/pdf') {
      var fileName = file.name;
      if (fileName.length > 15) {
        fileName = fileName.substring(0, 15) + '...'; // Limita o texto a 15 caracteres e adiciona reticências (...) ao final
      }
      fileLabel.innerHTML = fileName.replace(/\n/g, "<br>"); // Quebra de linha
      fileLabel.classList.add('file-selected'); // Adiciona a classe 'file-selected' ao texto após selecionar o arquivo
      fileIcon.src = "/assets/img/social/anexar-arquivo-pdf.png"; // Altera a imagem para o ícone de PDF
    } else {
      alert('Por favor, selecione um arquivo PDF.');
      fileInput.value = ''; // Limpa o campo de arquivo
    }
  } else {
    fileLabel.innerHTML = 'Anexar <br> Currículo';
    fileLabel.classList.remove('file-selected'); // Remove a classe 'file-selected' se nenhum arquivo for selecionado
    fileIcon.src = "/assets/img/social/anexar-arquivo.png"; // Restaura a imagem do ícone padrão
  }
});




function search() {
  var pages = [
    { title: "Home / &nbsp;", url: "index.html", content: "Referência; Fabricação; Dispositivos Médicos; Unidade de Fabricação" },
    { title: "Sobre / &nbsp;", url: "sobre.html", content: "Conteúdo; Página; palavras-chave; relevantes; Unidade de Fabricação; Dispositivos Médicos;" },
    { title: "Embrapii / &nbsp;", url: "embrapii.html", content: "Núcleo; Tecnologia; Dispositivos Médicos; Estratégica; Saúde; Unidade de Fabricação; Unidade; EMBRAPII; projetos; saúde; boas; práticas; fabricação; Anvisa; padrões; internacionais; segurança; eficácia; escopo; atividades; engenharia; software; projeto; desenvolvimento; fabricação; equipamentos; eletromédicos; usabilidade; fatores; humanos; tecnologias; tridimensionais; profissionais; multidisciplinares; parcerias; áreas; atuação; cidade; Campina; Grande; Paraíba; instituições; privado; organizações; públicas; histórico; desenvolvidos; distribuídos; clientes; nacionais; internacionais; laboratórios; LAB-SISGH; LAIS; LCB; LT3D; LUFH; UFDM; LIBEE; Sense; Lab; financiamento; EMBRAPII; modelo; custos; coberta; instituição; parceira; Unidade; EMBRAPII; responsável; execução; projeto; centro; tecnologia; vinculado; universidade; estrutura; lorem; ipsum; dolor; amet; consectetur; adipiscing; elit; donec; semper; egestas; nibh; vehicula; euismod; diam; vestibulum; nisi; orci; lobortis; hendrerit; felis; fermentum; nullam; efficitur; massa; tristique; convallis; urna; aliquet; nunc; risus; placerat; justo; pellentesque; turpis; vídeo; Abertura; Legenda; Google; Maps; Coordenadas; endereço; mapa; OpenStreetMap; tile; leaflet; search; autocomplete; navbar; toggle; dropdown; set; language; link; logo; footer; contato; páginas; visíte-nos; desenvolvido; revisão;" },
  ];

  var input = document.getElementById("form1").value.trim().toLowerCase();
  var results = document.getElementById("searchResults");
  results.style.display = "block";

  // Limpa os resultados anteriores
  results.innerHTML = "";

  // Verifica se o input está vazio
  if (input === "") {
    results.style.display = "none";
    return;
  }

  // Itera sobre as páginas do seu site para encontrar correspondências
  var foundResults = false;
  for (var i = 0; i < pages.length; i++) {
    var page = pages[i];
    var keywords = page.content.split(';');
    for (var j = 0; j < keywords.length; j++) {
      var keyword = keywords[j].trim().toLowerCase();
      var keyword2 = keywords[j].trim();
      if (keyword.startsWith(input)) {
        foundResults = true;
        // Adiciona o resultado à lista de resultados
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = page.url;
        var highlightedKeyword = highlightMatch(keyword, input);
        link.innerHTML = page.title.bold() + "   " + highlightedKeyword;
        listItem.appendChild(link);
        results.appendChild(listItem);
        break;
      }
    }
  }

  // Exibe "Nenhum resultado encontrado" se nenhum resultado for encontrado
  if (!foundResults) {
    var noResultsItem = document.createElement("li");
    var link = document.createElement("a");
    link.href = "index.html";
    link.textContent = "Nenhum resultado encontrado";
    noResultsItem.appendChild(link);
    results.appendChild(noResultsItem);
  }

  // Exibe o elemento de busca
  document.getElementById("navbar-search-autocomplete").style.display = "block";
}

// Função para destacar a correspondência na palavra encontrada
function highlightMatch(keyword, input) {
  var startIndex = keyword.indexOf(input);
  var endIndex = startIndex + input.length;
  var highlightedKeyword = keyword.substring(0, startIndex) +
    "<span class='bg-highlight'>" + keyword.substring(startIndex, endIndex) + "</span>" +
    keyword.substring(endIndex);
  return highlightedKeyword;
}


// Função para alternar o menu   
function toggleMenu() {
  var menuItensMobile = document.getElementById('menuItensMobile');
  var idiomaMobile = document.querySelector('.idiomaMobile');

  menuItensMobile.classList.toggle('active');
  idiomaMobile.classList.toggle('hidden'); // Alternar a classe "hidden"


}  

















