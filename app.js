// 🌈 Diccionario base
const pronouns   = ['the', 'our'];
const adjectives = ['great', 'big'];
const nouns      = ['jogger', 'racoon'];
const extensions = ['.com', '.io', '.es'];
const hacks = [
  { base: 'pued', ext: '.es' },
  { base: 'viaj', ext: '.ar' },
  { base: 'compren', ext: '.de' }
];

<<<<<<< HEAD
// Función auxiliar
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

// Generador según tipo
function generate(type, keyword = '') {
  if (type === 'hack') {
    const h = pick(hacks);
    return h.base + h.ext;
  }
  if (!keyword) keyword = pick(adj) + pick(noun);
  const prefixMap = {
    divertido:   'lol',
    profesional: 'biz',
    mágico:      'glow'
  };
  const ext = pick(extensions);
  return (prefixMap[type] || '') + keyword + ext;
}

// DOM
const sugBtns = document.querySelectorAll('.suggestions button');
const input   = document.getElementById('userInput');
const result  = document.getElementById('domainResult');
const sendBtn = document.getElementById('sendBtn');
const clearBtn= document.getElementById('clear');

// Sugerencias
sugBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;
    result.textContent = `✨ Patsy sugiere: ${generate(type)}`;
  });
});

// Enviar palabra clave
sendBtn.addEventListener('click', () => {
  const word = input.value.trim().toLowerCase();
  if (!word) {
    result.textContent = '⚠️ Escribe tu palabra clave primero.';
    return;
  }
  result.textContent = `🌟 Tu dominio custom: ${generate('custom', word)}`;
});

// Limpiar
clearBtn.addEventListener('click', () => {
  input.value = '';
  result.textContent = '';
=======
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

// 🛠️ Todas las combinaciones posibles
function generateAllCombinations() {
  const results = [];
  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const ext of extensions) {
          results.push(`${pronoun}${adjective}${noun}${ext}`);
        }
      }
    }
  }
  return results;
}

// ⚡ Sugerencias rápidas por tipo
function generate(type, keyword = '') {
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  if (type === 'hack') {
    const hack = pick(hacks);
    return `${hack.base}${hack.ext}`;
  }

  if (!keyword) keyword = `${pick(adjectives)}${pick(nouns)}`;

  const prefixMap = {
    divertido: 'lol',
    profesional: 'biz',
    mágico: 'glow'
  };

  const prefix = prefixMap[type] || '';
  const ext = pick(extensions);
  return `${prefix}${keyword}${ext}`;
}

// 🚀 Inicia cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {
  const suggestionButtons = document.querySelectorAll('.suggestions button');
  const inputField        = document.getElementById('userInput');
  const resultBubble      = document.getElementById('domainResult');
  const sendButton        = document.getElementById('sendBtn');
  const clearButton       = document.getElementById('clearBtn');
  const copyButton        = document.getElementById('copyBtn');
  const downloadButton    = document.getElementById('downloadBtn');

  // 🎉 Click en sugerencias
  suggestionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const result = generate(type);
      resultBubble.innerHTML = `✨ Patsy sugiere: ${result}`;
      resultBubble.dataset.plaintext = result;
    });
  });

  // 🚀 Mostrar todas las combinaciones
  sendButton.addEventListener('click', () => {
    const domains = generateAllCombinations();

    const combined = domains.map((domain, i) => {
      const emojiLine = `✨ ${domain}`;
      const comment = `<span class="comment">${phrases[i % phrases.length]}</span>`;
      return `${emojiLine}${comment}`;
    });

    resultBubble.innerHTML = combined.join('<br>');
    resultBubble.dataset.plaintext = domains.join('\n');
  });

  // 🧼 Limpiar
  clearButton.addEventListener('click', () => {
    inputField.value = '';
    resultBubble.innerHTML = '';
    resultBubble.dataset.plaintext = '';
  });

  // 📋 Copiar al portapapeles
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

  // 📁 Descargar archivo .txt
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
>>>>>>> 8e93c5a (🦄 Proyecto listo: README + estilos + funciones completas)
});
