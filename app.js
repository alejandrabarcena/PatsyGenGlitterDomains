// 🌈 Diccionario base
const pronouns = ['the', 'our'];
const adjectives = ['great', 'big'];
const nouns = ['jogger', 'racoon'];
const extensions = ['.com', '.io', '.es'];
const hacks = [
  { base: 'pued', ext: '.es' },
  { base: 'viaj', ext: '.ar' },
  { base: 'compren', ext: '.de' }
];

// 🎀 Frases centennial
const phrases = [
  '🚀 Este está listo para despegar.',
  '💎 Este dominio brilla más que un NFT en 2021.',
  '🔥 ¡Boom! Startup vibes totales.',
  '🌈 Ideal para tu imperio digital arcoíris.',
  '🧠 Nivel CEO desbloqueado.',
  '🐾 Patsy dice: lo veo en un cartel en Times Square.',
  '✨ ¡Marca legendaria detectada!',
  '📣 Este se siente viral ya.'
];

// 🎁 Función para generar dominios personalizados
function generateDomainsWithKeyword(keyword) {
  const domains = [];
  const prefix = ['glow', 'lol', 'biz', 'super', 'go'];
  const suffix = ['magic', 'land', 'hub', 'world', 'gen'];

  for (let i = 0; i < 10; i++) {
    const pre = prefix[Math.floor(Math.random() * prefix.length)];
    const suf = suffix[Math.floor(Math.random() * suffix.length)];
    const ext = extensions[Math.floor(Math.random() * extensions.length)];
    domains.push(`${pre}${keyword}${suf}${ext}`);
  }

  return domains;
}

// 🚀 Inicia cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {
  const suggestionButtons = document.querySelectorAll('.suggestions button');
  const inputField = document.getElementById('userInput');
  const resultBubble = document.getElementById('domainResult');
  const sendButton = document.getElementById('sendBtn');
  const clearButton = document.getElementById('clearBtn');
  const copyButton = document.getElementById('copyBtn');
  const downloadButton = document.getElementById('downloadBtn');

  // 🎉 Click en sugerencias
  suggestionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const keyword = inputField.value.trim().toLowerCase() || 'glitter';
      const results = generateDomainsWithKeyword(keyword);
      const combined = results.map((domain, i) => {
        const comment = `<span class="comment">${phrases[i % phrases.length]}</span>`;
        return `✨ ${domain}${comment}`;
      });
      resultBubble.innerHTML = combined.join('<br>');
      resultBubble.dataset.plaintext = results.join('\n');
    });
  });

  // 🚀 Botón enviar
  sendButton.addEventListener('click', () => {
    const keyword = inputField.value.trim().toLowerCase() || 'sparkle';
    const results = generateDomainsWithKeyword(keyword);
    const combined = results.map((domain, i) => {
      const comment = `<span class="comment">${phrases[i % phrases.length]}</span>`;
      return `✨ ${domain}${comment}`;
    });
    resultBubble.innerHTML = combined.join('<br>');
    resultBubble.dataset.plaintext = results.join('\n');
  });

  // 🧼 Limpiar
  clearButton.addEventListener('click', () => {
    inputField.value = '';
    resultBubble.innerHTML = '';
    resultBubble.dataset.plaintext = '';
  });

  // 📋 Copiar
  copyButton.addEventListener('click', () => {
    const text = resultBubble.dataset.plaintext || '';
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => alert('✨ Dominios copiados al portapapeles'))
        .catch(() => alert('⚠️ Error al copiar'));
    } else {
      alert('🤷‍♀️ No hay dominios para copiar');
    }
  });

  // 📁 Descargar
  downloadButton.addEventListener('click', () => {
    const text = resultBubble.dataset.plaintext || '';
    if (text) {
      const blob = new Blob([text], { type: 'text/plain' });
      const link = document.createElement('a');
      link.download = 'patsy-domains.txt';
      link.href = URL.createObjectURL(blob);
      link.click();
    } else {
      alert('📭 Nada que descargar');
    }
  });
});
