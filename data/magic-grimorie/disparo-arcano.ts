import { Spell } from '../../src/types'
import { md } from '../utils'

export const disparoArcano: Spell = {
  id: 'spll_asdjkneu',
  name: 'Disparo Arcano',
  concentration: false,
  domain: 'arcane',
  energyCost: 1,
  effect: 'Dano Arcano: 1D6 + Perícia de Conjuração.',
  description: md`
    Você dispara uma pequena esfera de pura energia arcana contra seu alvo.
    Essa é a manifestação de magia mais simples e pura, simplesmente concentrando
    uma pequena quantidade de energia arcana no tamanho de uma esfera e a disparando.
    <br/><br/>
    Esta magia persegue o alvo que você possar ver e sempre o acerta.
  `
}
