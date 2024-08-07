import { html } from 'lithen-fns'
import { Weapon, WeaponAttributes } from '@/types'
import { RarityStore, WeaponsStore } from '@/data/stores'
import { damageCard } from '@/damage'

type WeaponDocCardProps = Weapon

export function weaponDocCard(props: WeaponDocCardProps) {
  const typeName = WeaponsStore.getTypeName(props.type)
  const rarityName = RarityStore.getName(props.rarity)
  const icon = WeaponsStore.getIcon(props.type)

  // <!-- <img class="icon" src="" alt="🗡️" /> -->
  return html`
    <div class="equip-doc-card">
      <div class="header">
        <div>
          <h4 class="name">${props.name}</h4>
          <p class="${props.rarity}">${typeName} ${rarityName}</p>
        </div>
        <div>
          <span class="icon">${icon}</span>
        </div>
      </div>
      
      <div class="prop-container">
        <p class="prop-name">Dano</p>
        ${props.damage.map(dmg => {
          return html`
            <p>
              <span class="dmg-value">
                ${dmg.value}
              </span>
              <span class="card-group">
                ${dmg.types.map(type => damageCard(type))}
              </span>
            </p>
          `
        })}
      </div>
      
      <div class="prop-container">
        <p class="prop-name">Atributos</p>
        <p class="card-group">
          ${props.attributes.map(weaponAttrCard)}
        </p>
      </div>
      
      <div class="prop-container group">
        <div>
          <p class="prop-name">Preço</p>
          <p>$${props.price}</p>
        </div>
        <div>
          <p class="prop-name">Iniciativa</p>
          <p>
            ${props.initiativeModifier > 0
              ? `+${props.initiativeModifier}`
              : props.initiativeModifier.toString()
            }
          </p>
        </div>
        <div>
          <p class="prop-name">Alcance</p>
          <p>${props.range}</p>
        </div>
      </div>

      <div>
        <p class="prop-name">Descrição</p>
        <p class="description">
          ${props.description}
        </p>
      </div>
    </div>
  `
}

export function weaponAttrCard(attr: WeaponAttributes) {
  const name = WeaponsStore.getAttributeName(attr)

  return html`
    <span class="equip-attr">${name}</span>
  `
}
