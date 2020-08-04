import { RaceKey } from '../../models/race/race-key';

export function getBeastFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Deity';
    case 'Megami':
      return 'Haunt';
    case 'Avian':
      return 'Femme';
    case 'Deity':
      return 'Avatar';
    case 'Avatar':
      return 'Avian';
    case 'Holy':
      return 'Avatar';
    case 'Genma':
      return 'Fairy';
    case 'Fury':
      return 'Avatar';
    case 'Dragon':
      return 'Wilder';
    case 'Lady':
      return 'Femme';
    case 'Kishin':
      return 'Holy';
    case 'Divine':
      return 'Fallen';
    case 'Yoma':
      return 'Fallen';
    case 'Snake':
      return 'Brute';
    case 'Beast':
      return null;
    case 'Fairy':
      return 'Avian';
    case 'Jirae':
      return 'Yoma';
    case 'Jaki':
      return 'Wilder';
    case 'Fallen':
      return 'Deity';
    case 'Brute':
      return 'Fallen';
    case 'Femme':
      return 'Foul';
    case 'Night':
      return 'Fairy';
    case 'Vile':
      return 'Deity';
    case 'Raptor':
      return 'Avian';
    case 'Wilder':
      return 'Vile';
    case 'Foul':
      return 'Wilder';
    case 'Tyrant':
      return 'Vile';
    case 'Drake':
      return 'Foul';
    case 'Haunt':
      return 'Wilder';
    default:
      throw new Error('Invalid race');
  }
}