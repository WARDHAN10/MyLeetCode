var maxProfit = function (prices) {
  let buy = null,
    PriceArr = [],
    profit = [];
  max = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (buy != null) {
      console.log(`buy: ${buy} i :${i}`);
      if (prices[i] < buy) {
        profit.push(max - buy);
        console.log(`Sell at i:${i}profit Array ${profit}`);
        buy = prices[i];
        max = -Infinity;

      } else {
        if (max < prices[i]) {
          max = prices[i];
          console.log(`max at i:${i} is ${max}`);
        }
        if (i == prices.length - 1) {
          profit.push(max - buy);
          console.log(`profit Array ${profit} max is :${max} and buy : ${buy}`);
          buy = null;
          max = -Infinity;
        }
      }
    } else {
      if (prices[i] < prices[i + 1]) {
        buy = prices[i];
      } else {
        console.log(`not BUY on ${prices[i]}`);
      }
    }
  }

  let two = profit.sort((a, b) => b - a)[1]
    ? profit.sort((a, b) => b - a)[1]
    : 0;

    let one = profit.sort((a, b) => b - a)[0]
    ? profit.sort((a, b) => b - a)[0]
    : 0;

  return one + two;
};

console.log(maxProfit([6,1,3,2,4,7]
    ));
