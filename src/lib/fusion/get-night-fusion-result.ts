import { RaceKey } from '../../models/race/race-key';

export function getNightFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Fallen';
    case 'Megami':
      return 'Fallen';
    case 'Avian':
      return 'Raptor';
    case 'Deity':
      return 'Wilder';
    case 'Avatar':
      return 'Holy';
    case 'Holy':
      return 'Jirae';
    case 'Genma':
      return 'Holy';
    case 'Fury':
      return 'Jirae';
    case 'Dragon':
      return 'Femme';
    case 'Lady':
      return 'Kishin';
    case 'Kishin':
      return 'Femme';
    case 'Divine':
      return 'Snake';
    case 'Yoma':
      return 'Avatar';
    case 'Snake':
      return 'Fairy';
    case 'Beast':
      return 'Fairy';
    case 'Fairy':
      return 'Divine';
    case 'Jirae':
      return 'Fairy';
    case 'Jaki':
      return 'Yoma';
    case 'Fallen':
      return 'Deity';
    case 'Brute':
      return 'Avian';
    case 'Femme':
      return 'Divine';
    case 'Night':
      return null;
    case 'Vile':
      return 'Jaki';
    case 'Raptor':
      return 'Vile';
    case 'Wilder':
      return 'Beast';
    case 'Foul':
      return 'Yoma';
    case 'Tyrant':
      return 'Jaki';
    case 'Drake':
      return 'Kishin';
    case 'Haunt':
      return 'Femme';
    default:
      throw new Error('Invalid race');
  }
}