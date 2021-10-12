// 語言: Javascript
// 架構: 
//  1. printStar作為主程式，為一遞迴函式，執行時需提供一個奇數數值作為 width 。
//  2. getStarLayer 作為內部函式，負責處理並回傳每一層星號長度字串。
function printStar(width, layer=0) {
  if (width % 2 !== 0 && width > 1) {
    let layerStar = getStarLayer(width, layer);
    return `${layerStar}\n${printStar(width-2, ++layer)}\n${layerStar}`;
  } else if (width === 1) {
    return getStarLayer(width, layer);
  } else {
    console.error(`The width should be odd number`);
  }

  function getStarLayer(num, layer) {
    let result = '';
    while(layer > 0) {
      result += ' ';
      layer--;
    }
    while(num > 0) {
      result += '*';
      num--;
    }
    return result;
  }
}

console.log(printStar(5));
/*
  *****
   ***
    *
   ***
  *****
*/
console.log(printStar(7));
/*
  *******
   *****
    ***
     *
    ***
   *****
  *******
*/