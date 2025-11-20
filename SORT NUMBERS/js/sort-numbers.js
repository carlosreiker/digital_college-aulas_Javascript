(function(){
    const draw = () => Math.floor(Math.random() * 10);
    let drawnNumber = draw();

    const input = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');
    const retryBtn = document.getElementById('retryBtn');
    const result = document.getElementById('result');

    function setResult(text, ok){
        result.textContent = text;
        result.style.color = ok ? 'green' : 'crimson';
    }

    guessBtn.addEventListener('click', ()=>{
        const val = (input.value || '').trim();
        if(val === ''){
            setResult('Digite um número entre 0 e 9.', false);
            input.focus();
            return;
        }

        const n = Number(val);
        if(!Number.isInteger(n) || n < 0 || n > 9){
            setResult('Entrada inválida. Use um número inteiro entre 0 e 9.', false);
            input.focus();
            return;
        }

        if(n === drawnNumber){
            setResult(`Parabéns! Você acertou! O número sorteado foi ${drawnNumber}.`, true);
            // desabilita o botão Chutar após acerto
            guessBtn.disabled = true;
            // opcional: desabilitar o input também para evitar novos chutes
            input.disabled = true;
        } else {
            setResult(`Você errou! Tente novamente`, false);
        }
    });

    retryBtn.addEventListener('click', ()=>{
        drawnNumber = draw();
        input.value = '';
        result.textContent = '';
        // reabilita o botão e o input para nova tentativa
        guessBtn.disabled = false;
        input.disabled = false;
        input.focus();
    });

    // permitir enviar com Enter
    input.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter') guessBtn.click();
    });
})();