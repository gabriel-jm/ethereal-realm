import { Collection, Spell } from '../../src/types'
import { md } from '../utils'
import { chamaEspiritual } from './chama-espiritual'
import { chamaSagrada } from './chama-sagrada'
import { chicoteDeEspinhos } from './chicote-de-espinhos'
import { descargaEletrica } from './descarga-eletrica'
import { disparoArcano } from './disparo-arcano'
import { disparoDeFogo } from './disparo-de-fogo'
import { disparoGelido } from './disparo-gelido'
import { escudoArcano } from './escudo-arcano'
import { fecharFerimentos } from './fechar-ferimentos'
import { ilusãoMenor } from './ilusão-menor'
import { marcaArcana } from './marca-arcana'
import { mensagem } from './mensagem'
import { ondaDeForça } from './onda-de-força'
import { rajadaDeVentos } from './rajada-de-ventos'

export const magicGrimoriePageInfo: Collection<Spell> = {
  id: 'magic-grimoire',
  title: 'Grimório de Magias',
  description: md`
    ## Atributos das magias

    **Habilidade de Conjuração:** Boa parte das magia precisam ou de um teste
    de sucesso do alvo ou do usuário para o efeito desejado aconteça. A princípio
    nenhum atributo ou perícia é requisitado para definir esses valores e graças
    a isso será usado um **CD padrão de 8** ou **+4 para jogadas de dados**.
    Contudo, este valor pode ser alterado se o personagem possuir alguma habilidade
    que o permita utilizar alguma combinação de *Atributo + Perícia* para definir
    essa CD, se for o caso o calculo passa a ser **CD = Base da Magia + Atributo
    de Conjuração + Perícia de Conjuração**, habilidade que permitem isso são
    conhecidas como **Habilidade de Conjuração**.

    **Atributo de Conjuração:** Atributo utilizado para a realização de magias,
    por padrão nenhum atributo pode ser utilizado e é necessário uma habilidade
    que proporcione isso. Atributos que são utilizados para isso são **Inteligencia**,
    **Sabedoria** e **Carisma**.

    **Perícia de Conjuração:** Perícia utilizada para determinar a potência das
    magias, por padrão nenhuma perícia é utilizada e deve considerar o valor de
    4 nesses casos. As perícias de conjuração são liberadas juntamente com os
    atributos ao adquirir uma habilidade. Perícias de conjuração podem muitas
    vezes serem utilizadas para determinar valor dinâmicos na magia. Você pode
    ver quais perícias são consideradas como **Perícias de Conjuração** na página
    de [Perícias.](/docs/proficiencies)

    **Concentração:** Normalmente um usuário de magia só pode ter uma magia que
    requer concentração ativa, se conjurar outra magia que requer concentração
    a anterior é desfeita. Existem efeitos que removem a concentração automaticamente,
    como choque elétrico, congelamento, derrubada e atordoamento.
  `,
  levels: [
    {
      requirements: 'Nível de Personagem 1.',
      items: [
        disparoArcano,
        descargaEletrica,
        disparoDeFogo,
        disparoGelido,
        rajadaDeVentos,
        chamaSagrada,
        ondaDeForça,
        ilusãoMenor,
        marcaArcana,
        fecharFerimentos,
        mensagem,
        chicoteDeEspinhos,
        chamaEspiritual,
        escudoArcano
      ]
    }
  ]
}
