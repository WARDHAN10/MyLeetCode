
const kClosestNo = (points, k) => {
  points.sort((a, b) => {
    const one = a[0] * a[0] + a[1] * a[1];
    const two = b[0] * b[0] + b[1] * b[1];

    if (Math.sqrt(one) > Math.sqrt(two)) {
      return 1;
    }
    return -1;
  });


  console.log(points.slice(0,k))
};



kClosestNo([[1,3],[-2,2]],1)