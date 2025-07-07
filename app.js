const extensions = ['.com', '.io', '.es'];
const hacks = [
  { base: 'pued', ext: '.es' },
  { base: 'viaj', ext: '.ar' },
  { base: 'compren', ext: '.de' }
];

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

function generate(type, keyword = '') {
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  if (type === 'hack') {
    const hack = pick(hacks);
    return `${hack.base}${hack.ext}`;
  }

  if (!keyword.trim()) keyword = 'glitterpup';
  const prefixMap = {
    divertido: 'lol',
    profesional: 'biz',
    mágico: 'glow'
  };
  const prefix = prefixMap[type] || '';
  const ext = pick(extensions);
  return `${prefix}${keyword}${ext}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.suggestions button');
  const input = document.getElementById('userInput');
  const output = document.getElementById('domainResult');
  const send = document.getElementById('sendBtn');
  const clear = document.getElementById('clearBtn');
  const copy = document.getElementById('copyBtn');
  const download = document.getElementById('downloadBtn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const keyword = input.value.trim() || 'patsy';
      const domain = generate(type, keyword);
      output.innerHTML = `✨ Patsy sugiere: ${domain}`;
      output.dataset.plaintext = domain;
    });
  });

  send.addEventListener('click', () => {
    const keyword = input.value.trim() || 'patsy';
    const results = extensions.map(ext => `${keyword}${ext}`);
    const combined = results.map((domain, i) => {
      const phrase = phrases[i % phrases.length];
      return `✨ ${domain}<span class="comment">${phrase}</span>`;
    });
    output.innerHTML = combined.join('<br>');
    output.dataset.plaintext = results.join('\n');
  });

  clear.addEventListener('click', () => {
    input.value = '';
    output.innerHTML = '';
    output.dataset.plaintext = '';
  });

  copy.addEventListener('click', () => {
    const text = output.dataset.plaintext || '';
    navigator.clipboard.writeText(text)
      .then(() => alert('✨ Copiado'))
      .catch(() => alert('⚠️ Error al copiar'));
  });

  download.addEventListener('click', () => {
    const text = output.dataset.plaintext || '';
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
