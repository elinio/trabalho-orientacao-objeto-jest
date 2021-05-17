import { Matematica } from './Matematica'

// Implemente os testes!
describe('Testa funcionaliades matematicas', () => {
  test('Deve testar o método somatorio', () => {
    const matematica = new Matematica()
    const numeros = [1, 2, 3, 4]
    expect(matematica.somatorio(numeros)).toBe(10)
  })

  test('Deve testar o método produto', () => {
    const matematica = new Matematica()
    const numeros = [1, 2, 3, 4]
    expect(matematica.produto(numeros)).toBe(24)
  })

  test('Deve testar o método deltaBhaskara', () => {
    const matematica = new Matematica()
    expect(matematica.deltaBhaskara(1, 5, -100)).toBe(425)
  })

  test('Deve testar o método fatorial', () => {
    const matematica = new Matematica()
    expect(matematica.fatorial(10)).toBe(3628800)
  })

  test('Deve testar o método ehPrimo', () => {
    const matematica = new Matematica()
    expect(matematica.ehPrimo(7)).toBe(true)
  })
})
