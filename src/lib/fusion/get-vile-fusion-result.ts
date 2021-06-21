import { RaceKey } from '../../models/race/race-key';

export function getVileFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Haunt';
    case 'Megami':
      return 'Fury';
    case 'Avian':
      return 'Yoma';
    case 'Deity':
      return 'Avatar';
    case 'Avatar':
      return 'Deity';
    case 'Holy':
      return 'Yoma';
    case 'Genma':
      return 'Fallen';
    case 'Fury':
      return 'Tyrant';
    case 'Dragon':
      return 'Snake';
    case 'Lady':
      return 'Genma';
    case 'Kishin':
      return 'Genma';
    case 'Divine':
      return 'Raptor';
    case 'Yoma':
      return 'Wilder';
    case 'Snake':
      return 'Drake';
    case 'Beast':
      return 'Deity';
    case 'Fairy':
      return 'Jaki';
    case 'Jirae':
      return 'Jaki';
    case 'Jaki':
      return 'Haunt';
    case 'Fallen':
      return 'Raptor';
    case 'Brute':
      return 'Jaki';
    case 'Femme':
      return 'Brute';
    case 'Night':
      return 'Jaki';
    case 'Vile':
      return null;
    case 'Raptor':
      return 'Drake';
    case 'Wood':
      return 'Jaki';
    case 'Wilder':
      return 'Raptor';
    case 'Foul':
      return 'Haunt';
    case 'Tyrant':
      return 'Haunt';
    case 'Drake':
      return 'Wilder';
    case 'Haunt':
      return 'Raptor';
    default:
      throw new Error('Invalid race');
  }
}
