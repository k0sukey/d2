import { RaceKey } from '../../models/race/race-key';

export function getJakiFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Lady';
    case 'Megami':
      return 'Femme';
    case 'Avian':
      return 'Holy';
    case 'Deity':
      return 'Genma';
    case 'Avatar':
      return 'Vile';
    case 'Holy':
      return 'Avian';
    case 'Genma':
      return 'Tyrant';
    case 'Fury':
      return 'Deity';
    case 'Dragon':
      return 'Snake';
    case 'Lady':
      return 'Kishin';
    case 'Kishin':
      return 'Dragon';
    case 'Divine':
      return 'Fairy';
    case 'Yoma':
      return 'Haunt';
    case 'Snake':
      return 'Drake';
    case 'Beast':
      return 'Wilder';
    case 'Fairy':
      return 'Lady';
    case 'Jirae':
      return 'Haunt';
    case 'Jaki':
      return null;
    case 'Fallen':
      return 'Drake';
    case 'Brute':
      return 'Haunt';
    case 'Femme':
      return 'Haunt';
    case 'Night':
      return 'Yoma';
    case 'Vile':
      return 'Haunt';
    case 'Raptor':
      return 'Avian';
    case 'Wood':
      return 'Jirae';
    case 'Wilder':
      return 'Drake';
    case 'Foul':
      return 'Kishin';
    case 'Tyrant':
      return 'Drake';
    case 'Drake':
      return 'Tyrant';
    case 'Haunt':
      return 'Megami';
    default:
      throw new Error('Invalid race');
  }
}
