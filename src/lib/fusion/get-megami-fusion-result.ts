import { RaceKey } from '../../models/race/race-key';

export function getMegamiFusionResult(key: RaceKey): RaceKey | null {
  switch (key) {
    case 'Herald':
      return 'Deity';
    case 'Megami':
      return null;
    case 'Avian':
      return 'Deity';
    case 'Deity':
      return 'Genma';
    case 'Avatar':
      return 'Herald';
    case 'Holy':
      return 'Herald';
    case 'Genma':
      return 'Divine';
    case 'Fury':
      return 'Deity';
    case 'Dragon':
      return 'Herald';
    case 'Lady':
      return 'Fury';
    case 'Kishin':
      return 'Lady';
    case 'Divine':
      return 'Herald';
    case 'Yoma':
      return 'Avian';
    case 'Snake':
      return 'Fairy';
    case 'Beast':
      return 'Haunt';
    case 'Fairy':
      return 'Haunt';
    case 'Jirae':
      return 'Lady';
    case 'Jaki':
      return 'Femme';
    case 'Fallen':
      return 'Femme';
    case 'Brute':
      return 'Femme';
    case 'Femme':
      return 'Fairy';
    case 'Night':
      return 'Fallen';
    case 'Vile':
      return 'Fury';
    case 'Raptor':
      return 'Tyrant';
    case 'Wilder':
      return 'Holy';
    case 'Foul':
      return 'Fallen';
    case 'Tyrant':
      return 'Haunt';
    case 'Drake':
      return 'Vile';
    case 'Haunt':
      return 'Fury';
    default:
      throw new Error('Invalid race');
  }
}