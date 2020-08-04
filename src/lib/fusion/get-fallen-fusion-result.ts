import { RaceKey } from '../../models/race/race-key';

export function getFallenFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Lady';
    case 'Megami':
      return 'Femme';
    case 'Avian':
      return 'Raptor';
    case 'Deity':
      return 'Fury';
    case 'Avatar':
      return 'Divine';
    case 'Holy':
      return 'Herald';
    case 'Genma':
      return 'Yoma';
    case 'Fury':
      return 'Tyrant';
    case 'Dragon':
      return 'Snake';
    case 'Lady':
      return 'Dragon';
    case 'Kishin':
      return 'Beast';
    case 'Divine':
      return 'Megami';
    case 'Yoma':
      return 'Jirae';
    case 'Snake':
      return 'Dragon';
    case 'Beast':
      return 'Deity';
    case 'Fairy':
      return 'Divine';
    case 'Jirae':
      return 'Dragon';
    case 'Jaki':
      return 'Drake';
    case 'Fallen':
      return null;
    case 'Brute':
      return 'Snake';
    case 'Femme':
      return 'Wilder';
    case 'Night':
      return 'Deity';
    case 'Vile':
      return 'Raptor';
    case 'Raptor':
      return 'Drake';
    case 'Wilder':
      return 'Raptor';
    case 'Foul':
      return 'Genma';
    case 'Tyrant':
      return 'Drake';
    case 'Drake':
      return 'Raptor';
    case 'Haunt':
      return 'Brute';
    default:
      throw new Error('Invalid race');
  }
}