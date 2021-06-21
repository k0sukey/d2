import { RaceKey } from '../../models/race/race-key';

export function getHeraldFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return null;
    case 'Megami':
      return 'Deity';
    case 'Avian':
      return 'Megami';
    case 'Deity':
      return 'Fallen';
    case 'Avatar':
      return 'Avian';
    case 'Holy':
      return 'Megami';
    case 'Genma':
      return 'Wilder';
    case 'Fury':
      return 'Tyrant';
    case 'Dragon':
      return 'Holy';
    case 'Lady':
      return 'Deity';
    case 'Kishin':
      return 'Fury';
    case 'Divine':
      return 'Megami';
    case 'Yoma':
      return 'Brute';
    case 'Snake':
      return 'Beast';
    case 'Beast':
      return 'Deity';
    case 'Fairy':
      return 'Holy';
    case 'Jirae':
      return 'Deity';
    case 'Jaki':
      return 'Lady';
    case 'Fallen':
      return 'Lady';
    case 'Brute':
      return 'Wilder';
    case 'Femme':
      return 'Megami';
    case 'Night':
      return 'Fallen';
    case 'Vile':
      return 'Haunt';
    case 'Raptor':
      return 'Divine';
    case 'Wood':
      return 'Night';
    case 'Wilder':
      return 'Haunt';
    case 'Foul':
      return 'Divine';
    case 'Tyrant':
      return 'Wilder';
    case 'Drake':
      return 'Snake';
    case 'Haunt':
      return 'Fallen';
    default:
      throw new Error('Invalid race');
  }
}
