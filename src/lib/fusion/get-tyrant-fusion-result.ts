import { RaceKey } from '../../models/race/race-key';

export function getTyrantFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Wilder';
    case 'Megami':
      return 'Haunt';
    case 'Avian':
      return 'Fairy';
    case 'Deity':
      return 'Fury';
    case 'Avatar':
      return 'Genma';
    case 'Holy':
      return 'Beast';
    case 'Genma':
      return 'Yoma';
    case 'Fury':
      return 'Snake';
    case 'Dragon':
      return 'Fallen';
    case 'Lady':
      return 'Genma';
    case 'Kishin':
      return 'Haunt';
    case 'Divine':
      return 'Raptor';
    case 'Yoma':
      return 'Avian';
    case 'Snake':
      return 'Drake';
    case 'Beast':
      return 'Vile';
    case 'Fairy':
      return 'Night';
    case 'Jirae':
      return 'Jaki';
    case 'Jaki':
      return 'Drake';
    case 'Fallen':
      return 'Drake';
    case 'Brute':
      return 'Jaki';
    case 'Femme':
      return 'Lady';
    case 'Night':
      return 'Jaki';
    case 'Vile':
      return 'Haunt';
    case 'Raptor':
      return 'Snake';
    case 'Wood':
      return 'Drake';
    case 'Wilder':
      return 'Drake';
    case 'Foul':
      return 'Snake';
    case 'Tyrant':
      return null;
    case 'Drake':
      return 'Wilder';
    case 'Haunt':
      return 'Beast';
    default:
      throw new Error('Invalid race');
  }
}
