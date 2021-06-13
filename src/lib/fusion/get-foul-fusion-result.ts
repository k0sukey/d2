import { RaceKey } from '../../models/race/race-key';

export function getFoulFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Divine';
    case 'Megami':
      return 'Fallen';
    case 'Avian':
      return 'Raptor';
    case 'Deity':
      return 'Kishin';
    case 'Avatar':
      return 'Raptor';
    case 'Holy':
      return 'Avatar';
    case 'Genma':
      return 'Snake';
    case 'Fury':
      return 'Yoma';
    case 'Dragon':
      return 'Drake';
    case 'Lady':
      return 'Jaki';
    case 'Kishin':
      return 'Fairy';
    case 'Divine':
      return 'Fallen';
    case 'Yoma':
      return 'Snake';
    case 'Snake':
      return 'Divine';
    case 'Beast':
      return 'Wilder';
    case 'Fairy':
      return 'Haunt';
    case 'Jirae':
      return 'Fairy';
    case 'Jaki':
      return 'Kishin';
    case 'Fallen':
      return 'Genma';
    case 'Brute':
      return 'Wilder';
    case 'Femme':
      return 'Wilder';
    case 'Night':
      return 'Yoma';
    case 'Vile':
      return 'Haunt';
    case 'Raptor':
      return 'Avian';
    case 'Wood':
      return 'Beast';
    case 'Wilder':
      return 'Beast';
    case 'Foul':
      return null;
    case 'Tyrant':
      return 'Snake';
    case 'Drake':
      return 'Dragon';
    case 'Haunt':
      return 'Brute';
    default:
      throw new Error('Invalid race');
  }
}