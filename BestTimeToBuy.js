var maxProfit = function (prices) {
  let buy = Infinity,
    max = 0,
    profit = [];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > buy) {
      profit.push(prices[i] - buy);
      buy = Infinity;
    } else {
      buy = prices[i];
    }
  }





  return profit.sort((a,b)=>(b-a))[0] +profit.sort((a,b)=>(b-a))[1],profit ;
};

console.log(maxProfit([1,2,3,4,5]));
