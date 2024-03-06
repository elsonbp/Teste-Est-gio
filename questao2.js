function verificarSePertenceFibonacci(numero) {
    let fibAnterior = 0;
    let fibAtual = 1;

    if (numero === 0 || numero === 1) {
        console.log("O número informado pertence à sequência de Fibonacci.");
        return;
    }

    while (fibAtual <= numero) {
        let fibProximo = fibAnterior + fibAtual;
        if (fibProximo === numero) {
            console.log("O número informado pertence à sequência de Fibonacci.");
            return;
        }
        fibAnterior = fibAtual;
        fibAtual = fibProximo;
    }

    console.log("O número informado NÃO pertence à sequência de Fibonacci.");
}

const numeroInformado = 21;
verificarSePertenceFibonacci(numeroInformado);
