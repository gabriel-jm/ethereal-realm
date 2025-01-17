import { html, raw } from 'lithen-fns'
import { dataStore } from '@/data/stores'
import { weaponTinyCard } from './card/tiny/weapon-tiny-card'
import { whenDataIsReady } from '@/common/utils'
import { Weapon } from '@/types'

export function weaponsDocPage(setEquip: (equip: Weapon | null) => void) {
  return html`
    <div>
      ${whenDataIsReady(() => {
        const { description, content } = dataStore.items.weapons

        return html`
          <div class="doc-description">
            <h1>⚔️ Armas</h1>

            <details class="details-list">
              <summary><h3>Atributos</h3></summary>
              <p class="attrs-content">${raw(description!)}</p>
            </details>
          </div>

          <section class="doc-content">
            ${content.map(weapon => weaponTinyCard({
              ...weapon,
              setEquip
            }))}
          </section>
        `
      })}
    </div>
  `
}
