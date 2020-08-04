import { RaceKey } from '../../models/race/race-key';

export function getJiraeFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Deity';
    case 'Megami':
      return 'Lady';
    case 'Avian':
      return 'Yoma';
    case 'Deity':
      return 'Brute';
    case 'Avatar':
      return 'Avian';
    case 'Holy':
      return 'Beast';
    case 'Genma':
      return 'Avatar';
    case 'Fury':
      return 'Brute';
    case 'Dragon':
      return 'Tyrant';
    case 'Lady':
      return 'Kishin';
    case 'Kishin':
      return 'Snake';
    case 'Divine':
      return 'Fallen';
    case 'Yoma':
      return 'Lady';
    case 'Snake':
      return 'Fallen';
    case 'Beast':
      return 'Yoma';
    case 'Fairy':
      return 'Beast';
    case 'Jirae':
      return null;
    case 'Jaki':
      return 'Haunt';
    case 'Fallen':
      return 'Dragon';
    case 'Brute':
      return 'Fairy';
    case 'Femme':
      return 'Foul';
    case 'Night':
      return 'Fairy';
    case 'Vile':
      return 'Jaki';
    case 'Raptor':
      return 'Foul';
    case 'Wilder':
      return 'Brute';
    case 'Foul':
      return 'Fairy';
    case 'Tyrant':
      return 'Jaki';
    case 'Drake':
      return 'Snake';
    case 'Haunt':
      return 'Jaki';
    default:
      throw new Error('Invalid race');
  }
}