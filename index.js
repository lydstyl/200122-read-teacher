const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
].map(txt => `<span>${txt.toUpperCase()}</span>`);

const sounds = [
  'a',
  'e',
  'i',
  'o',
  'u'
  // 'y',
  // 'an',
  // 'au',
  // 'é',
  // 'è',
  // 'ê',
  // 'en',
  // 'eau',
  // 'ou',
  // 'on',
  // 'oi'
].map(txt => `<span style="color:red;">${txt.toUpperCase()}</span>`);

const gridTab = document.getElementById('tab');

// first line
html = '<div class="cell"></div>';
sounds.forEach(sound => {
  html += `<div class="cell">${sound}</div>`;
});

// other lines
alphabet.forEach(letter => {
  html += `<div class="cell">${letter}</div>`;
  sounds.forEach(sound => {
    html += `<div class="cell">${letter} ${sound}</div>`;
  });
});

gridTab.innerHTML = html;
