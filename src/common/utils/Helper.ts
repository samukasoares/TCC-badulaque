
 

export function formatarCelular(numero: string): string {
    // Verifica se o número tem o tamanho adequado para ser um celular válido no Brasil
    if (numero.length === 11) {
        const DDD = numero.slice(0, 2); // Pega os dois primeiros números (DDD)
        const parte1 = numero.slice(2, 7); // Pega os próximos 5 números
        const parte2 = numero.slice(7, 11); // Pega os últimos 4 números
        return `(${DDD}) ${parte1}-${parte2}`;
    }
    // Retorna o número sem formatação caso não tenha o tamanho esperado
    return numero;
}


export function formatarValorMonetario(valor: number | null | undefined) {
    if (typeof valor !== 'number') {
        return 'N/A'; // Retorna 'N/A' ou algum texto padrão se o valor for indefinido
    }
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function formatarValorMonetarioCusto(valor: number | null | undefined) {
    if (typeof valor !== 'number') {
        return 'N/A'; // Retorna 'N/A' ou algum texto padrão se o valor for indefinido
    }
    return valor.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL',
        minimumFractionDigits: 4, // Define o número mínimo de casas decimais
        maximumFractionDigits: 4 // Define o número máximo de casas decimais
    });
}