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
        fechar
            botoesExcluir.forEach(function(botao) {
                botao.addEventListener('click', function() {
                    var liItem = this.parentElement;
                    liItem.remove();
                });
            });
        }
/*---------------------------------------------------------------- */
/*evento ao clicar no botão adicionar na tela inicial*/
document.getElementById('add-button').addEventListener('click', function() {
    
        document.getElementById('nome_lista').style.display = 'block';
        /*document.getElementById('pastas_tipos_exames').style.display = 'none';*/
        document.getElementById('msg_inicial').style.display = 'none';
});
/*---------------------------------------------------------------- */
// --------------------FUNÇÃO "X" DE FECHAR NOS MODAIS-------------
var close = document.getElementsByClassName('close');

for (var i = 0; i < close.length; i++) {
    close[i].addEventListener('click', fechar);
}

function fechar() {
    
    var sobre_app_modal = document.getElementById('sobre_app-modal');
    var nome_lista=document.getElementById('nome_lista');
    /*var pastas_tipos_exames=document.getElementById('pastas_tipos_exames');*/
    var upload_exame=document.getElementById('upload_exame');
    var novo_elemento=document.getElementById('novo_elemento')
       
        sobre_app_modal.style.display = 'none';
        nome_lista.style.display = 'none';  
        /*pastas_tipos_exames.style.display='none'; */ 
        upload_exame.style.display='none';
        novo_elemento.style.display='none';

    checkListaGruposVazia()
}

//-----------------------------------------------------------------
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
    
// Apague todos os elementos filhos da lista com id "exames"
const examesList = document.getElementById("exames");
while (examesList.firstChild) {
    examesList.removeChild(examesList.firstChild);
}

    var nomeDaLista = inputNome.value;

    if (nomeDaLista.trim() !== '') {
        tituloLista.textContent = nomeDaLista;
        document.getElementById('nome_lista').style.display = 'none';
        /*document.getElementById('pastas_tipos_exames').style.display = 'block';*/
        document.getElementById('upload_exame').style.display='block';
    } else {
        alert('Por favor, insira o nome da lista.');
    }
});
//-------------------------CLICAR FORA , MINIMIZA BLOCOS-----------

window.addEventListener("click", function (event) {
    var sobre_app_modal = document.getElementById('sobre_app-modal');
    var nome_lista = document.getElementById('nome_lista');
    /*var pastas_tipos_exames = document.getElementById('pastas_tipos_exames');*/

    if (event.target === sobre_app_modal || event.target === nome_lista /*|| event.target === pastas_tipos_exames*/) {
        sobre_app_modal.style.display = 'none';
        nome_lista.style.display = 'none';
       /* pastas_tipos_exames.style.display = 'none';*/
        lista_suspensa.style.display = 'none';
    }

    checkListaGruposVazia();
});

//-----------------------------------------------------------------

document.getElementById('link-sobre_app').addEventListener('click', function() {
    document.getElementById('sobre_app-modal').style.display = 'block';
});



    /*quando clicar na pasta do tipo do exame a ser inserido, abrir pasta */

    document.addEventListener("DOMContentLoaded", function () {
    var pastasTiposExames = document.getElementsByClassName('pasta');
    var uploadExameDiv = document.getElementById('upload_exame');
    var exames = document.getElementById('exames');
    var msgInicial = document.getElementById('msg_inicial');

    for (var i = 0; i < pastasTiposExames.length; i++) {
        pastasTiposExames[i].addEventListener('click', function (event) {
            checkListaGruposVazia();

            // Verifique se a pasta está vazia (por exemplo, se não tem filhos)
            var pasta = this;
            if (exames.children.length === 0) { // Verifica se não há <li> dentro de <ol id="exames">
                // Defina o estilo de exibição para 'block'
                uploadExameDiv.style.display = 'block';
                /*pastas_tipos_exames.style.display = 'none';*/
                // Você pode fazer mais aqui, como atualizar o nome da pasta atual
            } else {
                // A pasta não está vazia, então implementar a lógica
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
    const inputNome = document.getElementById("input_nome");        const toggleButtons = document.querySelectorAll('.toggle-button');
    
        // Adicione um ouvinte de evento de clique a todos os botões de expansão/recuo
        toggleButtons.forEach(function (button) {
            button.addEventListener('click', function (event) {
                const parentLi = this.parentNode; // Acesse o elemento <li> pai do botão clicado
    
                // Verifique se o <li> pai tem uma classe "expandido"
                if (parentLi.classList.contains('expandido')) {
                    // Se tiver, remova a classe para recolher a lista
                    parentLi.classList.remove('expandido');
                    this.textContent = '▼'; // Altere o texto do botão para "▼"
                } else {
                    // Se não tiver, adicione a classe para expandir a lista
                    parentLi.classList.add('expandido');
                    this.textContent = '▲'; // Altere o texto do botão para "▲"
                }
            });
        });
        inserirUploadButton.addEventListener("click", function () {
            // Impedir entrada vazia de arquivos
            if (fileExameInput.files.length > 0 && nomeDocInput.value !== "" && dataInput.value !== "") {
                const file = fileExameInput.files[0];
                const dataInputValue = dataInput.value;
        
                // Formate a data no estilo brasileiro (dia, mês, ano)
                const dataFormatada = formatarDataBrasileira(dataInputValue);
        
                const newLi = document.createElement("li");
                const linkElement = document.createElement("a");
                linkElement.href = URL.createObjectURL(file);
                linkElement.target = "_blank";
                linkElement.classList.add("imagem_inserida_link");
        
                // Crie um <span> para a data formatada com uma classe específica
                const dataSpan = document.createElement("span");
                dataSpan.textContent = dataFormatada;
                dataSpan.classList.add("data-formatada"); // Adicione uma classe específica
        
                // Crie um <span> para o nome do documento com outra classe específica
                const nomeSpan = document.createElement("span");
                nomeSpan.textContent = nomeDocInput.value;
                nomeSpan.classList.add("nome-documento"); // Adicione uma classe específica
        
                linkElement.appendChild(dataSpan); // Adicione o <span> da data dentro da <a>
                linkElement.appendChild(nomeSpan); // Adicione o <span> do nome do documento dentro da <a>
        
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
            document.getElementById('msg_inicial').style.display='none';
        });
        
//----------------------------SALVAR DOCS-------------------
// Evento de clique para salvar os dados no localStorage
salvarButton.addEventListener("click", function () {
    // Obtenha o nome da pasta do usuário
    const nomeDaPasta = inputNome.value.trim();

    // Verifique se o nome da pasta não está vazio
    if (nomeDaPasta !== "") {
        // Crie um novo item na lista de grupos com um link para abrir o conteúdo
        const listaGrupos = document.getElementById("lista_grupos");
        const novoGrupoItem = document.createElement("li");

        // Crie um botão de expansão/recolhimento
        const toggleButton = document.createElement("button");
        toggleButton.className = "toggle-button";
        toggleButton.textContent = "▼";
        //botão excluir inserido
        const btn_excluir_grupo = document.createElement("button");
        btn_excluir_grupo.className = "btn-excluir-grupo";
        btn_excluir_grupo.textContent = "❌";

        //atribuir função aos botões de excluir
        btn_excluir_grupo.addEventListener("click", function () {
            const confirmacao = confirm('Você realmente deseja excluir o grupo de documentos?');

            if (confirmacao) {
                const arquivoASerExcluido = this.parentElement;
                arquivoASerExcluido.remove();

                checkListaGruposVazia();
            }
        });
        //botão adicionar documento na pasta já criada
 

//------------------------------------------------------------

 // Evento de clique para adicionar documento à pasta
 
const btn_adicionar_doc = document.createElement("button");
btn_adicionar_doc.className = "btn_adicionar_doc";
btn_adicionar_doc.textContent = "➕";

btn_adicionar_doc.addEventListener("click", function () {
    const novoElementoDiv = document.getElementById("novo_elemento");

    novoElementoDiv.style.display = "block";

    const inserirUpload2Button = novoElementoDiv.getElementById("inserir_upload2");

    inserirUpload2Button.addEventListener("click", function () {
        const novoLiArquivo = document.createElement("li");
        novoLiArquivo.className = "Arquivo";
        const grupoPai = this.closest(".Grupo");

        grupoPai.appendChild(novoLiArquivo);
    });
});


//------------------------------------------------------------

        // Coloque o nome da pasta diretamente dentro da <li>
        novoGrupoItem.textContent = nomeDaPasta;
        novoGrupoItem.className = 'Grupo';
        

        // Clone a estrutura do <ol id="exames">
        const examesOlClone = document.getElementById("exames").cloneNode(true);

        // Mude o id do clone para "Exames_relacionados"
        examesOlClone.id = "Exames_relacionados";

        examesOlClone.style.display = 'none';

        // Anexe os elementos clonados em uma estrutura de árvore
        novoGrupoItem.appendChild(toggleButton); // Adicione o botão de expansão/recolhimento
        
        novoGrupoItem.appendChild(btn_adicionar_doc);
        novoGrupoItem.appendChild(btn_excluir_grupo);
        novoGrupoItem.appendChild(examesOlClone);
        listaGrupos.appendChild(novoGrupoItem);

        // Adicione ouvintes de evento para os botões de expansão/recolhimento
        toggleButton.addEventListener("click", function () {
            toggleList(examesOlClone);
        });

        atribuirEventoExcluir() 

        // Adicione a classe "Arquivo" e remova a classe "imagem_inserida" da <li>
        const imagensInseridasLi = examesOlClone.querySelectorAll("li.imagem_inserida");
        imagensInseridasLi.forEach(function (imagemInseridaLi) {
            imagemInseridaLi.classList.remove("imagem_inserida");
            imagemInseridaLi.classList.add("Arquivo");
        });
        // Você pode continuar com o restante do seu código, como salvar no localStorage, limpar o campo de entrada, etc.

        checkListaGruposVazia();

        alert('Pasta gerada com sucesso!')

        fechar()
    } else {
        // Exiba uma mensagem de erro se o nome da pasta estiver vazio
        alert("Por favor, insira um nome para a pasta.");

    }
});

// Função para alternar a exibição de uma lista (expandir/recolher)
function toggleList(lista) {
    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}

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
        document.getElementById('grupos').style.display = 'none';

    } else { 
        msgInicial.style.display = 'none';
            document.getElementById('lista_grupos').style.display = 'block';
            
            document.getElementById('grupos').style.display = 'block';
        
            document.getElementById('relacao_exames').style.display='block';
        return false;

    }
}
//--------------------------------------------------------------



