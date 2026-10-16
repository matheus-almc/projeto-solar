document.getElementById('solarForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Telefone formatado do Willian Luiz
  const telefoneVendedor = "5513996598621"; 

  // Captura dos dados do formulário
  const conta = document.getElementById('contaLuz').value;
  const imovel = document.getElementById('tipoImovel').value;
  const nome = document.getElementById('nomeCliente').value;
  const cidade = document.getElementById('cidadeCliente').value;

  // Rastreamento de Conversão do Meta Pixel (se o script estiver ativo)
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Lead', {
      content_name: 'Simulacao Etecc Solar',
      value: conta,
      currency: 'BRL'
    });
  }

  // Montagem da mensagem formatada para o WhatsApp do Willian
  const mensagem = `Olá Willian Luiz! Meu nome é *${nome}* (${cidade}).\n` +
                   `Fiz uma simulação pelo site da Etecc Solar e quero receber meu estudo de viabilidade:\n\n` +
                   `⚡ *Gasto Mensal:* ${conta}\n` +
                   `🏠 *Perfil:* ${imovel}\n\n` +
                   `Gostaria de agendar a apresentação e garantir a *Manutenção Grátis* no meu projeto!`;

  // Redireciona diretamente para o aplicativo do WhatsApp
  const urlWhatsApp = `https://wa.me/${telefoneVendedor}?text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsApp, '_blank');
});


// =========================================================
// ANIMAÇÃO DE SCROLL REVEAL (INTERSECTION OBSERVER)
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Dispara a animação pouco antes do elemento entrar total na tela
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Anima apenas uma vez para manter a fluidez
      }
    });
  }, observerOptions);

  // Seleciona todos os elementos que possuem a classe .reveal
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));
});