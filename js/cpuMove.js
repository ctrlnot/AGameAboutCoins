// NICE TRY BRUH .. Now go away and play fair :^)
function cpuMove(){var a,b=checkActivePiles(coinCountPerPile,!0),c=checkActivePiles(coinCountPerPile,!1);switch(b){case 1:a=coinCountPerPile[c[0]]-1,a>1?pushAndSplice(getThatPile(c[0]),a):pushAndSplice(getThatPile(c[0]),1);break;case 2:a=Math.abs(coinCountPerPile[c[0]]-coinCountPerPile[c[1]]),1==coinCountPerPile[c[0]]?pushAndSplice(getThatPile(c[1]),coinCountPerPile[c[1]]):1==coinCountPerPile[c[1]]?pushAndSplice(getThatPile(c[0]),coinCountPerPile[c[0]]):coinCountPerPile[c[0]]>coinCountPerPile[c[1]]?pushAndSplice(getThatPile(c[0]),a):coinCountPerPile[c[1]]>coinCountPerPile[c[0]]?pushAndSplice(getThatPile(c[1]),a):pushAndSplice(getThatPile(c[getRandomNum(0,1)]),getRandomNum(1,coinCountPerPile[c[getRandomNum(0,1)]]));break;case 3:default:var d,a;if(0==getKey(coinCountPerPile)){for(var f=0;f<coinCountPerPile.length;f++)void 0==a?(a=coinCountPerPile[f],d=f):coinCountPerPile[f]<a&&(a=coinCountPerPile[f],d=f);pushAndSplice(getThatPile(getRandomNum(0,coinCountPerPile.length-1)),getRandomNum(1,coinCountPerPile[d]))}else if(checkCommon(coinCountPerPile)){a=findUncommon(coinCountPerPile);for(var f=0;f<coinCountPerPile.length;f++)coinCountPerPile[f]==a&&(d=f);pushAndSplice(getThatPile(d),a)}else if(checkOnes(coinCountPerPile)){a=findUncommon(coinCountPerPile);for(var f=0;f<coinCountPerPile.length;f++)coinCountPerPile[f]==a&&(d=f);pushAndSplice(getThatPile(d),a-1)}else if(checkFirstKey(coinCountPerPile,!0)){for(var f=0;f<coinCountPerPile.length;f++)1!=coinCountPerPile[f]&&2!=coinCountPerPile[f]&&3!=coinCountPerPile[f]&&(a=coinCountPerPile[f],d=f);var g=a-checkFirstKey(coinCountPerPile,!1);pushAndSplice(getThatPile(d),g)}else if(checkSecondKey(coinCountPerPile,!0)){for(var f=0;f<coinCountPerPile.length;f++)1!=coinCountPerPile[f]&&4!=coinCountPerPile[f]&&5!=coinCountPerPile[f]&&(a=coinCountPerPile[f],d=f);var g=a-checkSecondKey(coinCountPerPile,!1);pushAndSplice(getThatPile(d),g)}else if(3==coinCountPerPile[0]&&5==coinCountPerPile[1]&&7==coinCountPerPile[2])pushAndSplice(getThatPile(getRandomNum(0,coinCountPerPile.length-1)),1);else{for(var h=[],f=0;f<coinCountPerPile.length;f++)h.push(decToBin(coinCountPerPile[f]));for(var i=getUnpairedVal(h),f=0;f<coinCountPerPile.length;f++){var j=coinCountPerPile[f]&i;if(j==i){pushAndSplice(getThatPile(f),i);break}}}}turn=1}function checkActivePiles(a,b){for(var c=0,d=[],e=0;e<a.length;e++)a[e]>0&&(c++,d.push(e));return b?c:d}function arrToBinary(a){for(var b=[],c=0;c<a.length;c++)array.push(decToBin(a[c]));return b}function getKey(a){for(var b,c=0;c<coinCountPerPile.length;c++)void 0==b?b=coinCountPerPile[c]:b^=coinCountPerPile[c];return b}function checkCommon(a){for(var c=-1,d=0;d<a.length;d++)1==a[d]&&c++;return 1!=c&&(a[0]==a[1]||a[0]==a[2]||a[1]==a[2])}function checkOnes(a){for(var b=-1,c=0;c<a.length;c++)1==a[c]&&b++;return 1==b}function findUncommon(a){return a[0]==a[1]?a[2]:a[1]==a[2]?a[0]:a[0]==a[2]?a[1]:void 0}function checkFirstKey(a,b){for(var c=!1,d=!1,e=!1,f=0;f<a.length;f++)1==a[f]&&(c=!0),2==a[f]&&(d=!0),3==a[f]&&(e=!0);return c&&d?!!b||3:c&&e?!!b||2:d&&e?!!b||1:!((!c&&!d||!c&&!e||!d&&!e)&&b)&&void 0}function checkSecondKey(a,b){for(var c=!1,d=!1,e=!1,f=0;f<a.length;f++)1==a[f]&&(c=!0),4==a[f]&&(d=!0),5==a[f]&&(e=!0);return c&&d?!!b||5:c&&e?!!b||4:d&&e?!!b||1:!((!c&&!d||!c&&!e||!d&&!e)&&b)&&void 0}function coinCountPerPileToArray(a){for(var b=[],c=0;c<a.length;c++)b.push(decToBin(a[c]));return b}function getUnpairedVal(a){for(var b=[],e=0;e<a.length;e++){for(var f=0,g=0;g<a[e].length;g++)f+=a[g][e];b[e]=f%2==0?0:1}return binToDec(b)}function binToDec(a){for(var b=0,c=a.length-1;c>=0;c--)b+=parseInt(a[c])*Math.pow(2,a.length-1-c);return b}function decToBin(a){for(var b=[],c=3,d=0;d<c;d++)b.push(a%2),a=(a-a%2)/2;return b.reverse()}function pushAndSplice(a,b){for(var d=0;d<b;d++){var e=getRandomNum(0,a.length-1);pileCPU.push(a[e]),a.splice(e,1)}}function getThatPile(a){return 0==a?pileOne:1==a?pileTwo:2==a?pileThree:void 0}