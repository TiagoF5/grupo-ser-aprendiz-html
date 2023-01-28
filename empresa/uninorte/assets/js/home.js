(function($) {
  "use strict"; // Start of use strict

   //console.log("running");
  var templateUrl = object_name.templateUrl;

  $('.slider-videos').slick({    
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev btn btn-link p-0 m-0"><img src="'+templateUrl+'/assets/image/arrow-prev.svg" /></button>',
    nextArrow: '<button type="button" class="slick-next btn btn-link p-0 m-0"><img src="'+templateUrl+'/assets/image/arrow-next.svg" /></button>',
    // the magic
    responsive: [{
      }]
  });

  $('.slider-depoimentos').slick({    
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev btn btn-link p-0 m-0"><img src="'+templateUrl+'/assets/image/arrow-prev.svg" /></button>',
    nextArrow: '<button type="button" class="slick-next btn btn-link p-0 m-0"><img src="'+templateUrl+'/assets/image/arrow-next.svg" /></button>',
    // the magic
    responsive: [{   
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
   
      }, {   
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
   
      }, {   
        breakpoint: 420,
        settings: {
          slidesToShow: 1
        }
   
      }]
  });
  // alert("slick");

  $('#depoimentoeModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var title = button.data('title') // Extract info from data-* attributes
    var cargo = button.data('cargo') // Extract info from data-* attributes
    var content = button.data('content') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(title);
    modal.find('.modal-cargo').text(cargo);
    modal.find('.modal-body').html(content);
    //modal.find('.modal-body input').val(recipient)
  });

})(jQuery); // End of use strict



//AÇÃO P OCORRRER APOS CARREGAR TODOS OS ASSETS DE TELA
window.addEventListener("load", function(event) {
  
      
});


  

