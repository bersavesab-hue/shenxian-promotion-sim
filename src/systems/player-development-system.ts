import { Player } from '../domain/player';

export function createPlayer(name: string, origin: string): Player {
  return {
    id: Date.now().toString(),
    name,
    origin,
    identity: '凡人',
    deityPosition: null,
    rank: '无品',
    attributes: {
      merit: 0,
      incense: 0,
      reputation: 0,
      heavenlyMerit: 0
    },
    history: ['出生于人间']
  };
}

export function recordHistory(player: Player, event: string) {
  player.history.push(event);
}
