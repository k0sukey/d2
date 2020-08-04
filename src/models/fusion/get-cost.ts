import { Devil } from '../devil/devil';

/**
 * refs https://wikiwiki.jp/d2-megaten-l/%E4%BA%8C%E8%BA%AB%E5%90%88%E4%BD%93
 * 基本コスト + (合体先悪魔のグレード - 合体元悪魔の平均グレード) * グレードごとのコスト
 */
function getBaseCost(result: number, a: number, b: number): number {
  if (result === 1) {
    return 0;
  }
  if (result === 2) {
    if (a === 1 && b === 1) {
      return 50;
    }
    return 25;
  }
  if (result === 3) {
    if (a === 1 && b === 1) {
      return 5400;
    } else if ((a === 1 && b === 2) || (a === 2 && b === 1)) {
      return 5200;
    } else if ((a === 1 && b === 3) || (a === 3 && b === 1)) {
      return 5000;
    } else if (a === 2 && b === 2) {
      return 5000;
    } else if ((a === 2 && b === 3) || (a === 3 && b === 2)) {
      return 2500;
    }
    return 500;
  }
  if (result === 4) {
    if (a === 3 && b === 3) {
      return 300000;
    } else if ((a === 3 && b === 4) || (a === 4 && b === 3)) {
      return 150000;
    }
    return 6000;
  }
  if (a === 4 && b === 4) {
    return 3000000;
  } else if ((a === 4 && b === 5) || (a === 5 && b === 4)) {
    return 1500000;
  }
  return 60000;
}

function getGradeCost(result: number): number {
  if (result <= 9) {
    return 0;
  } else if (result >= 10 && result <= 19) {
    return 0.15;
  } else if (result >= 20 && result <= 29) {
    return 0.3;
  } else if (result >= 30 && result <= 39) {
    return 0.45;
  } else if (result >= 40 && result <= 49) {
    return 60;
  } else if (result >= 50 && result <= 59) {
    return 75;
  } else if (result >= 60 && result <= 69) {
    return 1080;
  } else if (result >= 70 && result <= 79) {
    return 1260;
  } else if (result >= 80 && result <= 89) {
    return 14400;
  }
  return 16200;
}

export function getCost(result: Devil, a: Devil, b: Devil): number {
  const cost = Math.floor(
    getBaseCost(result.rare, a.rare, b.rare) +
      (result.grade - (a.grade + b.grade) / 2) * getGradeCost(result.grade),
  );
  if (result.rare === 5) {
    return Math.floor(cost * 0.7);
  }
  if (result.rare === 4) {
    return Math.floor(cost * 0.5);
  }
  return cost;
}
