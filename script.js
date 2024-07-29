/*
================================
   Inicialização do DOM
================================ 
*/

/**
 * Event listener para quando o DOM estiver totalmente carregado.
 * Exibe uma mensagem no console indicando que a página foi carregada.
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada');
});

/*
================================
   Adição de Tarefas
================================ 
*/

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do DOM
    const adicionarTarefaBtn = document.getElementById('adicionar_tarefa');
    const novaTarefaInput = document.getElementById('nova_tarefa');
    const tarefasLista = document.getElementById('tarefas_lista');
    const mensagemErro = document.getElementById('mensagem_erro');

    /**
     * Adiciona uma nova tarefa à lista de tarefas.
     * Valida a entrada para garantir que não esteja vazia.
     * Exibe uma mensagem de erro se a entrada estiver vazia.
     * 
     * @param {Event} event - O evento de clique do botão de adicionar tarefa.
     */
    adicionarTarefaBtn.addEventListener('click', function(event) {
        const tarefaTexto = novaTarefaInput.value.trim();

        // Valida se o campo de entrada está vazio
        if (tarefaTexto === "") {
            mensagemErro.textContent = "A tarefa não pode estar vazia.";
            return;
        }

        // Limpa a mensagem de erro se houver texto na entrada
        mensagemErro.textContent = "";

        // Cria um novo elemento de tarefa
        const novaTarefa = document.createElement('li');
        novaTarefa.classList.add('tarefa');

        // Cria e adiciona o ícone de lixeira à nova tarefa
        const iconeLixeira = document.createElement('i');
        iconeLixeira.classList.add('fa', 'fa-trash');
        iconeLixeira.setAttribute('aria-hidden', 'true');
        
        /**
         * Remove a tarefa da lista de tarefas.
         * 
         * @param {Event} event - O evento de clique do ícone de lixeira.
         */
        iconeLixeira.addEventListener('click', function(event) {
            tarefasLista.removeChild(novaTarefa);
        });

        // Cria e adiciona o ícone de tarefa concluída à nova tarefa
        const iconeConcluido = document.createElement('i');
        iconeConcluido.classList.add('fa', 'fa-calendar-check-o');
        iconeConcluido.setAttribute('aria-hidden', 'true');
        
        /**
         * Marca a tarefa como concluída, alternando a classe 'tarefa-concluida'.
         * 
         * @param {Event} event - O evento de clique do ícone de tarefa concluída.
         */
        iconeConcluido.addEventListener('click', function(event) {
            novaTarefa.classList.toggle('tarefa-concluida');
        });

        // Cria e adiciona o contêiner de conteúdo da tarefa
        const tarefaConteudo = document.createElement('div');
        tarefaConteudo.classList.add('tarefa-conteudo');
        tarefaConteudo.contentEditable = "true";
        tarefaConteudo.textContent = tarefaTexto;

        // Adiciona os elementos criados à nova tarefa
        novaTarefa.appendChild(iconeLixeira);
        novaTarefa.appendChild(iconeConcluido);
        novaTarefa.appendChild(tarefaConteudo);
        tarefasLista.appendChild(novaTarefa);

        // Limpa o campo de entrada
        novaTarefaInput.value = "";
    });

    /**
     * Adiciona uma nova tarefa quando a tecla Enter é pressionada.
     * 
     * @param {Event} event - O evento de tecla pressionada no campo de entrada.
     */
    novaTarefaInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarTarefaBtn.click();
        }
    });
});
