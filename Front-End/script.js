// Função para gerar bipe tecnológico
function playBeep(frequency = 400, duration = 0.1) {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = 'square'; // Som mais "bit" de computador antigo
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    gainNode.gain.setValueAtTime(0.1, context.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start();
    oscillator.stop(context.currentTime + duration);
}

// Configuração inicial
window.onload = () => {
    // Chuva binária
    const binaryContainer = document.getElementById('binary');
    if (binaryContainer) {
        for (let i = 0; i < 50; i++) {
            const span = document.createElement('span');
            span.innerText = Math.round(Math.random());
            span.style.left = Math.random() * 100 + 'vw';
            span.style.animationDuration = (Math.random() * 4 + 2) + 's';
            span.style.opacity = Math.random();
            binaryContainer.appendChild(span);
        }
    }

    // Adiciona som a todos os links e botões
    const interactiveElements = document.querySelectorAll('a, button, .card-tech');
    interactiveElements.forEach(el => {
        el.addEventListener('mousedown', () => playBeep(600, 0.05));
        el.addEventListener('mouseenter', () => playBeep(200, 0.02));
    });
};