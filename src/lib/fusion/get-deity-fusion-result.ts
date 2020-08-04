import { RaceKey } from '../../models/race/race-key';

export function getDeityFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Fallen';
    case 'Megami':
      return 'Genma';
    case 'Avian':
      return 'Megami';
    case 'Deity':
      return null;
    case 'Avatar':
      return 'Herald';
    case 'Holy':
      return 'Avatar';
    case 'Genma':
      return 'Tyrant';
    case 'Fury':
      return 'Tyrant';
    case 'Dragon':
      return 'Beast';
    case 'Lady':
      return 'Megami';
    case 'Kishin':
      return 'Fury';
    case 'Divine':
      return 'Fury';
    case 'Yoma':
      return 'Genma';
    case 'Snake':
      return 'Fury';
    case 'Beast':
      return 'Avatar';
    case 'Fairy':
      return 'Night';
    case 'Jirae':
      return 'Brute';
    case 'Jaki':
      return 'Genma';
    case 'Fallen':
      return 'Fury';
    case 'Brute':
      return 'Jirae';
    case 'Femme':
      return 'Lady';
    case 'Night':
      return 'Wilder';
    case 'Vile':
      return 'Avatar';
    case 'Raptor':
      return 'Tyrant';
    case 'Wilder':
      return 'Night';
    case 'Foul':
      return 'Kishin';
    case 'Tyrant':
      return 'Fury';
    case 'Drake':
      return 'Lady';
    case 'Haunt':
      return 'Genma';
    default:
      throw new Error('Invalid race');
  }
}