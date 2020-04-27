'use strict';

function getDamageMultiplier(armor) {
  return 1 - ((0.052 * armor) / (0.9 + 0.048 * Math.abs(armor)));
}

(() => {
  for (let armor=-10; armor<20; armor++) {
    console.log(`Armor ${armor} get ${getDamageMultiplier(armor)}`);
  }
})();