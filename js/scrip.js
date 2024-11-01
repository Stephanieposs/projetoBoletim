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
var btgerarCertificado = document.getElementById('btImprimirCertificado');
//btgerarBoletim.addEventListener('click', funcGerarBoletim)


var lupaAluno = document.getElementById("pesquisa_aluno")
lupaAluno.addEventListener('click', fetchDataDados(fetchAllAndFindByName()))


function btDados() {
  sectionDados.removeAttribute("hidden");
  sectionBoletim.setAttribute("hidden", "true");
  sectionCertificado.setAttribute("hidden", "true");

}

function btBoletim() {
  sectionDados.setAttribute("hidden", "true");
  sectionBoletim.removeAttribute("hidden");
  sectionCertificado.setAttribute("hidden", "true");

  fetchDataBoletim(fetchAllAndFindByName());
}

function btCertificado() {
  sectionDados.setAttribute("hidden", "true");
  sectionBoletim.setAttribute("hidden", "true");
  sectionCertificado.removeAttribute("hidden");

  fetchDataCertificado(fetchAllAndFindByName());
}

btgerarBoletim.addEventListener("click", () => {

  // pega a div do conteudo que desejamo gerar o pdf
  //const content = document.querySelector('#content');
  const content = document.getElementById('id_abaBoletim2');
  //configuração da bilioteca html2pdf
  const options = {
      margin: 1,
      filename: "boletim.pdf",
      html2canvas: { scale: 2 },
      image: { type: 'jpeg', quality: 1 },
      jsPDF: { unit: "cm", format: "a4", orientation: "landscape" }
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




btgerarCertificado.addEventListener("click", () => {

  const content = document.getElementById('id_abaCertificado2');
  
  const options = {
      margin: 1,
      filename: "Certificado.pdf",
      html2canvas: { scale: 2 },
      image: { type: 'jpeg', quality: 1 },
      jsPDF: { unit: "cm", format: "a4", orientation: "portrait" }
  }


  html2pdf()
    .from(content)
    .set(options)
    .save()
    .catch((error) => window.alert("erro"));
});


async function fetchAllAndFindByName() {
  try {
    const nomeAlunoPesquisado = document.getElementById("nome_Aluno").value;

    
    const response = await fetch("https://localhost:6061/api/Student");
    
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status}`);
    }

    // Pega todos os itens no formato JSON
    const allData = await response.json();

    // Encontra um item específico pelo name
    const item = allData.find((student) => student.name === nomeAlunoPesquisado);

    if (item) {
      console.log("Item encontrado:", item);
      return item.id; 
    } else {
      console.log(`Item com name ${nomeAlunoPesquisado} não encontrado.`);
    }
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
}

async function fetchDataDados(studentId){
  try{
      
      
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdheWJyaWVsQGV4YW1wbGUuY29tIiwiaWQiOiIyYzM0ZGFjNC01MzM3LTQyZDktYjJmZS00ZGJiNmE2NTEwOTciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJURUFDSEVSIiwiZXhwIjoxNzMyOTAzMTkyfQ.jVC7DKkBiEWagBxGSHUIH_WJHQAKLMxtt8F55DM0dB4");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      var id = studentId || "51bd4728-9a80-4318-abb3-57bb37304895";
      const response = await fetch(`https://localhost:6061/api/Student/${id}`, requestOptions);

      
      if(!response.ok){
        throw new Error("Could not fetch resource");
      }

      const data = await response.json();
      window.alert(JSON.stringify(data))
    
      const mostrarNome = document.getElementById("idNome");
      mostrarNome.value = data.name;

      const mostrarEmail = document.getElementById("idEmail");
      mostrarEmail.value = data.email;

      const mostrarNasci = document.getElementById("idDate");
      mostrarNasci.value = data.birth_date;

      const mostrarCurso = document.getElementById("idCurso");
      mostrarCurso.value = data.course;

      const mostrarPeriodo = document.getElementById("idPeriodo");
      mostrarPeriodo.value = data.period;

  }
  catch(error){
      console.error(error);
  }
}

async function fetchDataBoletim(){
  try{
      
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdheWJyaWVsQGV4YW1wbGUuY29tIiwiaWQiOiIyYzM0ZGFjNC01MzM3LTQyZDktYjJmZS00ZGJiNmE2NTEwOTciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJURUFDSEVSIiwiZXhwIjoxNzMyOTAzMTkyfQ.jVC7DKkBiEWagBxGSHUIH_WJHQAKLMxtt8F55DM0dB4");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      var id = studentId || "51bd4728-9a80-4318-abb3-57bb37304895";
      const response = await fetch(`https://localhost:6061/api/Grade/${id}`, requestOptions);

      
      if(!response.ok){
        throw new Error("Could not fetch resource");
      }

      const data = await response.json();
      window.alert(JSON.stringify(data))
    
      const mostrarNome = document.getElementById("idNome");
      mostrarNome.value = data.name;

      

  }
  catch(error){
      console.error(error);
  }
}

async function fetchDataCertificado(){
  try{
      
      const nomeAlunoPesquisado = document.getElementById("nome_Aluno").value;
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdheWJyaWVsQGV4YW1wbGUuY29tIiwiaWQiOiIyYzM0ZGFjNC01MzM3LTQyZDktYjJmZS00ZGJiNmE2NTEwOTciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJURUFDSEVSIiwiZXhwIjoxNzMyOTAzMTkyfQ.jVC7DKkBiEWagBxGSHUIH_WJHQAKLMxtt8F55DM0dB4");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      var id = studentId || "51bd4728-9a80-4318-abb3-57bb37304895" ;
      const response = await fetch(`https://localhost:6061/api/Student/${id}`, requestOptions);

      
      if(!response.ok){
        throw new Error("Could not fetch resource");
      }

      const data = await response.json();
      const mostrarNome = document.getElementById("idNameCertificado");
      mostrarNome.value = data.name;

  }
  catch(error){
      console.error(error);
  }
}