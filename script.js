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
var modal_corpo = document.getElementById('corpo');
var add = document.getElementById('add');
var nome_lista = document.getElementById('nome_lista');
var btn_menu = document.getElementById("btn-menu");
var pastas_tipos_exames=document.getElementById("pastas_tipos_exames");
var nome_lista = document.getElementById('nome_lista');
var list_created = document.getElementById('list_created');
var upload_exame = document.getElementById('upload_exame');
var file_exame=document.getElementById('file_exame');
var camera_svg=document.getElementById('camera_svg');
var inserir_upload=document.getElementById('inserir_upload')
var exames=document.getElementById('exames')

window.addEventListener('click', function(event) {
    if (/*event.target !== lista_suspensa && */event.target !== btn_menu && event.target !== modal_corpo && event.target !== add && event.target !== nome_lista && event.target !== pastas_tipos_exames && event.target !== nome_lista && event.target !== list_created && event.target !== upload_exame && event.target !== file_exame && event.target !== inserir_upload&& event.target !== camera_svg) {
        /*lista_suspensa.style.display = "none";*/
        modal_corpo.style.display = 'none';
        nome_lista.style.display='none';
        pastas_tipos_exames.style.display='none';
        nome_lista.style.display='none';
        list_created.style.display='none';
        upload_exame.style.display='none';
        file_exame.style.display='none';
        inserir_upload.style.display='none';
        exames.style.display='none';
        camera_svg.style.display='none';

        document.getElementById('msg_inicial').style.display = 'block';

    }
    if (event.target === camera_svg){
        document.getElementById('msg_inicial').style.display = 'none';

    }
});

var inputs = document.querySelectorAll('#corpo input');
inputs.forEach(function(input) {
    input.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

/* Objetivo: interatividade no botão */
/* Declaração das variáveis */
var a;
var b;
var lista_tarefas;

/* Entrada de dados */
/* PRIMEIRO BOTAO */
/* Relacionar qual botão */
a = document.getElementsByClassName('f_botao')[0];

/* Saída de dados */
/* Adicionar evento aos botões */
a.addEventListener('click', inserir);

/* OBJETIVO: INSERIR ELEMENTO DOM */
/* Entrada de dados */
// Invalidar campo vazio
function inserir() {
    var texto1 = document.getElementById('item_usuario1').value;
    var texto3 = document.getElementById('item_usuario3').value;

    if (texto3 !== "" && texto1 !== "") {
        a.style.background = 'lightgray';
        a.value = 'INSERIDO';

        var item = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        var valor_item = document.createElement('input');
        valor_item.type = 'TEXT';
        valor_item.placeholder = 'R$';
        var unidades = document.createElement('span');

        item.className = 'item';
        checkbox.className = 'li_checkbox';
        valor_item.className = 'valor_item';
        unidades.className = 'unidades';

        unidades.appendChild(document.createTextNode(texto1));
        item.appendChild(checkbox);
        item.appendChild(unidades);
        item.appendChild(document.createTextNode(' ' + texto3));
        item.appendChild(valor_item);
        adicionarBotaoExcluir(item);
        document.getElementById('list_created').style.display = 'block';

        function adicionarBotaoExcluir(liItem) {
            var botaoExcluir = document.createElement('span');
            botaoExcluir.className = 'botao-excluir';
            botaoExcluir.textContent = '❌';
            botaoExcluir.addEventListener('click', function() {
                liItem.remove();

                var lista = document.getElementById('f_lista');
                if (lista.children.length === 0) {
                    document.getElementById('list_created').style.display = 'none';
                    checkListaVazia();
                } else {
                    document.getElementById('list_created').style.display = 'block';
                }
            });
            liItem.appendChild(botaoExcluir);
        }

        checkbox.addEventListener('click', function() {
            var liItem = this.parentElement;
            if (this.checked) {
                liItem.style.textDecoration = 'line-through';
                lista_tarefas.removeChild(liItem);
                lista_tarefas.appendChild(liItem);
            } else {
                liItem.style.textDecoration = 'none';
                lista_tarefas.removeChild(liItem);
                lista_tarefas.insertBefore(liItem, lista_tarefas.firstChild);
            }
        });

        var lista_tarefas = document.getElementById('f_lista');
        lista_tarefas.appendChild(item);

        document.getElementById('item_usuario3').value = "";
        document.getElementById('item_usuario1').value = "";

        setTimeout(function() {
            a.style.background = 'lightblue';
            a.style.color = 'black';
            a.value = 'INSERIR';
        }, 300);
    } else {
        window.alert('Inserir dados do item!');
    }
    checkListaVazia();
}

/* OBJETIVO: Quando clicar Enter, inserir item */
var input_text;

input_text = document.getElementById('item_usuario3');
input_text.addEventListener('keydown', clicou_enter);

function clicou_enter(tecla) {
    if (tecla.key == 'Enter') {
        inserir();
    }
}

// Adicione um evento de clique a todos os checkboxes
var checkboxes = document.querySelectorAll('.li_checkbox');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
    });
});

/*---------------------------------------------------------------- */
/*evento ao clicar no botão adicionar na tela inicial*/
document.getElementById('add').addEventListener('click', function() {
    
        document.getElementById('nome_lista').style.display = 'block';
        document.getElementById('pastas_tipos_exames').style.display = 'none';
        document.getElementById('msg_inicial').style.display = 'none';
});
/*---------------------------------------------------------------- */

document.getElementById('fechar-corpo').addEventListener('click', function() {
    document.getElementById('corpo').style.display = 'none';
    var lista = document.getElementById('f_lista');
    if (lista.children.length === 0) {
        checkListaVazia();
    } else {
        document.getElementById('list_created').style.display = 'block';
    }
});

document.getElementById('fechar-lista-nome').addEventListener('click', function() {
    document.getElementById('nome_lista').style.display = 'none';
    document.getElementById('input_nome').value="";
    fechar();
});

function fechar(){
    document.getElementById('msg_inicial').style.display = 'block';
}

document.getElementById('fechar-list_created').addEventListener('click', function() {
console.log('Botão de fechamento clicado')
document.getElementById('list_created').style.display = 'none';
console.log('Minimizado!')

    /*var lista = document.getElementById('f_lista');
    if (lista.children.length === 0) {
        checkListaVazia();
    } else {
        document.getElementById('list_created').style.display = 'block';
    }*/
    checkListaVazia();
});

function checkListaVazia() {

    if (lista.children.length === 0) {
        msgInicial.style.display = 'block';
        return true;
    } else {
        msgInicial.style.display = 'none';
        document.getElementById('corpo').addEventListener('click', function() {
            document.getElementById('corpo').style.display = 'block';
        });
        return false;
    }
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
//criar salvamento da lista
// Função para exibir as listas salvas quando o link "LISTAS" for clicado
// Array global para armazenar listas salvas
let listasSalvas = JSON.parse(localStorage.getItem("minhas_listas")) || [];

// Função para carregar e exibir a lista selecionada
function carregarListaSelecionada(index) {
    const listaSelecionada = listasSalvas[index];
    if (listaSelecionada) {
        document.getElementById("list_created").innerHTML = listaSelecionada;
        document.getElementById("listas-salvas").style.display = "none";
        document.querySelector("#list_created h1").textContent = `Lista ${index + 1}`;
        /*checkListaVazia();*/
        atribuirEventoExcluir()
        adicionarFuncionalidadeAItensCarregados();
    };
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

function exibirListasSalvas() {

    const listaDropdown = document.getElementById("listas-salvas");

    listaDropdown.innerHTML = ""; // Limpar itens anteriores

    listasSalvas.forEach((lista, index) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#";
        link.classList.add("minhas_listas_salvas");
        link.textContent = `Lista ${index + 1}`;
        link.addEventListener("click", () => {
            carregarListaSelecionada(index); // Carregar a lista selecionada
            msgInicial.style.display = 'none'; // Esconder msgInicial ao clicar na lista
        });
        listItem.appendChild(link);
        listaDropdown.appendChild(listItem);
    });

    var msgInicial = document.getElementById('msg_inicial');

}



    document.getElementById('excluir-list_created').addEventListener('click', function() {
        var listaParaExcluir = document.getElementById('list_created'); // Obtém o elemento lista_created
        listaParaExcluir.remove();
        
        var listaSalvaIndex = -1; // Inicialize o índice da lista a ser removida como -1

        // Percorra as listas salvas no armazenamento local e encontre a correspondente à lista que está sendo fechada
        var listasSalvas = JSON.parse(localStorage.getItem("minhas_listas")) || [];
        listasSalvas.forEach(function(lista, index) {
            if (lista === listaParaExcluir.innerHTML) {
                listaSalvaIndex = index; // Encontrou a lista, armazena o índice
            }
        });
    
        // Remove a lista do armazenamento local usando o índice encontrado
        if (listaSalvaIndex !== -1) {
            listasSalvas.splice(listaSalvaIndex, 1); // Remove a lista do array
            localStorage.setItem("minhas_listas", JSON.stringify(listasSalvas)); // Atualiza o armazenamento local
        }      
    
    var msgInicial = document.getElementById('msg_inicial');
        msgInicial.style.display = 'block';
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
    
//criação do elemento dom <li> com a imagem de upload
document.addEventListener("DOMContentLoaded", function () {
    const inserirUploadButton = document.getElementById("inserir_upload");
    const fileExameInput = document.getElementById("file_exame");
    const relacaoExamesDiv = document.getElementById("relacao_exames");
    const examesList = document.getElementById("exames");

    inserirUploadButton.addEventListener("click", function () {
        // Verifique se o input de file_exame não está vazio
        if (fileExameInput.files.length > 0) {
            const file = fileExameInput.files[0];

            // Crie um elemento <li>
            const newLi = document.createElement("li");

            // Crie um elemento <a> para o nome do arquivo
            const linkElement = document.createElement("a");
            linkElement.textContent = file.name;
            linkElement.href = URL.createObjectURL(file); // Define o href do link como o arquivo
            linkElement.target = "_blank"; // Abre o link em uma nova guia

            // Adicione a classe "imagem_inserida" ao elemento <a>
            linkElement.classList.add("imagem_inserida");

            // Anexe o link ao elemento <li>
            newLi.appendChild(linkElement);

            // Adicione a classe "imagem_inserida" à <li>
            newLi.classList.add("imagem_inserida");

            // Adicione o elemento <li> à lista de exames
            examesList.appendChild(newLi);

            // Limpe o valor do input de file_exame
            fileExameInput.value = "";

            // Exiba a div relacao_exames
            relacaoExamesDiv.style.display = "block";
        }
    });

    // Evento de clique para abrir a imagem ao clicar na <li> com a classe "imagem_inserida"
    examesList.addEventListener("click", function (event) {
        if (event.target.classList.contains("imagem_inserida")) {
            // Abra a imagem em uma nova guia ao clicar na <li>
            window.open(event.target.href, "_blank");
            event.preventDefault(); // Evite o comportamento padrão do link
        }
    });
});
        