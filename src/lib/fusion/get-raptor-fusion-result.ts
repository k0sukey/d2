import { RaceKey } from '../../models/race/race-key';

export function getRaptorFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Divine';
    case 'Megami':
      return 'Tyrant';
    case 'Avian':
      return 'Megami';
    case 'Deity':
      return 'Tyrant';
    case 'Avatar':
      return 'Wilder';
    case 'Holy':
      return 'Wilder';
    case 'Genma':
      return 'Lady';
    case 'Fury':
      return 'Tyrant';
    case 'Dragon':
      return 'Fury';
    case 'Lady':
      return 'Kishin';
    case 'Kishin':
      return 'Tyrant';
    case 'Divine':
      return 'Foul';
    case 'Yoma':
      return 'Wood';
    case 'Snake':
      return 'Fury';
    case 'Beast':
      return 'Avian';
    case 'Fairy':
      return 'Wood';
    case 'Jirae':
      return 'Foul';
    case 'Jaki':
      return 'Avian';
    case 'Fallen':
      return 'Drake';
    case 'Brute':
      return 'Haunt';
    case 'Femme':
      return 'Wood';
    case 'Night':
      return 'Wood';
    case 'Vile':
      return 'Drake';
    case 'Raptor':
      return null;
    case 'Wood':
      return 'Vile';
    case 'Wilder':
      return 'Dragon';
    case 'Foul':
      return 'Avian';
    case 'Tyrant':
      return 'Snake';
    case 'Drake':
      return 'Holy';
    case 'Haunt':
      return 'Wilder';
    default:
      throw new Error('Invalid race');
  }
}
