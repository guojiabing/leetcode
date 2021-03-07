/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
var isHappy = function (n) {
  let pre = n;
  let cur = getNext(n);

  while (true) {
    if (cur === 1) {
      return true;
    }

    if (pre === cur) {
      return false;
    }

    pre = getNext(pre);
    cur = getNext(getNext(cur));
  }
};

var getNext = function (n) {
  let temp = 0;
  while (n) {
    temp += (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }
  return temp;
};

// @lc code=end
