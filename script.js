/*JS Document */
/*Objetivo: interação do menu */

// Abrir
var btn_menu = document.getElementById("btn-menu");
var lista_suspensa = document.getElementById("lista_suspensa");

btn_menu.addEventListener("click", function() {
    if (lista_suspensa.style.display !== "none") {
        lista_suspensa.style.display = "none";
    } else {
        lista_suspensa.style.display = "block";
    }
});


// Fechar itens se o usuário clicar fora deles
//var lista_suspensa = document.getElementById("lista_suspensa");
/*var add = document.getElementById('add');
var nome_lista = document.getElementById('nome_lista');
var btn_menu = document.getElementById("btn-menu");
var pastas_tipos_exames=document.getElementById("pastas_tipos_exames");
var nome_lista = document.getElementById('nome_lista');
var list_created = document.getElementById('list_created');
var upload_exame = document.getElementById('upload_exame');
var file_exame=document.getElementById('file_exame');
var camera_svg=document.getElementById('camera_svg');
var inserir_upload=document.getElementById('inserir_upload');
var exames=document.getElementById('exames');
var trocarCamera=document.getElementById('trocarCamera');
var data_exame=document.getElementById('data_exame');
var nome_doc_exame=document.getElementById('nome_doc_exame')
var salvar_button=document.getElementById('salvar_button')
var botaoExcluir=document.getElementsByClassName('botaoExcluir')

window.addEventListener('click', function(event) {
    if (!isInsideElementWithClass(event.target, 'botaoExcluir')) {
        // Código para ocultar elementos
        nome_lista.style.display = 'none';
        pastas_tipos_exames.style.display = 'none';
        nome_lista.style.display = 'none';
        list_created.style.display = 'none';
        file_exame.style.display = 'none';
        inserir_upload.style.display = 'none';
        exames.style.display = 'none';
        /*camera_svg.style.display='none';*/
        /*upload_exame.style.display = 'none';
        data_exame.style.display = 'none';
        nome_doc_exame.style.display = 'none';
        botaoExcluir.style.display = 'none';
        salvar_button = 'none';

        document.getElementById('msg_inicial').style.display = 'block';
    }
    if (event.target === camera_svg) {
        document.getElementById('msg_inicial').style.display = 'none';
    }
    if (event.target === salvar_button) {
        document.getElementById('upload_exame').style.display = 'none';
        document.getElementById('relacao_exames').style.display = 'none';
        document.getElementById('grupos').style.display = 'block';
    }

}); */

function isInsideElementWithClass(element, className) {
    while (element) {
        if (element.classList && element.classList.contains(className)) {
            return true;
        }
        element = element.parentElement;
    }
    return false;
}

/* OBJETIVO: INSERIR ELEMENTO DOM */
/* Entrada de dados */
        function adicionarBotaoExcluir(liItem) {
            var botaoExcluir = document.createElement('span');
            botaoExcluir.className = 'botao-excluir';
            botaoExcluir.textContent = '❌';
            botaoExcluir.addEventListener('click', function() {
                liItem.remove();
            });
            liItem.appendChild(botaoExcluir);
        }
        function atribuirEventoExcluir() {
            var botoesExcluir = document.querySelectorAll('.botao-excluir');
        
            botoesExcluir.forEach(function(botao) {
                botao.addEventListener('click', function() {
                    var liItem = this.parentElement;
                    liItem.remove();
                });
            });
        }
/*---------------------------------------------------------------- */
/*evento ao clicar no botão adicionar na tela inicial*/
document.getElementById('add').addEventListener('click', function() {
    
        document.getElementById('nome_lista').style.display = 'block';
        document.getElementById('pastas_tipos_exames').style.display = 'none';
        document.getElementById('msg_inicial').style.display = 'none';
});
/*---------------------------------------------------------------- */

function fechar(){
    document.getElementById('msg_inicial').style.display = 'block';
}

var nome_lista = document.getElementById('nome_lista');

nome_lista.addEventListener('click', function(event) {
    event.stopPropagation();
});

var elementosFilhos = nome_lista.querySelectorAll('*');
elementosFilhos.forEach(function(elemento) {
    elemento.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

var btnNome = document.getElementById('btn-nome');
var inputNome = document.getElementById('input_nome');
var tituloLista = document.querySelector('#list_created h1');

btnNome.addEventListener('click', function() {
    var nomeDaLista = inputNome.value;

    if (nomeDaLista.trim() !== '') {
        tituloLista.textContent = nomeDaLista;
        document.getElementById('nome_lista').style.display = 'none';
        document.getElementById('pastas_tipos_exames').style.display = 'block';
    } else {
        alert('Por favor, insira o nome da lista.');
    }
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('sobre_app-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('link-sobre_app').addEventListener('click', function() {
    document.getElementById('sobre_app-modal').style.display = 'block';
});

document.getElementById('fechar-sobre_app').addEventListener('click', function() {
    document.getElementById('sobre_app-modal').style.display = 'none';
});


    /*quando clicar na pasta do tipo do exame a ser inserido, abrir pasta */

    document.addEventListener("DOMContentLoaded", function () {
        var pastasTiposExames = document.getElementsByClassName('pasta');
        var uploadExameDiv = document.getElementById('upload_exame');
        var exames = document.getElementById('exames');
    
        for (var i = 0; i < pastasTiposExames.length; i++) {
            pastasTiposExames[i].addEventListener('click', function () {
                // Impede a propagação do evento de clique para evitar que o código do window seja executado
                event.stopPropagation();
    
                // Verifique se a pasta está vazia (por exemplo, se não tem filhos)
                var pasta = this;
                if (exames.children.length === 0) { // Verifica se não há <li> dentro de <ol id="exames">
                    // Defina o estilo de exibição para 'block'
                    uploadExameDiv.style.display = 'block';
                    pastas_tipos_exames.style.display='none';
                    // Você pode fazer mais aqui, como atualizar o nome da pasta atual
                } else {
                    // A pasta não está vazia, então você pode implementar a lógica
                    // para abrir a relação de exames da pasta que foram salvas
                    // por exemplo, exibir uma lista de exames ou abrir outra página
                }
            });
        }
    });
    

//--------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const inserirUploadButton = document.getElementById("inserir_upload");
    const fileExameInput = document.getElementById("file_exame");
    const relacaoExamesDiv = document.getElementById("relacao_exames");
    const examesList = document.getElementById("exames");
    const nomeDocInput = document.getElementById("nome_doc_exame");
    const dataInput = document.getElementById("data_exame");
    const salvarButton = document.getElementById("salvar_button"); 
    const inputNome = document.getElementById("input_nome");

    // Evento de clique para inserir o documento com nome e data
    inserirUploadButton.addEventListener("click", function () {
        // Impedir entrada vazia de arquivos
        if (fileExameInput.files.length > 0 && nomeDocInput.value !== "" && dataInput.value !== "") {
            const file = fileExameInput.files[0];
            const dataInputValue = dataInput.value;

            // Formate a data no estilo brasileiro (dia, mês, ano)
            const dataFormatada = formatarDataBrasileira(dataInputValue);

            const newLi = document.createElement("li");
            const linkElement = document.createElement("a");

            linkElement.textContent = dataFormatada + " " + nomeDocInput.value;
            linkElement.href = URL.createObjectURL(file);
            linkElement.target = "_blank";
            linkElement.classList.add("imagem_inserida_link");

            newLi.appendChild(linkElement);
            newLi.classList.add("imagem_inserida");
            adicionarBotaoExcluir(newLi);
            examesList.appendChild(newLi);

            fileExameInput.value = "";
            relacaoExamesDiv.style.display = "block";

            // Limpe os campos de entrada após a inserção
            nomeDocInput.value = "";
            dataInput.value = "";
        } else {
            // Exibir mensagem de erro se algum campo estiver vazio
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    });
//----------------------------SALVAR DOCS-------------------
    // Evento de clique para salvar os dados no localStorage
    salvarButton.addEventListener("click", function () {
        // Obtenha o nome da pasta do usuário
        const nomeDaPasta = inputNome.value.trim();

        // Verifique se o nome da pasta não está vazio
        if (nomeDaPasta !== "") {
            // Obtenha o conteúdo da lista <ol> com id "exames"
            const examesItems = examesList.querySelectorAll("li");

            // Crie um array para armazenar os itens da lista
            const listaDeExames = [];

            // Percorra os itens da lista e adicione seus textos ao array
            examesItems.forEach(function (item) {
                listaDeExames.push(item.textContent);
            });

            // Converta o array em uma string JSON
            const listaJSON = JSON.stringify(listaDeExames);

            // Salve a lista na pasta nomeada pelo usuário no localStorage
            localStorage.setItem(nomeDaPasta, listaJSON);

            // Limpe o campo de entrada do nome da pasta
            inputNome.value = "";

            // Exiba uma mensagem de sucesso ou faça qualquer outra ação necessária
            alert("Exames salvos com sucesso na pasta " + nomeDaPasta);

            // Crie um novo item na lista de grupos com um link para abrir o conteúdo
            const listaGrupos = document.getElementById("lista_grupos");
            const novoGrupoItem = document.createElement("ol");
            const linkParaConteudo = document.createElement("a");
            linkParaConteudo.className="Grupo";
            linkParaConteudo.textContent = nomeDaPasta;
            linkParaConteudo.href = "#"; 

                // Recupere o conteúdo da pasta no localStorage usando localStorage.getItem(nomeDaPasta)
                const conteudoSalvo = localStorage.getItem(nomeDaPasta);

                // Verifique se há conteúdo na pasta
                if (conteudoSalvo) {
                    // Converta o conteúdo de volta para o formato adequado (por exemplo, uma matriz)
                    const listaDeExamesSalva = JSON.parse(conteudoSalvo);

                    // Aqui, você pode fazer o que quiser com o conteúdo salvo, como exibi-lo na página
                    // Por exemplo, você pode criar uma lista e adicionar cada item da listaDeExamesSalva a ela.
                    // Vou apenas exibir um alert com o conteúdo para fins de demonstração:
                    alert("Conteúdo da pasta " + nomeDaPasta + ":\n" + listaDeExamesSalva.join("\n"));
                } else {
                    alert("A pasta " + nomeDaPasta + " está vazia.");
                }
            
            novoGrupoItem.appendChild(linkParaConteudo);
            listaGrupos.appendChild(novoGrupoItem);
            
            checkListaGruposVazia()
        } else {
            // Exiba uma mensagem de erro se o nome da pasta estiver vazio
            alert("Por favor, insira um nome para a pasta.");
        }
    });

    function formatarDataBrasileira(data) {
        // Divida a data em partes: ano, mês, dia
        const partes = data.split('-');

        // Verifique se há três partes (ano, mês, dia)
        if (partes.length === 3) {
            const dia = partes[2];
            const mes = partes[1];
            const ano = partes[0];

            // Crie uma nova data no formato "dia/mês/ano"
            const dataFormatada = dia + '-' + mes + '-' + ano;

            return dataFormatada;
        } else {
            // Se o formato da data estiver incorreto, retorne a data original
            return data;
        }
    }
});

//------------------------------------------------------------
/*
// abrir câmera
var cameraSVG = document.getElementById('camera_svg');

// Adicione um ouvinte de eventos de clique
cameraSVG.addEventListener('click', function () {
    // Verifique se o navegador suporta a API MediaDevices
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Solicite permissão para acessar a câmera do dispositivo
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                // Sucesso: A câmera foi aberta com sucesso, você pode usar o fluxo de vídeo (stream) aqui
                console.log("Câmera aberta com sucesso!");

                // Exemplo: exibir o fluxo de vídeo em um elemento HTML de vídeo
                const videoElement = document.createElement('video');
                videoElement.srcObject = stream;
                videoElement.autoplay = true;

                const uploadExameDiv = document.getElementById('upload_exame');

                    // Verifique se o elemento upload_exame foi encontrado
                    if (uploadExameDiv) {
                        // Anexe o vídeo ao elemento upload_exame
                        uploadExameDiv.appendChild(videoElement);
                    } else {
                        console.error("Elemento upload_exame não encontrado.");
                    }
             // Importante: Certifique-se de fechar a câmera quando você não a estiver usando mais
                // Para isso, você pode adicionar um botão "Fechar Câmera" ou realizar esta ação com base no seu fluxo de aplicativo.
            })
            .catch(function (error) {
                // Erro: Não foi possível acessar a câmera ou o usuário negou a permissão
                console.error("Erro ao abrir a câmera:", error);
            });
    } else {
        // Navegador não suporta a API MediaDevices
        console.error("Seu navegador não suporta a API MediaDevices.");
    }
});

//camera traseira
navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
        // Percorra a lista de dispositivos para encontrar a câmera traseira
        devices.forEach(function(device) {
            if (device.kind === 'videoinput' && device.label.toLowerCase().includes('back')) {
                // Esta é a câmera traseira, você pode usar device.deviceId
                console.log('Câmera traseira encontrada com deviceId:', device.deviceId);
            }
        });
    })
    .catch(function(error) {
        console.error('Erro ao enumerar dispositivos:', error);
    });
    navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
        devices.forEach(function(device) {
            console.log('Dispositivo:', device.label, 'ID:', device.deviceId);
        });
    })
    .catch(function(error) {
        console.error('Erro ao enumerar dispositivos:', error);
    });

//botão trocar câmera frontal x traseira
let cameraAtiva = 'front'; // Inicialmente, a câmera frontal está ativa

document.getElementById('trocarCamera').addEventListener('click', function () {
    // Verifique qual câmera está ativa e troque para a outra
    if (cameraAtiva === 'front') {
        cameraAtiva = 'back'; // Troque para a câmera traseira
    } else {
        cameraAtiva = 'front'; // Troque de volta para a câmera frontal
    }
    
    // Chame uma função para abrir a câmera com base na câmera ativa
    abrirCamera(cameraAtiva);
});

function abrirCamera(camera) {
    // Verifique se o navegador suporta a API MediaDevices
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const constraints = {
            video: {
                facingMode: camera === 'back' ? 'environment' : 'user'
            }
        };
        
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (stream) {
                // Resto do código para exibir o stream de vídeo, etc.
            })
            .catch(function (error) {
                console.error('Erro ao abrir a câmera:', error);
            });
    } else {
        console.error('Seu navegador não suporta a API MediaDevices.');
    }
} */

/*--------------VERIFICAR SE O PRONTUÁRIO ESTÁ VAZIO---------- */

function checkListaGruposVazia() {
    var listaGrupos = document.getElementById('lista_grupos');
    var msgInicial = document.getElementById('msg_inicial');

    if (listaGrupos.children.length === 0) {
        msgInicial.style.display = 'block';
        return true;
    } else { 
        msgInicial.style.display = 'none';
            document.getElementById('lista_grupos').style.display = 'block';
            
            document.getElementById('grupos').style.display = 'block';
            
            document.getElementById('upload_exame').style.display = 'none';
            document.getElementById('relacao_exames').style.display = 'none';
        return false;

    }
}
