# display matrix picture with 0 and X
def matrix_overview(BB, bound):
    for ii in range(BB.dimensions()[0]):
        a = ('%02d ' % ii)
        for jj in range(BB.dimensions()[1]):
            a += '0' if BB[ii,jj] == 0 else 'X'
            a += ' '
        if BB[ii, ii] >= bound:
            a += '~'
        print a
def coppersmith_howgrave_univariate(pol, modulus, beta, mm, tt, XX):
    """
    Coppersmith revisited by Howgrave-Graham
    finds a solution if:
    * b|modulus, b >= modulus^beta , 0 < beta <= 1
    * |x| < XX
    """
    #
    # init
    #
    dd = pol.degree()
    nn = dd * mm + tt
    #
    # checks
    #
    if not 0 < beta <= 1:
        raise ValueError("beta should belongs in (0, 1]")
    if not pol.is_monic():
        raise ArithmeticError("Polynomial must be monic.")
    #
    # calculate bounds and display them
    #
    """
    * we want to find g(x) such that ||g(xX)|| <= b^m / sqrt(n)
    * we know LLL will give us a short vector v such that:
    ||v|| <= 2^((n - 1)/4) * det(L)^(1/n)
    * we will use that vector as a coefficient vector for our g(x)
    * so we want to satisfy:
    2^((n - 1)/4) * det(L)^(1/n) < N^(beta*m) / sqrt(n)
    so we can obtain ||v|| < N^(beta*m) / sqrt(n) <= b^m / sqrt(n)
    (it's important to use N because we might not know b)
    """
    if debug:
        # t optimized?
        print "\n# Optimized t?\n"
        print "we want X^(n-1) < N^(beta*m) so that each vector is helpful"
        cond1 = RR(XX^(nn-1))
        print "* X^(n-1) = ", cond1
        cond2 = pow(modulus, beta*mm)
        print "* N^(beta*m) = ", cond2
        print "* X^(n-1) < N^(beta*m) \n-> GOOD" if cond1 < cond2 else "* X^(n-1) >= N^(beta*m) \n-> NOT GOOD"
        # bound for X
        print "\n# X bound respected?\n"
        print "we want X <= N^(((2*beta*m)/(n-1)) - ((delta*m*(m+1))/(n*(n-1)))) / 2 = M"
        print "* X =", XX
        cond2 = RR(modulus^(((2*beta*mm)/(nn-1)) - ((dd*mm*(mm+1))/(nn*(nn-1)))) / 2)
        print "* M =", cond2
        print "* X <= M \n-> GOOD" if XX <= cond2 else "* X > M \n-> NOT GOOD"
        # solution possible?
        print "\n# Solutions possible?\n"
        detL = RR(modulus^(dd * mm * (mm + 1) / 2) * XX^(nn * (nn - 1) / 2))
        print "we can find a solution if 2^((n - 1)/4) * det(L)^(1/n) < N^(beta*m) / sqrt(n)"
        cond1 = RR(2^((nn - 1)/4) * detL^(1/nn))
        print "* 2^((n - 1)/4) * det(L)^(1/n) = ", cond1
        cond2 = RR(modulus^(beta*mm) / sqrt(nn))
        print "* N^(beta*m) / sqrt(n) = ", cond2
        print "* 2^((n - 1)/4) * det(L)^(1/n) < N^(beta*m) / sqrt(n) \n-> SOLUTION WILL BE FOUND" if cond1 < cond2 else "* 2^((n - 1)/4) * det(L)^(1/n) >= N^(beta*m) / sqroot(n) \n-> NO SOLUTIONS MIGHT BE FOUND (but we never know)"
        # warning about X
        print "\n# Note that no solutions will be found _for sure_ if you don't respect:\n* |root| < X \n* b >= modulus^beta\n"
    #
    # Coppersmith revisited algo for univariate
    #
    # change ring of pol and x
    polZ = pol.change_ring(ZZ)
    x = polZ.parent().gen()
    # compute polynomials
    gg = []
    for ii in range(mm):
        for jj in range(dd):
            gg.append((x * XX)**jj * modulus**(mm - ii) * polZ(x * XX)**ii)
    for ii in range(tt):
        gg.append((x * XX)**ii * polZ(x * XX)**mm)
    # construct lattice B
    BB = Matrix(ZZ, nn)
    for ii in range(nn):
        for jj in range(ii+1):
            BB[ii, jj] = gg[ii][jj]
    # display basis matrix
    if debug:
        matrix_overview(BB, modulus^mm)
    # LLL
    BB = BB.LLL()
    # transform shortest vector in polynomial
    new_pol = 0
    for ii in range(nn):
        new_pol += x**ii * BB[0, ii] / XX**ii
    # factor polynomial
    potential_roots = new_pol.roots()
    print "potential roots:", potential_roots
    # test roots
    roots = []
    for root in potential_roots:
        if root[0].is_integer():
            result = polZ(ZZ(root[0]))
            if gcd(modulus, result) >= modulus^beta:
                roots.append(ZZ(root[0]))
    #
    return roots
length_N = 1024
e = 3
N = 0x79982a272b9f50b2c2bc8b862ccc617bb39720a6dc1a22dc909bbfd1243cc0a03dd406ec0b1a78fa75ce5234e8c57e0aab492050906364353b06ccd45f90b7818b04be4734eeb8e859ef92a306be105d32108a3165f96664ac1e00bba770f04627da05c3d7513f5882b2807746090cebbf74cd50c0128559a2cc9fa7d88f7b2d
ZmodN = Zmod(N);
C = 0x381db081852c92d268b49a1b9486d724e4ecf49fc97dc5f20d1fad902b5cdfb49c8cc1e968e36f65ae9af7e8186f15ccdca798786669a3d2c9fe8767a7ae938a4f9115ae8fed4928d95ad550fddd3a9c1497785c9e2279edf43f04601980aa28b3b52afb55e2b34e5b175af25d5b3bd71db88b3b31e48a177a469116d957592c
P.<x> = PolynomialRing(ZmodN) #, implementation='NTL')
b=0xfedcba98765432100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
pol = (b + x)^e - C
dd = pol.degree()
# Tweak those
beta = 1                                # b = N
epsilon = beta / 7                      # <= beta / 7
mm = ceil(beta**2 / (dd * epsilon))     # optimized value
tt = floor(dd * mm * ((1/beta) - 1))    # optimized value
XX = ceil(N**((beta**2/dd) - epsilon))  # optimized value
# Coppersmith
roots = coppersmith_howgrave_univariate(pol, N, beta, mm, tt, XX)
# output
print "\n# Solutions"
print "we found:", str(roots)
print "\n"