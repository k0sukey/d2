import { RaceKey } from '../../models/race/race-key';

export function getDivineFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Megami';
    case 'Megami':
      return 'Herald';
    case 'Avian':
      return 'Snake';
    case 'Deity':
      return 'Fury';
    case 'Avatar':
      return 'Avian';
    case 'Holy':
      return 'Herald';
    case 'Genma':
      return 'Holy';
    case 'Fury':
      return 'Vile';
    case 'Dragon':
      return 'Drake';
    case 'Lady':
      return 'Fury';
    case 'Kishin':
      return 'Night';
    case 'Divine':
      return null;
    case 'Yoma':
      return 'Fairy';
    case 'Snake':
      return 'Fairy';
    case 'Beast':
      return 'Fallen';
    case 'Fairy':
      return 'Holy';
    case 'Jirae':
      return 'Fallen';
    case 'Jaki':
      return 'Fairy';
    case 'Fallen':
      return 'Megami';
    case 'Brute':
      return 'Jirae';
    case 'Femme':
      return 'Foul';
    case 'Night':
      return 'Snake';
    case 'Vile':
      return 'Raptor';
    case 'Raptor':
      return 'Foul';
    case 'Wilder':
      return 'Raptor';
    case 'Foul':
      return 'Fallen';
    case 'Tyrant':
      return 'Raptor';
    case 'Drake':
      return 'Raptor';
    case 'Haunt':
      return 'Jaki';
    default:
      throw new Error('Invalid race');
  }
}