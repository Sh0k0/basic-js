import { NotImplementedError } from '../extensions/index.js'

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
	@@ -14,7 +14,14 @@ import { NotImplementedError } from '../extensions/index.js';
 * ]) => 3`
 *
 */
export default function countCats(backyard) {
  let cats = 0
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j <= backyard[i].length; j++) {
      const box = backyard[i][j]
      box === '^^' ? cats++ : ''
    }
  }

  return cats
}