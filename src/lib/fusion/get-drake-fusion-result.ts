import { RaceKey } from '../../models/race/race-key';

export function getDrakeFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Snake';
    case 'Megami':
      return 'Vile';
    case 'Avian':
      return 'Jirae';
    case 'Deity':
      return 'Lady';
    case 'Avatar':
      return 'Kishin';
    case 'Holy':
      return 'Jaki';
    case 'Genma':
      return 'Fury';
    case 'Fury':
      return 'Tyrant';
    case 'Dragon':
      return 'Kishin';
    case 'Lady':
      return 'Dragon';
    case 'Kishin':
      return 'Fury';
    case 'Divine':
      return 'Raptor';
    case 'Yoma':
      return 'Genma';
    case 'Snake':
      return 'Vile';
    case 'Beast':
      return 'Foul';
    case 'Fairy':
      return 'Wood';
    case 'Jirae':
      return 'Snake';
    case 'Jaki':
      return 'Tyrant';
    case 'Fallen':
      return 'Raptor';
    case 'Brute':
      return 'Dragon';
    case 'Femme':
      return 'Foul';
    case 'Night':
      return 'Kishin';
    case 'Vile':
      return 'Wilder';
    case 'Raptor':
      return 'Holy';
    case 'Wood':
      return 'Raptor';
    case 'Wilder':
      return 'Wood';
    case 'Foul':
      return 'Dragon';
    case 'Tyrant':
      return 'Wilder';
    case 'Drake':
      return null;
    case 'Haunt':
      return 'Wood';
    default:
      throw new Error('Invalid race');
  }
}