var liDados = document.getElementById('li_dados');
var liBoletim = document.getElementById('li_boletim');
var liCertificado = document.getElementById('li_certificado');

var sectionDados = document.getElementById('id_abaDados')
var sectionBoletim = document.getElementById('id_abaBoletim')
var sectionCertificado = document.getElementById('id_abaCertificado')


liBoletim.addEventListener('click', btBoletim())

function btBoletim(){
    sectionDados.setAttribute("hidden", true);
    sectionBoletim.setAttribute('hidden', false);
    sectionCertificado.setAttribute("hidden", true);
}

myText.removeAttribute("hidden"); // no effect
  myText.setAttribute("hidden", false); // no effect