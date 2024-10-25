
var liDados = document.getElementById('li_dados');
var liBoletim = document.getElementById('li_boletim');
var liCertificado = document.getElementById('li_certificado');

var sectionDados = document.getElementById('id_abaDados')
var sectionBoletim = document.getElementById('id_abaBoletim')
var sectionCertificado = document.getElementById('id_abaCertificado')


liDados.addEventListener('click', btDados)
liBoletim.addEventListener('click', btBoletim)
liCertificado.addEventListener('click', btCertificado)

function btDados() {
  sectionDados.setAttribute("hidden", "false");
  sectionBoletim.setAttribute("hidden", "true");
  sectionCertificado.setAttribute("hidden", "true");
}
function btBoletim() {

  var sectionDados = document.getElementById('id_abaDados')
  var sectionBoletim = document.getElementById('id_abaBoletim')
  var sectionCertificado = document.getElementById('id_abaCertificado')

  sectionDados.setAttribute('hidden', "true");
  sectionBoletim.setAttribute('hidden', "false");
  sectionCertificado.setAttribute('hidden', "true");
}

function btCertificado() {

  var sectionDados = document.getElementById('id_abaDados')
  var sectionBoletim = document.getElementById('id_abaBoletim')
  var sectionCertificado = document.getElementById('id_abaCertificado')

  sectionDados.setAttribute('hidden', "true");
  sectionBoletim.setAttribute('hidden', "true");
  sectionCertificado.setAttribute('hidden', "false");
}

