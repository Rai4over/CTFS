from PIL import Image
import cmath, math, random, string
import numpy
from scipy.linalg import solve

text = 'DDCTF{}'
enc = Image.open('encrypted.bmp')

maxLen = 45
img_size = 800
abs_cor_size = 1.05
maxValue = 2200.0


def linear_map(v, old_dbound, old_ubound, new_dbound, new_ubound):
    return (v - old_dbound) * 1.0 / (old_ubound - old_dbound) * (new_ubound - new_dbound) + new_dbound


def unlinear_map(res, old_dbound, old_ubound, new_dbound, new_ubound):
    return (res - new_dbound) * 1.0 / (new_ubound - new_dbound) * (old_ubound - old_dbound) + old_dbound


def unmapping(x, y):
    return complex(linear_map(x, 0, img_size, -abs_cor_size, abs_cor_size),
                   linear_map(y, 0, img_size, abs_cor_size, -abs_cor_size))


res = []
z = []
col = 0
for row in range(800):
    G = enc.getpixel((col, row))[1]
    B = enc.getpixel((col, row))[2]

    v_r = unlinear_map(G, -maxValue, maxValue, 0, 255)
    if int(round(linear_map(v_r, -maxValue, maxValue, 0, 255))) != G:
        # v_r = unlinear_map(G - 1, -maxValue, maxValue, 0, 255)
        break
    v_i = unlinear_map(B, -maxValue, maxValue, 0, 255)
    if int(round(linear_map(v_i, -maxValue, maxValue, 0, 255))) != B:
        # v_i = unlinear_map(B - 1, -maxValue, maxValue, 0, 255)
        break
    if complex(v_r, v_i) not in res:
        res.append(complex(v_r, v_i))
        z.append(unmapping(col, row))
    if len(res) == 44:
        break
# print(res)
# print(len(res))
# print(z)

p = []
for x in z:
    tmp = []
    t_p = 1 + 0j
    for i in range(44):
        tmp.append(t_p)
        t_p = t_p / x
    p.append(tmp)
print(p)

a = numpy.array(p)
b = numpy.array(z)
# x = solve(a, b)
# print(x)




