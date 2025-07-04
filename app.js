// Palabras y hacks
const pronoun   = ['the', 'our'];
const adj       = ['sparkling','big','fab','cosmic'];
const noun      = ['unicorn','jogger','idea','galaxy'];
const extensions= ['.com','.io','.es'];
const hacks     = [
  { base: 'pued', ext: '.es' },
  { base: 'viaj', ext: '.ar' },
  { base: 'compren', ext: '.de' }
];

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
});
