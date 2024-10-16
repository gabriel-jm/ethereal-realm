import { signal } from 'lithen-fns'
import { requestAdverseStatus, requestArmors, requestCommonItems, requestMagicGrimorie, requestProficiencies, requestShields, requestSkillSegment, requestWeapons } from './request-data'
import { SkillSegmentsIds } from '../types'

export const isDataReady = signal(false)

export function initData() {
  const skillSegments: SkillSegmentsIds[] = [
    'combat-techniques',
    'arcane-traditions',
    'cunning-techniques',
    'hunt-tactics',
    'clerical-traditions',
    'alchemy-practices',
    'runic-practices',
    'musical-practices',
    'merchant-tactics'
  ]

  Promise.all([
    requestCommonItems(),
    requestProficiencies(),
    requestWeapons(),
    requestArmors(),
    requestShields(),
    requestAdverseStatus(),
    requestMagicGrimorie(),
    ...skillSegments.map(requestSkillSegment)
  ])
    .then(() => isDataReady.set(true))
}
