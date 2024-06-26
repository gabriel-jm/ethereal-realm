import './skill-page-title-list.css'
import { html } from 'lithen-fns'

export type SkillPageTitleListProps = {
  variant?: 'home-link' | 'link' | 'button'
  onClick?(skillId: string): void
}

export function skillPageTitleList(props: SkillPageTitleListProps) {
  const skillsTitles = {
    'combat-techniques': 'Técnicas de Combate',
    'hunt-tactics': 'Táticas de Caça (Beta)',
    'arcane-traditions': 'Tradições Arcanas',
    'clerical-traditions': 'Tradições Clericais',
    'cunning-techniques': 'Técnicas Ardilosas',
    'merchant-tactics': 'Táticas de Mercante',
    'alchemy-practices': 'Práticas da Alquimia',
    'runic-practices': 'Práticas Rúnicas (Beta)',
    'musical-practices': 'Práticas Musicais (Beta)'
  }

  return html`
    <ul class="skills-title-list ${props.variant}">
      ${Object
          .entries(skillsTitles)
          .map(([target, title]) => {
            return skillPageTitle({
              title,
              skillId: target,
              variant: props.variant,
              onClick: props.onClick
            })
          })
      }
    </ul>
  `
}

export type SkillPageTitleProps = {
  title: string
  skillId: string
  variant?: 'home-link' | 'link' | 'button'
  onClick?(id: string): void
}

export function skillPageTitle({
  title,
  skillId,
  variant = 'button',
  onClick
}: SkillPageTitleProps) {
  const handleClick = () => onClick?.(skillId)

  if (variant === 'home-link') {
    return html`
      <app-link
        class="home-link"
        to="/docs/${skillId}"
      >
        <span class="skill-title">
          <img src="/images/${skillId}.png" width="24" />
          <span>${title}</span>
        </span>
      </app-link>
    `
  }

  return html`
    <li
      class="skill-title ${variant}"
      on-click=${onClick && handleClick}
    >
      <img src="/images/${skillId}.png" width="30" />
      <span>${title}</span>
    </li>
  `
}
