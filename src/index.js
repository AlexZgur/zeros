module.exports = function zeros(expression) {
  // your solution
  let zCount = 0;
  let c2 = 0, c5 = 0;
  let parts = expression.split('*');  
  for (let i = 0; i < parts.length; i++) {
    let multiplier = parts[i].replace('!', '');
    let each = multiplier.indexOf('!') < 0 ? true : false;
    if (!each) multiplier = multiplier.replace('!', ''); 
    let number = parseInt(multiplier);
    let step = each ? 1 : 2;
    for (let i = number; i > 0; i -= step) {
      let buf = i;
      while (buf % 5 == 0 && buf > 0) {
        c5++;
        buf /= 5;
      }
      buf = i;
      while (buf % 2 == 0 && buf > 0) {
        c2++;
        buf /= 2;
      }
    }
  }
  zCount = Math.min(c2, c5);
  return zCount;
}
