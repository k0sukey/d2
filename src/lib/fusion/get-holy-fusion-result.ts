import { RaceKey } from '../../models/race/race-key';

export function getHolyFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Megami';
    case 'Megami':
      return 'Herald';
    case 'Avian':
      return 'Lady';
    case 'Deity':
      return 'Avatar';
    case 'Avatar':
      return 'Megami';
    case 'Holy':
      return null;
    case 'Genma':
      return 'Yoma';
    case 'Fury':
      return 'Kishin';
    case 'Dragon':
      return 'Tyrant';
    case 'Lady':
      return 'Avatar';
    case 'Kishin':
      return 'Lady';
    case 'Divine':
      return 'Herald';
    case 'Yoma':
      return 'Divine';
    case 'Snake':
      return 'Dragon';
    case 'Beast':
      return 'Avatar';
    case 'Fairy':
      return 'Jirae';
    case 'Jirae':
      return 'Beast';
    case 'Jaki':
      return 'Avian';
    case 'Fallen':
      return 'Herald';
    case 'Brute':
      return 'Jaki';
    case 'Femme':
      return 'Jirae';
    case 'Night':
      return 'Jirae';
    case 'Vile':
      return 'Yoma';
    case 'Raptor':
      return 'Wilder';
    case 'Wood':
      return 'Night';
    case 'Wilder':
      return 'Brute';
    case 'Foul':
      return 'Avatar';
    case 'Tyrant':
      return 'Beast';
    case 'Drake':
      return 'Jaki';
    case 'Haunt':
      return 'Divine';
    default:
      throw new Error('Invalid race');
  }
}