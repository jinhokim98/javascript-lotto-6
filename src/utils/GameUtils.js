import { Random } from '@woowacourse/mission-utils';
import PURCHASE_UNIT from '../constants/PurchaseUnit.js';
import LOTTO_NUMBER from '../constants/LottoNumber.js';

class GameUtils {
  static dividedByThousand(amount) {
    return amount / PURCHASE_UNIT;
  }

  static createRandomUniqueSixNumberFromOneToForthFive() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.FIRST,
      LOTTO_NUMBER.LAST,
      LOTTO_NUMBER.COUNT,
    );
  }

  static sortRandomNumberInAscendingOrder(randomNumbers) {
    randomNumbers.sort((a, b) => a - b);
  }

  static seperateNumbersByComma(numbers) {
    const numbersTypeString = numbers.split(',');
    return numbersTypeString.map((string) => Number(string));
  }

  static isNotFromOneToFourtyFive(number) {
    return number < LOTTO_NUMBER.FIRST || number > LOTTO_NUMBER.LAST;
  }

  static checkDuplicateInList(list, element) {
    return list.indexOf(element) !== list.lastIndexOf(element);
  }
}

export default GameUtils;
