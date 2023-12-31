goes up to 10^^1.798e308 according to the string conversion, negative and inverse numbers have normal javascript number range

string conversion details:
decimal precision of a number is always 3 - the orders of magnitude rounded
so e.g. 0.789 and 1.234 will have 3 decimals of precision, 7.89 and 12.34 will have 2
magnitude notation starts at 10^3.5 (and negative magnitudes at 10^-3.5)
1000, 1.000e4
exponential notation starts at 10^10^3.5
1.000e1000, e1.000e4
repeats for the number after the e
ee1.000e4, eee1.000e4
tetrational notation starts at 10^10^10^1000000 using the quadratic approximation
so e.g. 10^1000000 = 10^10^6 = 10^10^10^0.778 = 10^^(3 + sroot 0.778 base 10) = approx. 10^^2.846

how to use:
1 convert number to bignum with e.g. new Big(100)
2 to do math, use this list (alternatively e.g. Big.cmp(bignum, x)):
  - bignum.cmp(x) 1 if bignum > x, 0 if bignum = x, -1 if bignum < x
  - bignum.gsp(x) sorts into array where [0] >= [1]
  - bignum.smp(x) e ** bignum + e ** x = e ** result
  - bignum.smn(x) e ** bignum - e ** x = e ** result
  - bignum.add(x) bignum +  x
  - bignum.sub(x) bignum -  x
  - bignum.mul(x) bignum *  x
  - bignum.div(x) bignum /  x
  - bignum.pow(x) bignum ** x
  - bignum.exp(x) x ** bignum          (x = e by default)
  - bignum.log(x) x ** result = bignum (x = e by default)
  - bignum.min(x) min(bignum, x)
  - bignum.max(x) max(bignum, x)
  - bignum.gt(x)  bignum >  x
  - bignum.lte(x) bignum <= x
  - bignum.eq(x)  bignum == x
  - bignum.neq(x) bignum != x
  - bignum.lt(x)  bignum <  x
  - bignum.gte(x) bignum >= x
  - bignum.str() converts to string (100, 1e100, ee1e100, 10^^10)
