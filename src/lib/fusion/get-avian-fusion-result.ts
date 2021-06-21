import { RaceKey } from '../../models/race/race-key';

export function getAvianFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Megami';
    case 'Megami':
      return 'Deity';
    case 'Avian':
      return null;
    case 'Deity':
      return 'Megami';
    case 'Avatar':
      return 'Holy';
    case 'Holy':
      return 'Lady';
    case 'Genma':
      return 'Megami';
    case 'Fury':
      return 'Kishin';
    case 'Dragon':
      return 'Avatar';
    case 'Lady':
      return 'Fury';
    case 'Kishin':
      return 'Lady';
    case 'Divine':
      return 'Snake';
    case 'Yoma':
      return 'Night';
    case 'Snake':
      return 'Kishin';
    case 'Beast':
      return 'Femme';
    case 'Fairy':
      return 'Night';
    case 'Jirae':
      return 'Yoma';
    case 'Jaki':
      return 'Holy';
    case 'Fallen':
      return 'Raptor';
    case 'Brute':
      return 'Kishin';
    case 'Femme':
      return 'Brute';
    case 'Night':
      return 'Raptor';
    case 'Vile':
      return 'Yoma';
    case 'Raptor':
      return 'Megami';
    case 'Wood':
      return 'Raptor';
    case 'Wilder':
      return 'Avatar';
    case 'Foul':
      return 'Raptor';
    case 'Tyrant':
      return 'Fairy';
    case 'Drake':
      return 'Jirae';
    case 'Haunt':
      return 'Beast';
    default:
      throw new Error('Invalid race');
  }
}
