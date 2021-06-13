import { RaceKey } from '../../models/race/race-key';

export function getBruteFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Wilder';
    case 'Megami':
      return 'Femme';
    case 'Avian':
      return 'Kishin';
    case 'Deity':
      return 'Jirae';
    case 'Avatar':
      return 'Kishin';
    case 'Holy':
      return 'Jaki';
    case 'Genma':
      return 'Beast';
    case 'Fury':
      return 'Lady';
    case 'Dragon':
      return 'Night';
    case 'Lady':
      return 'Dragon';
    case 'Kishin':
      return 'Deity';
    case 'Divine':
      return 'Jirae';
    case 'Yoma':
      return 'Femme';
    case 'Snake':
      return 'Dragon';
    case 'Beast':
      return 'Fallen';
    case 'Fairy':
      return 'Night';
    case 'Jirae':
      return 'Fairy';
    case 'Jaki':
      return 'Haunt';
    case 'Fallen':
      return 'Snake';
    case 'Brute':
      return null;
    case 'Femme':
      return 'Jaki';
    case 'Night':
      return 'Avian';
    case 'Vile':
      return 'Jaki';
    case 'Raptor':
      return 'Haunt';
    case 'Wood':
      return 'Foul';
    case 'Wilder':
      return 'Fairy';
    case 'Foul':
      return 'Wilder';
    case 'Tyrant':
      return 'Jaki';
    case 'Drake':
      return 'Dragon';
    case 'Haunt':
      return 'Foul';
    default:
      throw new Error('Invalid race');
  }
}