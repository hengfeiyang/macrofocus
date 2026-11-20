const study = document.querySelector('.study');
const divider = study.querySelector('.divider');
const controls = document.querySelector('.crop-controls');
const cropName = document.querySelector('#crop-name');

function updateDivider() {
  study.style.setProperty('--split', divider.value + '%');
  divider.setAttribute('aria-valuetext', divider.value + '% single frame');
}

divider.addEventListener('input', updateDivider);
updateDivider();
divider.disabled = false;
document.querySelector('#study-instruction').textContent =
  'Drag the divider to see how detail changes when more of the beetle comes into focus.';

function updateCrop() {
  const selected = controls.querySelector('input:checked');
  study.dataset.crop = selected.value;
  cropName.textContent = selected.labels[0].textContent.trim();
}

controls.addEventListener('change', updateCrop);
updateCrop();
controls.hidden = false;
