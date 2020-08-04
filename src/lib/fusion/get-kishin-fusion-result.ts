import { RaceKey } from '../../models/race/race-key';

export function getKishinFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Fury';
    case 'Megami':
      return 'Lady';
    case 'Avian':
      return 'Lady';
    case 'Deity':
      return 'Fury';
    case 'Avatar':
      return 'Dragon';
    case 'Holy':
      return 'Lady';
    case 'Genma':
      return 'Yoma';
    case 'Fury':
      return 'Lady';
    case 'Dragon':
      return 'Fury';
    case 'Lady':
      return 'Tyrant';
    case 'Kishin':
      return null;
    case 'Divine':
      return 'Night';
    case 'Yoma':
      return 'Femme';
    case 'Snake':
      return 'Femme';
    case 'Beast':
      return 'Holy';
    case 'Fairy':
      return 'Brute';
    case 'Jirae':
      return 'Snake';
    case 'Jaki':
      return 'Dragon';
    case 'Fallen':
      return 'Beast';
    case 'Brute':
      return 'Deity';
    case 'Femme':
      return 'Jirae';
    case 'Night':
      return 'Femme';
    case 'Vile':
      return 'Genma';
    case 'Raptor':
      return 'Tyrant';
    case 'Wilder':
      return 'Dragon';
    case 'Foul':
      return 'Fairy';
    case 'Tyrant':
      return 'Haunt';
    case 'Drake':
      return 'Fury';
    case 'Haunt':
      return 'Dragon';
    default:
      throw new Error('Invalid race');
  }
}