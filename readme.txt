goes up to 10^^1.797693e308 according to the string conversion, negative and inverse numbers have normal javascript number range

how to use:
1 dont look at the code
2 convert number to bignum with Big(100)
3 to do math, use this list and dont look in the code for it:
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
  - bignum.mor(x) bignum >  x aka MORe
  - bignum.loe(x) bignum <= x aka Less Or Equal
  - bignum.equ(x) bignum == x aka EQUal
  - bignum.neq(x) bignum != x aka Not EQual
  - bignum.les(x) bignum <  x aka LESs
  - bignum.moe(x) bignum >= x aka More Or Equal
  - bignum.str()  converts to string (100, 1e100, ee1e100, 10^^10)
