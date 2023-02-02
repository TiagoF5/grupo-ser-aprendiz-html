(function($) {
  "use strict"; // Start of use strict
      //ANIMAÇÕES DE TELA NO SCROLL
    var Animation = function() {
      var _elements = document.querySelectorAll('[data-animation]');
      // Define a dobra superior, inferior e laterais da tela
      var windowOffset = 10;
      var windowTop = 0;
      var windowBottom = window.innerHeight - ( window.innerHeight / windowOffset );
      var windowLeft = 0;
      var windowRight = window.innerWidth;

      function start(element) {
        // Seta os atributos customizados
        element.style.animationDelay = element.dataset.animationDelay;
        element.style.animationDuration = element.dataset.animationDuration;
        // Inicia a animacao setando a classe da animacao
        element.classList.add(element.dataset.animation);
        // Seta o elemento como animado
        element.dataset.animated = 'true';
      }

      function isElementOnScreen(element) {
        // Obtem o boundingbox do elemento
        var elementRect = element.getBoundingClientRect();
        var elementTop = elementRect.top + parseInt(element.dataset.animationOffset) || elementRect.top;
        var elementBottom = elementRect.bottom - parseInt(element.dataset.animationOffset) || elementRect.bottom;
        var elementLeft = elementRect.left;
        var elementRight = elementRect.right;

        // Verifica se o elemento esta na tela
        return ( elementTop <= windowBottom )
        && ( elementBottom >= windowTop )
        && ( elementLeft <= windowRight )
        && ( elementRight >= windowLeft );
      }

      // Percorre o array de elementos, verifica se tem elemento na tela e inicia animaÃ§Ã£o do mesmo
      function checkElementsOnScreen(elements) { 
        elements instanceof Event && (elements = _elements);
        
        for ( var i = 0, len = elements.length; i < len; i++ ) {
          // Passa para o proximo loop se o elemento ja estiver animado
          if ( elements[i].dataset.animated ) continue;
          isElementOnScreen( elements[i] ) && start( elements[i] );
        }
      }

      function update() {    
        elements = document.querySelectorAll('[data-animation]:not([data-animated])');
        checkElementsOnScreen(elements);
      }

      // Inicia os eventos
      window.addEventListener('load', checkElementsOnScreen, false);
      window.addEventListener('scroll', checkElementsOnScreen, false);
      window.addEventListener('resize', checkElementsOnScreen, false);

      // Retorna funcoes publicas
      return {
        start,
        isElementOnScreen,
        checkElementsOnScreen,
        update
      };
    }();

 })(jQuery); // End of use strict






