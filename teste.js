// Validar CPF

// 090.192.469-50

// Pegar os primeiros 9 digitos
// Sequencia de 10 a 02 para multiplicação com a sequencia do CPF

//  0   9   0   1   9   2   4   6   9
//  10  9   8   7   6   5   4   3   2
//  0   81  0   7   54  10  16  18  18

// Somar todos os valores dos resultados das multiplicações

//  Result: 204

//  Multiplicar por 10

// Result: 2040

// Pegar o resto da divisão por 11:   2040 % 11

// Result (primeiro digito verificador ): 5

// Sempre que o resto da divisão for 10 ou 11, vamos considerar igual a 0

// Se o primeiro digito verificador for diferente do DECIMO numero do CPF, o CPF é incorreto e paramos por aqui.

// Agora vamos validar o segundo digito verificador

// Pegar os primeiros 10 digitos do CPF
// Sequencia de 11 a 02 para multiplicação com a sequencia do CPF

//  0   9   0   1   9   2   4   6   9   5
//  11 10   9   8   7   6   5   4   3   2
//  0  90   0   8  63   12  20  24  27  10

// Somar todos os valores dos resultados das multiplicações

//  Result: 254

//  Multiplicar por 10

// Result: 2540

// Pegar o resto da divisão por 11:   2540 % 11

// Sempre que o resto for 10 ou 11, vamos considerar igual a 0

// Result: 10 então vira 0

// Result: 0

// Se o segundo digito verificador for diferente do DECIMO PRIMEIRO numero do CPF, o CPF é incorreto. Caso contrario e CPF é valido
