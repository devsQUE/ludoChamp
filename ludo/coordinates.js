const r = document.querySelectorAll(".r");
const rstop = document.querySelectorAll(".rstop");
const rlast = document.querySelectorAll(".rlast");
const rrest = document.querySelectorAll(".rrest");

const g = document.querySelectorAll(".g");
const gstop = document.querySelectorAll(".gstop");
const glast = document.querySelectorAll(".glast");
const grest = document.querySelectorAll(".grest");

const b = document.querySelectorAll(".b");
const bstop = document.querySelectorAll(".bstop");
const blast = document.querySelectorAll(".blast");
const brest = document.querySelectorAll(".brest");

const y = document.querySelectorAll(".y");
const ystop = document.querySelectorAll(".ystop");
const ylast = document.querySelectorAll(".ylast");
const yrest = document.querySelectorAll(".yrest");

const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const winner = [red, green, blue, yellow];

const coor0 = rstop[0];
const coor1 = r[1];
const coor2 = r[2];
const coor3 = r[3];
const coor4 = r[4];
const coor5 = g[9];
const coor6 = g[7];
const coor7 = g[5];
const coor8 = gstop[1];
const coor9 = g[3];
const coor10 = g[0];
const coor11 = g[1];
const coor12 = g[2];
const coor13 = gstop[0];
const coor14 = g[4];
const coor15 = g[6];
const coor16 = g[8];
const coor17 = g[10];
const coor18 = b[0];
const coor19 = b[1];
const coor20 = b[2];
const coor21 = bstop[0];
const coor22 = b[3];
const coor23 = b[4];
const coor24 = b[5];
const coor25 = b[10];
const coor26 = bstop[1];
const coor27 = b[9];
const coor28 = b[8];
const coor29 = b[7];
const coor30 = b[6];
const coor31 = y[1];
const coor32 = y[3];
const coor33 = y[5];
const coor34 = ystop[0];
const coor35 = y[7];
const coor36 = y[10];
const coor37 = y[9];
const coor38 = y[8];
const coor39 = ystop[1];
const coor40 = y[6];
const coor41 = y[4];
const coor42 = y[2];
const coor43 = y[0];
const coor44 = r[10];
const coor45 = r[9];
const coor46 = r[8];
const coor47 = rstop[1];
const coor48 = r[7];
const coor49 = r[6];
const coor50 = r[5];
const coor51 = r[0];

// HOME ENTRANCE
//P1
const coor100 = rlast[0];
const coor101 = rlast[1];
const coor102 = rlast[2];
const coor103 = rlast[3];
const coor104 = rlast[4];
const coor105 = winner[0];
//P2
const coor200 = glast[0];
const coor201 = glast[1];
const coor202 = glast[2];
const coor203 = glast[3];
const coor204 = glast[4];
const coor205 = winner[1];
//P3
const coor300 = blast[4];
const coor301 = blast[3];
const coor302 = blast[2];
const coor303 = blast[1];
const coor304 = blast[0];
const coor305 = winner[2];
//P4
const coor400 = ylast[4];
const coor401 = ylast[3];
const coor402 = ylast[2];
const coor403 = ylast[1];
const coor404 = ylast[0];
const coor405 = winner[3];

// BASE POSITIONS
//P1
const coor500 = rrest[0];
const coor501 = rrest[1];
const coor502 = rrest[2];
const coor503 = rrest[3];
//P1
const coor600 = grest[0];
const coor601 = grest[1];
const coor602 = grest[2];
const coor603 = grest[3];
//P1
const coor700 = brest[0];
const coor701 = brest[1];
const coor702 = brest[2];
const coor703 = brest[3];
//P1
const coor800 = yrest[0];
const coor801 = yrest[1];
const coor802 = yrest[2];
const coor803 = yrest[3];

export const COORDINATES_MAP = {
  0: coor0,
  1: coor1,
  2: coor2,
  3: coor3,
  4: coor4,
  5: coor5,
  6: coor6,
  7: coor7,
  8: coor8,
  9: coor9,
  10: coor10,
  11: coor11,
  12: coor12,
  13: coor13,
  14: coor14,
  15: coor15,
  16: coor16,
  17: coor17,
  18: coor18,
  19: coor19,
  20: coor20,
  21: coor21,
  22: coor22,
  23: coor23,
  24: coor24,
  25: coor25,
  26: coor26,
  27: coor27,
  28: coor28,
  29: coor29,
  30: coor30,
  31: coor31,
  32: coor32,
  33: coor33,
  34: coor34,
  35: coor35,
  36: coor36,
  37: coor37,
  38: coor38,
  39: coor39,
  40: coor40,
  41: coor41,
  42: coor42,
  43: coor43,
  44: coor44,
  45: coor45,
  46: coor46,
  47: coor47,
  48: coor48,
  49: coor49,
  50: coor50,
  51: coor51,

  // HOME ENTRANCE
  // P1
  100: coor100,
  101: coor101,
  102: coor102,
  103: coor103,
  104: coor104,
  105: coor105,
  // P2
  200: coor200,
  201: coor201,
  202: coor202,
  203: coor203,
  204: coor204,
  205: coor205,
  // P3
  300: coor300,
  301: coor301,
  302: coor302,
  303: coor303,
  304: coor304,
  305: coor305,
  // P4
  400: coor400,
  401: coor401,
  402: coor402,
  403: coor403,
  404: coor404,
  405: coor405,

  // BASE POSITIONS
  // P1
  500: coor500,
  501: coor501,
  502: coor502,
  503: coor503,
  // P2
  600: coor600,
  601: coor601,
  602: coor602,
  603: coor603,
  // P3
  700: coor700,
  701: coor701,
  702: coor702,
  703: coor703,
  // P4
  800: coor800,
  801: coor801,
  802: coor802,
  803: coor803,
};

export const PLAYERS = ["Nobody"];

export const WIN = ["NoWinner"];

export const BASE_POSITIONS = {
  P1: [500, 501, 502, 503],
  P2: [600, 601, 602, 603],
  P3: [700, 701, 702, 703],
  P4: [800, 801, 802, 803],
};

export const START_POSITIONS = {
  P1: 0,
  P2: 13,
  P3: 26,
  P4: 39,
};

export const HOME_ENTRANCE = {
  P1: [100, 101, 102, 103, 104],
  P2: [200, 201, 202, 203, 204],
  P3: [300, 301, 302, 303, 304],
  P4: [400, 401, 402, 403, 404],
};

export const HOME_POSITIONS = {
  P1: 105,
  P2: 205,
  P3: 305,
  P4: 405,
};

export const TURNING_POINTS = {
  P1: 50,
  P2: 11,
  P3: 24,
  P4: 37,
};

export const SAFE_POSITIONS = [0, 8, 13, 21, 26, 34, 39, 47];

export const STATE = {
  DICE_NOT_ROLLED: "DICE_NOT_ROLLED",
  DICE_ROLLED: "DICE_ROLLED",
};
