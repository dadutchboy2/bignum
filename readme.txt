goes up to 10^^(2^2^10), doesnt store similarly large negative and inverse numbers

string conversion details:
there are 2 decimals of precision until 10^1.5
12.34
there is 1 decimal of precision from 10^1.5 to 10^4.5
1,234.6
numbers are rounded after 10^4.5
1,234,568
numbers get represented using scientific notation after 10^6.5
1.00000e7
exponent in scientific notation increases when reaching 10^0.5
3.00000e7 0.40000e8
scientific notation has (6 - round(log10(exponent))) decimals of precision
1.00000e10 1.0000e100
exponents also get represented using scientific notation after 10^6.5
1e1,000,000 e1.00000e7
numbers get represented using tetration after 10^10^10^10^6.5
ee1e1,000,000 10^^4.90

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
  - bignum.str()  converts to string
