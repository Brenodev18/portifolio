
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 1. Selecione os elementos
const abrirModalBtn = document.getElementById('abrirModalBtn');
const meuModal = document.getElementById('meuModal');
const fecharModalBtn = document.getElementById('fecharModalBtn');
const cancelarModalBtn = document.getElementById('cancelarModalBtn');

// 2. Adicione um event listener ao botão de abrir
abrirModalBtn.addEventListener('click', () => {
  meuModal.showModal(); // Mostra o modal usando o método nativo do <dialog>
});

// 3. Adicione event listeners aos botões de fechar
fecharModalBtn.addEventListener('click', () => {
  meuModal.close(); // Fecha o modal
});

cancelarModalBtn.addEventListener('click', () => {
  meuModal.close(); // Fecha o modal
});

// Opcional: fechar o modal se o usuário clicar fora dele
meuModal.addEventListener('click', (event) => {
  if (event.target === meuModal) {
    meuModal.close();
  }
});
