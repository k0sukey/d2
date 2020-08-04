import { RaceKey } from '../../models/race/race-key';

export function getHauntFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Fallen';
    case 'Megami':
      return 'Fury';
    case 'Avian':
      return 'Beast';
    case 'Deity':
      return 'Genma';
    case 'Avatar':
      return 'Divine';
    case 'Holy':
      return 'Divine';
    case 'Genma':
      return 'Femme';
    case 'Fury':
      return 'Beast';
    case 'Dragon':
      return 'Genma';
    case 'Lady':
      return 'Wilder';
    case 'Kishin':
      return 'Dragon';
    case 'Divine':
      return 'Jaki';
    case 'Yoma':
      return 'Jirae';
    case 'Snake':
      return 'Brute';
    case 'Beast':
      return 'Wilder';
    case 'Fairy':
      return 'Holy';
    case 'Jirae':
      return 'Jaki';
    case 'Jaki':
      return 'Megami';
    case 'Fallen':
      return 'Brute';
    case 'Brute':
      return 'Foul';
    case 'Femme':
      return 'Foul';
    case 'Night':
      return 'Femme';
    case 'Vile':
      return 'Raptor';
    case 'Raptor':
      return 'Wilder';
    case 'Wilder':
      return 'Night';
    case 'Foul':
      return 'Brute';
    case 'Tyrant':
      return 'Beast';
    case 'Drake':
      return 'Kishin';
    case 'Haunt':
      return null;
    default:
      throw new Error('Invalid race');
  }
}