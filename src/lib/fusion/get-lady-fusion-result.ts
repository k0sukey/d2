import { RaceKey } from '../../models/race/race-key';

export function getLadyFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Deity';
    case 'Megami':
      return 'Fury';
    case 'Avian':
      return 'Fury';
    case 'Deity':
      return 'Megami';
    case 'Avatar':
      return 'Genma';
    case 'Holy':
      return 'Avatar';
    case 'Genma':
      return 'Megami';
    case 'Fury':
      return 'Genma';
    case 'Dragon':
      return 'Fury';
    case 'Lady':
      return null;
    case 'Kishin':
      return 'Tyrant';
    case 'Divine':
      return 'Fury';
    case 'Yoma':
      return 'Jaki';
    case 'Snake':
      return 'Femme';
    case 'Beast':
      return 'Femme';
    case 'Fairy':
      return 'Foul';
    case 'Jirae':
      return 'Kishin';
    case 'Jaki':
      return 'Kishin';
    case 'Fallen':
      return 'Dragon';
    case 'Brute':
      return 'Dragon';
    case 'Femme':
      return 'Megami';
    case 'Night':
      return 'Kishin';
    case 'Vile':
      return 'Genma';
    case 'Raptor':
      return 'Kishin';
    case 'Wilder':
      return 'Haunt';
    case 'Foul':
      return 'Jaki';
    case 'Tyrant':
      return 'Genma';
    case 'Drake':
      return 'Dragon';
    case 'Haunt':
      return 'Wilder';
    default:
      throw new Error('Invalid race');
  }
}