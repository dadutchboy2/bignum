goes up to 10^^1.797693e308 according to the string conversion, negative and inverse numbers have normal javascript number range

string conversion details:
decimal precision of a number is always 6 - the orders of magnitude rounded
so 1 will have 6 decimals of precision and 3.16228 will have 5 (its 10^0.5, rounds up to 1, 6 - 1 = 5)
magnitude notation starts when there would be -1 decimals of precision; 3162278, 0.316228e7
exponential notation starts at 1000 rounded orders of magnitude; 1e999, e1000
repeats for the number after the e; e0.316228e7, ee1000 etc
tetrational notation starts at 10^10^10^1000000 using quadratic approximation for decimals
so e.g. 10^1000000 = 10^10^6 = 10^10^10^0.778151 = approximately 10^^3.84624

how to use:
1 convert number to bignum with new Big(100)
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
