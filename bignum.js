//hei is always an integer of 0 or more
//val is always between log(MAX_VALUE) and MAX_VALUE when hei is above 0
//infinity has hei Infinity

//the math relies HEAVILY on the amount of precision and the above rules lmfao

function f(f) {
	return function() {
		Array.prototype.unshift.call(arguments, this);
		return f.apply(null, arguments);
	}
}

$gds = (a, b) =>
	((a, b) =>
		a.hei > b.hei ? 1 :
		a.hei < b.hei ? -1 :
		a.val > b.val ? 1 :
		a.val < b.val ? -1 : 0
	)(a.Big ? a : {hei: 0, val: a}, b.Big ? b : {hei: 0, val: b});

$gsp = (a, b) =>
	((a, b) =>
		((diffSign) => [
			diffSign == -1 ? b : a,
			diffSign == -1 ? a : b
		])($gds(a, b))
	)(Big(a), Big(b));

$smp = f((a, b) =>
	(([a, b]) =>
		a.hei >= 1 ? a : (
			a.val += Math.log(1 + 1 / Math.exp(a.val - b.val)),
			a
		)
	)($gsp(a, b))
);

$smn = f((a, b) =>
	((a, b) =>
		a.hei >= 1 ? a : (
			a.val += Math.log(1 - 1 / Math.exp(a.val - b.val)),
			a
		)
	)(a, Big(b))
);

$add = f((a, b) =>
	(([a, b]) =>
		b.hei == 0 && b.val < 0 ? a.sub(-b.val) :
		a.hei >= 2 ? a :
		a.hei == 1 || a.val + b.val == Infinity ? (
			a = a.log(),
			b = b.log(),
			a.smp(b).exp()
		) : (a.val += b.val, a)
	)($gsp(a, b))
);

$sub = f((a, b) =>
	((a, b) =>
		a.hei == b.hei && a.val == b.val ? Big(0) :
		b.hei == 0 && b.val < 0 ? a.add(-b.val) :
		(([a, b], diffSign) => (
			a.hei >= 2 || (
				a.hei == 1 ? (
					a = a.log(),
					b = b.log(),
					a = a.smn(b).exp()
				) : a.val -= b.val
			), (
				a.hei == 1 && Math.exp(a.val) != Infinity &&
					(a.hei--, a.val = Math.exp(a.val)),
				diffSign == -1 && (
					a.hei >= 1 && (a.hei = 0, a.val = Infinity),
					a.val = -a.val
				),
				a
			)
		))($gsp(a, b), $gds(a, b))
	)(a, Big(b))
);

$mul = f((a, b) =>
	(([a, b]) =>
		b.hei == 0 && Math.abs(b.val) < 1 ? a.div(1 / b.val) :
		a.hei >= 3 && Number.isFinite(b.val) ? a :
		a.hei >= 1 || a.hei == 0 && a.val * b.val == Infinity && (
			a.hei++, a.val = Math.log(a.val), true
		) ? ((sign) => (
			a.hei--,
			b.val *= sign,
			b.hei == 0 ? b.val = Math.log(b.val) : b.hei--,
			a = a.add(b),
			a.hei++,
			sign == -1 && (
				a.hei >= 1 ? (a.hei = 0, a.val = -Infinity) : a.val = -a.val
			),
			a
		))(Math.sign(b.val)) : (a.val *= b.val, a)
	)($gsp(a, b))
);

$div = f((a, b) =>
	((a, b) =>
		b.hei == 0 && Math.abs(b.val) < 1 ? a.mul(1 / b.val) :
		a.hei >= 3 && Number.isFinite(b.val) ? a :
		a.hei >= 1 ? ((sign) => (
			a.hei--,
			b.val *= sign,
			b.hei == 0 ? b.val = Math.log(b.val) : b.hei--,
			a = a.sub(b),
			a.hei++,
			Math.exp(a.val) != Infinity && (a.hei--, a.val = Math.exp(a.val)),
			sign == -1 && (
				a.hei >= 1 ? (a.hei = 0, a.val = -Infinity) : a.val = -a.val
			),
			a
		))(Math.sign(b.val)) : (a.val /= b.val, a)
	)(a, Big(b))
);

$exp = f((a, b) =>
	((a, b) => (
		b && (
			b.hei == 0 ? b.val = Math.log(b.val) : b.hei--,
			a = a.mul(b)
		),
		Math.exp(a.val) == Infinity ? a.hei++ : a.val = Math.exp(a.val),
		a
	))(a, b != undefined && Big(b))
);

$pow = f((a, b) =>
	((a, b) =>
		b.hei == 0 && a.hei == 0 && b.val ** a.val != Infinity ? (
			b.val **= a.val,
			b
		) : b.exp(a)
	)(a, Big(b))
);

$log = f((a, b) =>
	((a, b) => (
		a.hei == 0 ? a.val = Math.log(a.val) : a.hei--,
		b && (a = a.div(b.log())),
		a
	))(a, b != undefined && Big(b))
);

$min = f((a, b) => $gsp(a, b)[1]);
$max = f((a, b) => $gsp(a, b)[0]);

$mor = f((a, b) => $gds(a, b) == 1);
$loe = f((a, b) => $gds(a, b) != 1);
$equ = f((a, b) => $gds(a, b) == 0);
$neq = f((a, b) => $gds(a, b) != 0);
$les = f((a, b) => $gds(a, b) == -1);
$moe = f((a, b) => $gds(a, b) != -1);

$sff = (num, dig) =>
	(num < 0 ? "-" : "") + Math.floor(Math.abs(num) + 10 ** -dig / 2) + (
		dig > 0 ? "." + (
			"0".repeat(dig) + Math.round(Math.abs(num) * 10 ** dig)
		).substr(-dig) : ""
	).replace(/(0|\.)+$/g, "");

$sfe = (num, dig) =>
	((m) =>
		m.moe(-dig - .5) && m.les(dig + .5) ?
			$sff(num.val, Math.round(6 - m.val)) :
			$sff(num.div(Big(Math.round(m.val)).exp(10)).val, 6) +
				"e" + Math.round(m.val)
	)(num.mul(num.les(0) ? -1 : 1).log(10))

$lon = (n) => Math.log(n);
$lln = (n) => Math.log($lon(n));
$lll = (n) => Math.log($lln(n));

$ptc = (num, bas) =>
	((a, hei) => (
		bas > Math.E ? (
			hei >= 3 && (a = a.smn($lll(bas))),
			hei >= 2 && (a = a.sub($lln(bas))),
			hei >= 1 && (a = a.div($lon(bas))),
			bas ** a.val != Infinity && hei > 0 && (a.val = bas ** a.val, hei--)
		) : (
			hei >= 3 && (a = a.smp($lln(1/$lon(bas)))),
			hei >= 2 && (a = a.add($lon(1/$lon(bas)))),
			hei >= 1 && (a = a.mul(1/$lon(bas))),
			a.hei == 1 && (a = a.log(bas), hei++)
		),
		[a.val, hei]
	))(Big(num.val), num.hei);

$lot = (n) => Math.log(n) * Math.LOG10E;

$str = f((a) =>
	a.val == 0 || !Number.isFinite(a.val) ? a.val :
	a.les(1000000) ? $sfe(a, 6) :
	(([val, hei]) =>
		a.les($enm) ? ((num) => (
			num.les(1000) && (num = num.exp(10), hei++),
			"e".repeat(hei) + $sfe(num, 6)
		))(Big(val)) : (
			((f) => f(f))((f) =>
				val >= 1 && (
					val = $lot(val),
					hei++,
					f(f)
				)
			),
			"10^^" + $sfe(Big(hei + val), 6)
		)
	)($ptc(a, 10))
);

Big = (a) => ({
	Big: true,
	val: a.Big ? a.val : a,
	hei: a.Big ? a.hei : a == Infinity ? Infinity : 0,
	smp: $smp, smn: $smn,
	add: $add, sub: $sub, mul: $mul, div: $div,
	pow: $pow, exp: $exp, log: $log,
	max: $max, min: $min,
	mor: $mor, loe: $loe, equ: $equ, neq: $neq, les: $les, moe: $moe,
	str: $str, toString: $str
});

$enm = Big(1000000).exp(10).exp(10).exp(10);
