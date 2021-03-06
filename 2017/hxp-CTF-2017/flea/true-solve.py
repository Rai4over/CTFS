import gmpy2

n = 0x624d0c1c938cb50badd063227b2b22067772aaa6e1b8b3d39a3f8ce4998ab2bab43eb82fe45c255e3393537ca6b40027c9fdb9216cee85424ca32aa2a4d0ed91349ff93b409e853f1a0869e46d5ce61cdf93bf3af6de5b2b8ee63fb7ac0927240bfb5ef510d265236b45b83e7672614d398721d82e9cf6ddab2082517337e279206b7d6f5764394c46e0e8ed70c03e5b54a1c783f0d4e301cae3397155daca9d85f2a56fa35fb235824c08b9eea186072d58c230a36a62b6e4ec4692332fc1573d07a0b199186ad9b3b3c5856379b517ee5ef0af4ab99e7831f4cf3210c3abc56eceff1d3e43dd9497b9837fa26c24f8f8647746ddb891775a94dc201b64431d
l = 0xe60af5a2461cf86dcbd1b55cf4b9726be3b33ea4cd59669de37a9c9ccaa0d3dfd61ebea99c40b1c6ae8d0ffcb0f3b86f76009a8e51831f8e8df90338dee9c17346f1b1cb17cd015657129fec7eb3c804750aaa10d541105a59177bab631410f9aa02727109a72d1bfeabc59ed45d1a09bf338e5bf4b02d59a650510a3d4a50b2aa1536c57751d14cc494911da7c4cd1fb173c30f1bff1460133b0c36d6326dd424f85b27f1134e9febefa52fc112607da92f66c0793725381b3c4b92a05efbe19962700dd687907167196057a0df8e33aa31b069099f4115793cb98960699a1d6b7e47d5ef3516086c8837149ed212bca42be24e5dea579fa809c98374f3dc48
ct = 0xdbe279d9beb56937b6cbf8d9fbcec7a687685b732aad5b4bb99514b8872b8a9c2e0794a2f0e7a44fd969091dc0ddb7e783cd09504cbdd4b492919c0b37503dae1368961ccfa2b2eeba88491cfa9501073ebd5116c1dfd4a9bbbf47d00fafef71ff73038885a3bb72b524b7ca73e33b8cdda2728d0f4c5e3fb57576aa138047e4579c4ddc29c302ace4ff2abeccf13f77a0760f26509f4d5c12bfd4064da6ba6ff2474ce99db1dbeb506447b6fed882404aa8da8809acd7c80dd6d3ce0b5b6cce7a962e62ca1670dc86dec97f29a222391c4cbcbf60c71eead6a66cd75cb301fcb469eb103593d73cc310c82539f5cffaf311d122e2bf8e18e849fd486cbde42

sols = {(0, 0)}

for m in xrange(1111):
    print m, "bits", len(sols), "candidates"
    sols2 = set()
    mask = (2 << m) - 1
    for x, y in sols:
        if x * y == n:
            d = gmpy2.invert(65537, (x-1)*(y-1))
            print pow(ct, d, n)
            #'hxp{T0t4LLy_r3aL1st1c_Le4kag3}\n'
            quit()
        for bx in xrange(2):
            for by in xrange(2):
                xx = x + (bx << m)
                yy = y + (by << m)

                if (xx * yy) & mask != n & mask:
                    continue
                ll = (xx ^ yy) * (xx + yy)
                if ll & mask != l & mask:
                    continue
                sols2.add((xx, yy))
    sols = sols2