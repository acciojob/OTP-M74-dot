document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('code-1').focus();
    document.getElementById('code-2').focus();
    document.getElementById('code-3').focus();
    document.getElementById('code-4').focus();
    document.getElementById('code-5').focus();
    document.getElementById('code-6').focus();
});

const codes = document.querySelectorAll('.code');

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = '';
            setTimeout(() => codes[idx + 1]?.focus(), 10);
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1]?.focus(), 10);
        }
    });
});
