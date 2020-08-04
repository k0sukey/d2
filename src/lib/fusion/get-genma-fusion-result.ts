import { RaceKey } from '../../models/race/race-key';

export function getGenmaFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Wilder';
    case 'Megami':
      return 'Divine';
    case 'Avian':
      return 'Megami';
    case 'Deity':
      return 'Tyrant';
    case 'Avatar':
      return 'Kishin';
    case 'Holy':
      return 'Yoma';
    case 'Genma':
      return null;
    case 'Fury':
      return 'Dragon';
    case 'Dragon':
      return 'Holy';
    case 'Lady':
      return 'Megami';
    case 'Kishin':
      return 'Yoma';
    case 'Divine':
      return 'Holy';
    case 'Yoma':
      return 'Snake';
    case 'Snake':
      return 'Avatar';
    case 'Beast':
      return 'Fairy';
    case 'Fairy':
      return 'Snake';
    case 'Jirae':
      return 'Avatar';
    case 'Jaki':
      return 'Tyrant';
    case 'Fallen':
      return 'Yoma';
    case 'Brute':
      return 'Beast';
    case 'Femme':
      return 'Night';
    case 'Night':
      return 'Holy';
    case 'Vile':
      return 'Fallen';
    case 'Raptor':
      return 'Lady';
    case 'Wilder':
      return 'Yoma';
    case 'Foul':
      return 'Snake';
    case 'Tyrant':
      return 'Yoma';
    case 'Drake':
      return 'Fury';
    case 'Haunt':
      return 'Femme';
    default:
      throw new Error('Invalid race');
  }
}