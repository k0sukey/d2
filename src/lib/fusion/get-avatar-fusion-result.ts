import { RaceKey } from '../../models/race/race-key';

export function getAvatarFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Avian';
    case 'Megami':
      return 'Herald';
    case 'Avian':
      return 'Holy';
    case 'Deity':
      return 'Herald';
    case 'Avatar':
      return null;
    case 'Holy':
      return 'Megami';
    case 'Genma':
      return 'Kishin';
    case 'Fury':
      return 'Dragon';
    case 'Dragon':
      return 'Fury';
    case 'Lady':
      return 'Genma';
    case 'Kishin':
      return 'Dragon';
    case 'Divine':
      return 'Avian';
    case 'Yoma':
      return 'Jirae';
    case 'Snake':
      return 'Beast';
    case 'Beast':
      return 'Avian';
    case 'Fairy':
      return 'Divine';
    case 'Jirae':
      return 'Avian';
    case 'Jaki':
      return 'Vile';
    case 'Fallen':
      return 'Divine';
    case 'Brute':
      return 'Kishin';
    case 'Femme':
      return 'Megami';
    case 'Night':
      return 'Holy';
    case 'Vile':
      return 'Deity';
    case 'Raptor':
      return 'Wilder';
    case 'Wood':
      return 'Brute';
    case 'Wilder':
      return 'Beast';
    case 'Foul':
      return 'Raptor';
    case 'Tyrant':
      return 'Genma';
    case 'Drake':
      return 'Kishin';
    case 'Haunt':
      return 'Divine';
    default:
      throw new Error('Invalid race');
  }
}
