document.getElementById('solarForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Número do vendedor (DDD + Número)
  const telefoneVendedor = "5513981165710"; 

  // Pega os dados digitados pelo usuário
  const conta = document.getElementById('contaLuz').value;
  const imovel = document.getElementById('tipoImovel').value;
  const nome = document.getElementById('nomeCliente').value;

  // Monta a mensagem para o WhatsApp
  const textoMensagem = `Olá! Meu nome é ${nome}. Fiz uma simulação no site:\n` +
                        `- Gasto mensal: ${conta}\n` +
                        `- Imóvel: ${imovel}\n` +
                        `Gostaria de receber uma proposta!`;

  // Codifica o texto para URL
  const mensagemFormatada = encodeURIComponent(textoMensagem);

  // Redireciona para o WhatsApp
  const urlWhatsApp = `https://wa.me/${telefoneVendedor}?text=${mensagemFormatada}`;
  window.open(urlWhatsApp, '_blank');
});