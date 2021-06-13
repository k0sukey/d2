import { RaceKey } from '../../models/race/race-key';

export function getFuryFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Tyrant';
    case 'Megami':
      return 'Deity';
    case 'Avian':
      return 'Kishin';
    case 'Deity':
      return 'Tyrant';
    case 'Avatar':
      return 'Dragon';
    case 'Holy':
      return 'Kishin';
    case 'Genma':
      return 'Dragon';
    case 'Fury':
      return null;
    case 'Dragon':
      return 'Fallen';
    case 'Lady':
      return 'Genma';
    case 'Kishin':
      return 'Lady';
    case 'Divine':
      return 'Vile';
    case 'Yoma':
      return 'Holy';
    case 'Snake':
      return 'Tyrant';
    case 'Beast':
      return 'Avatar';
    case 'Fairy':
      return 'Brute';
    case 'Jirae':
      return 'Brute';
    case 'Jaki':
      return 'Deity';
    case 'Fallen':
      return 'Tyrant';
    case 'Brute':
      return 'Lady';
    case 'Femme':
      return 'Lady';
    case 'Night':
      return 'Jirae';
    case 'Vile':
      return 'Tyrant';
    case 'Raptor':
      return 'Tyrant';
    case 'Wood':
      return 'Vile';
    case 'Wilder':
      return 'Haunt';
    case 'Foul':
      return 'Yoma';
    case 'Tyrant':
      return 'Snake';
    case 'Drake':
      return 'Tyrant';
    case 'Haunt':
      return 'Beast';
    default:
      throw new Error('Invalid race');
  }
}