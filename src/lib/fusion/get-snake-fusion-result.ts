import { RaceKey } from '../../models/race/race-key';

export function getSnakeFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Beast';
    case 'Megami':
      return 'Fairy';
    case 'Avian':
      return 'Kishin';
    case 'Deity':
      return 'Fury';
    case 'Avatar':
      return 'Beast';
    case 'Holy':
      return 'Dragon';
    case 'Genma':
      return 'Avatar';
    case 'Fury':
      return 'Tyrant';
    case 'Dragon':
      return 'Lady';
    case 'Lady':
      return 'Femme';
    case 'Kishin':
      return 'Femme';
    case 'Divine':
      return 'Fairy';
    case 'Yoma':
      return 'Night';
    case 'Snake':
      return null;
    case 'Beast':
      return 'Brute';
    case 'Fairy':
      return 'Avian';
    case 'Jirae':
      return 'Fallen';
    case 'Jaki':
      return 'Drake';
    case 'Fallen':
      return 'Dragon';
    case 'Brute':
      return 'Dragon';
    case 'Femme':
      return 'Drake';
    case 'Night':
      return 'Fairy';
    case 'Vile':
      return 'Drake';
    case 'Raptor':
      return 'Fury';
    case 'Wilder':
      return 'Avian';
    case 'Foul':
      return 'Divine';
    case 'Tyrant':
      return 'Drake';
    case 'Drake':
      return 'Vile';
    case 'Haunt':
      return 'Brute';
    default:
      throw new Error('Invalid race');
  }
}