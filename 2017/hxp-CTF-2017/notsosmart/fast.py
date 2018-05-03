import random
import gmpy2
random = random.SystemRandom()

m = 0xb107cff9bc81dc39662bc077f2dddc1f2345cf31e6af31a1a22b01c5c88488d3ccdc6b893c7a4b6171ad475e801db52542
o = 0x114fede0c299ca7ee8d431d71a582dd30df0dff236b96939a64037186703f424f7c5160000000000000000000000000000
g = 0x5e90d99feb75d04a3cb15a55cb9ea7dbdd03879a18b49d4108f18dc012f64b02324365accf82aad52bf0d1c117a60d5b6b

def random_prime():

    while True:
        p = pow(g, random.randrange(o), m)
        p += random.randrange(0, 2 ** 512, m)
        if gmpy2.is_prime(p):
            break

    return p

