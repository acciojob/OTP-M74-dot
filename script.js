document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('code-1').focus();
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
