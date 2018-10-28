module.exports = function make(...a) {
  const sumOne = a.reduce((sum, current) => sum + current, 0);
  return function(...b) {
    const sumTwo = b.reduce((sum, current) => sum + current, 0);
    if (typeof b[0] === "function") return sumOne;
    return function(...c) {
      if (typeof c[0] === "function") return sumOne + sumTwo;
      return function(...d) {
        const sumThree = c.reduce((sum, current) => sum + current, 0);
        if (typeof d[0] === "function") return sumOne + sumTwo + sumThree;
      };
    };
  };
};
