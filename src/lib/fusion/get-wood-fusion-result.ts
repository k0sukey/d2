import { RaceKey } from '../../models/race/race-key';

export function getWoodFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Night';
    case 'Megami':
      return 'Haunt';
    case 'Avian':
      return 'Raptor';
    case 'Deity':
      return 'Night';
    case 'Avatar':
      return 'Brute';
    case 'Holy':
      return 'Night';
    case 'Genma':
      return 'Yoma';
    case 'Fury':
      return 'Vile';
    case 'Dragon':
      return 'Holy';
    case 'Lady':
      return 'Yoma';
    case 'Kishin':
      return 'Brute';
    case 'Divine':
      return 'Jirae';
    case 'Yoma':
      return 'Drake';
    case 'Snake':
      return 'Drake';
    case 'Beast':
      return 'Wilder';
    case 'Fairy':
      return 'Brute';
    case 'Jirae':
      return 'Foul';
    case 'Jaki':
      return 'Jirae';
    case 'Fallen':
      return 'Foul';
    case 'Brute':
      return 'Foul';
    case 'Femme':
      return 'Raptor';
    case 'Night':
      return 'Fairy';
    case 'Vile':
      return 'Jaki';
    case 'Raptor':
      return 'Vile';
    case 'Wood':
      return null;
    case 'Wilder':
      return 'Raptor';
    case 'Foul':
      return 'Beast';
    case 'Tyrant':
      return 'Drake';
    case 'Drake':
      return 'Raptor';
    case 'Haunt':
      return 'Raptor';
    default:
      throw new Error('Invalid race');
  }
}