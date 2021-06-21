import { RaceKey } from '../../models/race/race-key';

export function getDragonFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Holy';
    case 'Megami':
      return 'Herald';
    case 'Avian':
      return 'Avatar';
    case 'Deity':
      return 'Beast';
    case 'Avatar':
      return 'Fury';
    case 'Holy':
      return 'Tyrant';
    case 'Genma':
      return 'Holy';
    case 'Fury':
      return 'Fallen';
    case 'Dragon':
      return null;
    case 'Lady':
      return 'Fury';
    case 'Kishin':
      return 'Fury';
    case 'Divine':
      return 'Drake';
    case 'Yoma':
      return 'Genma';
    case 'Snake':
      return 'Lady';
    case 'Beast':
      return 'Wilder';
    case 'Fairy':
      return 'Night';
    case 'Jirae':
      return 'Tyrant';
    case 'Jaki':
      return 'Snake';
    case 'Fallen':
      return 'Snake';
    case 'Brute':
      return 'Night';
    case 'Femme':
      return 'Night';
    case 'Night':
      return 'Femme';
    case 'Vile':
      return 'Snake';
    case 'Raptor':
      return 'Fury';
    case 'Wood':
      return 'Holy';
    case 'Wilder':
      return 'Beast';
    case 'Foul':
      return 'Drake';
    case 'Tyrant':
      return 'Fallen';
    case 'Drake':
      return 'Kishin';
    case 'Haunt':
      return 'Genma';
    default:
      throw new Error('Invalid race');
  }
}
