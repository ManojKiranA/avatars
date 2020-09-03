import type { utils } from '../../styles/gridy/node_modules/@dicebear/avatars';
import Options from '../options';
import * as filter from './filter';

export function skin(prng: utils.prng.IPrng, options: Options) {
  let colors = filter.byOptionName(options, 'skinColor', {
    tanned: '#FD9841',
    yellow: '#F9D562',
    pale: '#FFDBB4',
    light: '#EDB98A',
    brown: '#D08B5B',
    darkBrown: '#AE5D29',
    black: '#614335',
  });

  return prng.pick(Object.values(colors));
}

export function clothing(prng: utils.prng.IPrng, options: Options) {
  let colors = filter.byOptionName(options, 'clothingColor', {
    black: '#262E33',
    blue01: '#65C9FF',
    blue02: '#5199E4',
    blue03: '#25557C',
    gray01: '#E5E5E5',
    gray02: '#929598',
    heather: '#3C4F5C',
    pastelBlue: '#B1E2FF',
    pastelGreen: '#A7FFC4',
    pastelOrange: '#FFDEB5',
    pastelRed: '#FFAFB9',
    pastelYellow: '#FFFFB1',
    pink: '#FF488E',
    red: '#FF5C5C',
    white: '#FFFFFF',
  });

  return prng.pick(Object.values(colors));
}

export function hat(prng: utils.prng.IPrng, options: Options) {
  let colors = filter.byOptionName(options, 'hatColor', {
    black: '#262E33',
    blue01: '#65C9FF',
    blue02: '#5199E4',
    blue03: '#25557C',
    gray01: '#E5E5E5',
    gray02: '#929598',
    heather: '#3C4F5C',
    pastelBlue: '#B1E2FF',
    pastelGreen: '#A7FFC4',
    pastelOrange: '#FFDEB5',
    pastelRed: '#FFAFB9',
    pastelYellow: '#FFFFB1',
    pink: '#FF488E',
    red: '#FF5C5C',
    white: '#FFFFFF',
  });

  return prng.pick(Object.values(colors));
}

export function hair(prng: utils.prng.IPrng, options: Options) {
  let colors = filter.byOptionName(options, 'hairColor', {
    auburn: '#A55728',
    black: '#2C1B18',
    blonde: '#B58143',
    blondeGolden: '#D6B370',
    brown: '#724133',
    brownDark: '#4A312C',
    pastelPink: '#F59797',
    platinum: '#ECDCBF',
    red: '#C93305',
    graySilver: '#E8E1E1',
  });

  return prng.pick(Object.values(colors));
}

export function facialHair(prng: utils.prng.IPrng, options: Options) {
  let colors = filter.byOptionName(options, 'facialHairColor', {
    auburn: '#A55728',
    black: '#2C1B18',
    blonde: '#B58143',
    blondeGolden: '#D6B370',
    brown: '#724133',
    brownDark: '#4A312C',
    pastelPink: '#F59797',
    platinum: '#ECDCBF',
    red: '#C93305',
    graySilver: '#E8E1E1',
  });

  return prng.pick(Object.values(colors));
}
