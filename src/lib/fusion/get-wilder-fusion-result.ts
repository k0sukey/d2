import { RaceKey } from '../../models/race/race-key';

export function getWilderFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Haunt';
    case 'Megami':
      return 'Holy';
    case 'Avian':
      return 'Avatar';
    case 'Deity':
      return 'Night';
    case 'Avatar':
      return 'Beast';
    case 'Holy':
      return 'Brute';
    case 'Genma':
      return 'Yoma';
    case 'Fury':
      return 'Haunt';
    case 'Dragon':
      return 'Beast';
    case 'Lady':
      return 'Haunt';
    case 'Kishin':
      return 'Dragon';
    case 'Divine':
      return 'Raptor';
    case 'Yoma':
      return 'Avian';
    case 'Snake':
      return 'Avian';
    case 'Beast':
      return 'Vile';
    case 'Fairy':
      return 'Wood';
    case 'Jirae':
      return 'Wood';
    case 'Jaki':
      return 'Drake';
    case 'Fallen':
      return 'Raptor';
    case 'Brute':
      return 'Fairy';
    case 'Femme':
      return 'Fallen';
    case 'Night':
      return 'Beast';
    case 'Vile':
      return 'Raptor';
    case 'Raptor':
      return 'Dragon';
    case 'Wood':
      return 'Raptor';
    case 'Wilder':
      return null;
    case 'Foul':
      return 'Beast';
    case 'Tyrant':
      return 'Drake';
    case 'Drake':
      return 'Wood';
    case 'Haunt':
      return 'Wood';
    default:
      throw new Error('Invalid race');
  }
}