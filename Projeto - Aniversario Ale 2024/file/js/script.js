$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var divbtn = document.querySelector('.leitura')
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
           divbtn.style.display = 'block';
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
           divbtn.style.display = 'none';
    }
   
});