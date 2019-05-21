

function resize() {
    var ancho= screen.width;
    var alto = screen.height;

       if(ancho < 800){
        console.log ("Ancho: "+ancho+" "+"alto: "+alto);
        $(function(){
          window.open("http://danlskwebdevelopment.com.ar/mobile.html", "myPage","height=480, width=640px");
        });

      }
      else if(ancho > 800 && ancho < 1200){
            console.log ("Ancho: "+ancho+" "+"alto: "+alto);
            $(function(){
              window.open("http://danlskwebdevelopment.com.ar/tablets.html", "myPage","height=480, width=640px");
            });
      }
      else{
        console.log ("Ancho: "+ancho+" "+"alto: "+alto);
        $(function(){
          window.open("http://danlskwebdevelopment.com.ar/desktop.html", "myPage","height=510, width=690px");
        });

      }


}















/*
function openWin() {
            setTimeout(function(){
                var divText = document.getElementById("pass").outerHTML;
                var myWindow = window.open('','','width=400px,height=400px');
                var doc = myWindow.document;
                doc.open();
                doc.write(divText);
        ; }, 3000);
}
*/
