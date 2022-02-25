const recepcionista  = require('../main');


test('deveTerIdadeMinimaDezoitoParaFestaDePeao', () => {
    const resultado = recepcionista.recepcionista(18, 18);
    expect(resultado).toBe(true);
    
}
)

test('naoDeveTerIdadeMinimaDezoitoParaFestaDePeao', () => {
    const resultado = recepcionista.recepcionista(18, 18);
    expect(resultado).toBe(true)

} 
)