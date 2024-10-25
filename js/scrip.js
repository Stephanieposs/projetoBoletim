var liDados = document.getElementById('li_dados');
var liBoletim = document.getElementById('li_boletim');
var liCertificado = document.getElementById('li_certificado');

var sectionDados = document.getElementById('id_abaDados');
var sectionBoletim = document.getElementById('id_abaBoletim');
var sectionCertificado = document.getElementById('id_abaCertificado');

liDados.addEventListener('click', btDados);
liBoletim.addEventListener('click', btBoletim);
liCertificado.addEventListener('click', btCertificado);

var btgerarBoletim = document.getElementById('btImprimirBoletim');
//btgerarBoletim.addEventListener('click', funcGerarBoletim)



function btDados() {
  sectionDados.removeAttribute("hidden");
  sectionBoletim.setAttribute("hidden", "true");
  sectionCertificado.setAttribute("hidden", "true");
}

function btBoletim() {
  sectionDados.setAttribute("hidden", "true");
  sectionBoletim.removeAttribute("hidden");
  sectionCertificado.setAttribute("hidden", "true");
}

function btCertificado() {
  sectionDados.setAttribute("hidden", "true");
  sectionBoletim.setAttribute("hidden", "true");
  sectionCertificado.removeAttribute("hidden");
}

function funcGerarBoletim(){
  
  
  const content = document.getElementById('id_abaBoletim');

  const options = {
    margin: [10,10,10,10],
    filename: "boletim.pdf",
    html2canvas: {scale:2},
    jsPDF: {unit: "mm", format:"a4", orientation: "portrait"} 
  }

  html2pdf().set(options).from(content).save();

}

btgerarBoletim.addEventListener("click", () => {

  // pega a div do conteudo que desejamo gerar o pdf
  //const content = document.querySelector('#content');
  const content = document.getElementById('id_abaBoletim');

  //configuração da bilioteca html2pdf
  const options = {
      margin: 10,
      filename: "boletim.pdf",
      html2canvas: { scale: 2 },
      image: { type: 'png', quality: 0.98 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  }

  //gerar e baixar pdf
  //html2pdf().set(options).from(content).save();
  //window.alert("entrou aqui")

  html2pdf()
    .from(content)
    .set(options)
    .save()
    .catch((error) => window.alert("erro"));
});



