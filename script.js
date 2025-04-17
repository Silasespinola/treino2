// Espera o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formAgendamento'); // Pega o formulário
    const resultado = document.getElementById('resultado');  // Pega a div onde vai mostrar o resultado
  
    // Quando o formulário for enviado...
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita que a página recarregue
  
      // Captura os valores dos campos
      const nome = document.getElementById('nome').value;
      const celular = document.getElementById('celular').value;
      const data = document.getElementById('data').value;
      const horario = document.getElementById('horario').value;
      const especialidade = document.getElementById('especialidade').value;
  
      // Verifica se todos os campos estão preenchidos
      if (nome && celular && data && horario && especialidade) {
        const dataFormatada = formatarData(data); // Converte data para formato legível
  
        // Mostra os dados do agendamento na tela
        resultado.innerHTML = `
          <p>✅ Consulta agendada com sucesso!</p>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Celular:</strong> ${celular}</p>
          <p><strong>Data:</strong> ${dataFormatada}</p>
          <p><strong>Horário:</strong> ${horario}</p>
          <p><strong>Especialidade:</strong> ${especialidade}</p>
        `;
  
        // Limpa o formulário e volta o foco para o nome
        form.reset();
        document.getElementById('nome').focus();
      } else {
        // Caso algo esteja vazio, mostra alerta
        resultado.innerHTML = `<p style="color: red;">⚠️ Preencha todos os campos corretamente.</p>`;
      }
    });
  
    // Função que formata a data para o padrão brasileiro
    function formatarData(data) {
      const dataObj = new Date(data);
      return dataObj.toLocaleDateString('pt-BR', {
        weekday: 'long',   // mostra o dia da semana
        year: 'numeric',   // mostra o ano
        month: 'long',     // mostra o nome do mês por extenso
        day: 'numeric'     // mostra o dia do mês
      });
    }
  });
  