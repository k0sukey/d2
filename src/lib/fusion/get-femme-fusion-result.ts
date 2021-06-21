import { RaceKey } from '../../models/race/race-key';

export function getFemmeFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Megami';
    case 'Megami':
      return 'Fairy';
    case 'Avian':
      return 'Brute';
    case 'Deity':
      return 'Lady';
    case 'Avatar':
      return 'Megami';
    case 'Holy':
      return 'Jirae';
    case 'Genma':
      return 'Night';
    case 'Fury':
      return 'Lady';
    case 'Dragon':
      return 'Night';
    case 'Lady':
      return 'Megami';
    case 'Kishin':
      return 'Jirae';
    case 'Divine':
      return 'Foul';
    case 'Yoma':
      return 'Brute';
    case 'Snake':
      return 'Drake';
    case 'Beast':
      return 'Foul';
    case 'Fairy':
      return 'Megami';
    case 'Jirae':
      return 'Foul';
    case 'Jaki':
      return 'Haunt';
    case 'Fallen':
      return 'Wilder';
    case 'Brute':
      return 'Jaki';
    case 'Femme':
      return null;
    case 'Night':
      return 'Divine';
    case 'Vile':
      return 'Brute';
    case 'Raptor':
      return 'Wood';
    case 'Wood':
      return 'Raptor';
    case 'Wilder':
      return 'Fallen';
    case 'Foul':
      return 'Wilder';
    case 'Tyrant':
      return 'Lady';
    case 'Drake':
      return 'Foul';
    case 'Haunt':
      return 'Foul';
    default:
      throw new Error('Invalid race');
  }
}
