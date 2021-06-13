import { RaceKey } from '../../models/race/race-key';

export function getFairyFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Holy';
    case 'Megami':
      return 'Haunt';
    case 'Avian':
      return 'Night';
    case 'Deity':
      return 'Night';
    case 'Avatar':
      return 'Divine';
    case 'Holy':
      return 'Jirae';
    case 'Genma':
      return 'Snake';
    case 'Fury':
      return 'Brute';
    case 'Dragon':
      return 'Night';
    case 'Lady':
      return 'Foul';
    case 'Kishin':
      return 'Brute';
    case 'Divine':
      return 'Holy';
    case 'Yoma':
      return 'Holy';
    case 'Snake':
      return 'Avian';
    case 'Beast':
      return 'Avian';
    case 'Fairy':
      return null;
    case 'Jirae':
      return 'Beast';
    case 'Jaki':
      return 'Lady';
    case 'Fallen':
      return 'Divine';
    case 'Brute':
      return 'Night';
    case 'Femme':
      return 'Megami';
    case 'Night':
      return 'Divine';
    case 'Vile':
      return 'Jaki';
    case 'Raptor':
      return 'Wood';
    case 'Wood':
      return 'Brute';
    case 'Wilder':
      return 'Wood';
    case 'Foul':
      return 'Haunt';
    case 'Tyrant':
      return 'Night';
    case 'Drake':
      return 'Wood';
    case 'Haunt':
      return 'Wood';
    default:
      throw new Error('Invalid race');
  }
}