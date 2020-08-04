import { RaceKey } from '../../models/race/race-key';

export function getYomaFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Brute';
    case 'Megami':
      return 'Avian';
    case 'Avian':
      return 'Night';
    case 'Deity':
      return 'Genma';
    case 'Avatar':
      return 'Jirae';
    case 'Holy':
      return 'Divine';
    case 'Genma':
      return 'Snake';
    case 'Fury':
      return 'Holy';
    case 'Dragon':
      return 'Genma';
    case 'Lady':
      return 'Jaki';
    case 'Kishin':
      return 'Femme';
    case 'Divine':
      return 'Fairy';
    case 'Yoma':
      return null;
    case 'Snake':
      return 'Night';
    case 'Beast':
      return 'Fallen';
    case 'Fairy':
      return 'Holy';
    case 'Jirae':
      return 'Lady';
    case 'Jaki':
      return 'Haunt';
    case 'Fallen':
      return 'Jirae';
    case 'Brute':
      return 'Femme';
    case 'Femme':
      return 'Brute';
    case 'Night':
      return 'Avatar';
    case 'Vile':
      return 'Wilder';
    case 'Raptor':
      return 'Haunt';
    case 'Wilder':
      return 'Avian';
    case 'Foul':
      return 'Snake';
    case 'Tyrant':
      return 'Avian';
    case 'Drake':
      return 'Genma';
    case 'Haunt':
      return 'Jirae';
    default:
      throw new Error('Invalid race');
  }
}