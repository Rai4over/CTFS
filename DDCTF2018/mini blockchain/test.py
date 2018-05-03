# -*- coding:utf-8 -*-

"""
Balance of all addresses: 
{
    "b2b69bf382659fd193d40f3905eda4cb91a2af16d719b6f9b74b3a20ad7a19e4de41e5b7e78c8efd60a32f9701a13985": 1, 
    "b81ff6d961082076f3801190a731958aec88053e8191258b0ad9399eeecd8306924d2d2a047b5ec1ed8332bf7a53e735": 0, 
    "955c823ea45e97e128bd2c64d139b3625afb3b19c37da9972548f3d28ed584b24f5ea49a17ecbe60e9a0a717b834b131": 999999
}
"""

"""
All utxos:
{
    "6846ef7a-5fe3-4a4f-ba46-dc7ebdc0c892": {
        "amount": 1, 
        "hash": "5e8c4bdcf0fa9bb1c53cc840b0cf623dcdba592f3cb503ce2df1b2a6c2d9dd06", 
        "id": "6846ef7a-5fe3-4a4f-ba46-dc7ebdc0c892", 
        "addr": "b2b69bf382659fd193d40f3905eda4cb91a2af16d719b6f9b74b3a20ad7a19e4de41e5b7e78c8efd60a32f9701a13985"
    }, 
    "c5a43e96-9a0c-46f6-93ce-40ca53ccdd9a": {
        "amount": 999999, 
        "hash": "d469831568d636ed18da2c9be5bd7081daf47e6ca467d7ada7b13663e65b5b52", 
        "id": "c5a43e96-9a0c-46f6-93ce-40ca53ccdd9a", 
        "addr": "955c823ea45e97e128bd2c64d139b3625afb3b19c37da9972548f3d28ed584b24f5ea49a17ecbe60e9a0a717b834b131"
    }
}
"""

"""
{
    "3b503b0a08dee7d67c65d42c3cc6dea241bedbf3b5f62d0e0ca62fdf0f8a93db": {
        "nonce": "HAHA, I AM THE BANK NOW!", 
        "prev": "e931d00cff9b9326263d71d9b036cc40d6025120b0043a62a6eb4c0da79f033d", 
        "hash": "3b503b0a08dee7d67c65d42c3cc6dea241bedbf3b5f62d0e0ca62fdf0f8a93db", 
        "transactions": [
            {
                "input": [
                    "b71f17ff-06ac-4fb7-8762-1bc965e740f2"
                ], 
                "signature": [
                    "accee4feab32f19f9fd94d0c73a5e8edf7a9193c8ecc4cb40f8b9ab651a0b4e8b1b48d3cdb2ebe221c56c6a4c4c6e757"
                ], 
                "hash": "357cbb86c89b3bff3ae82ecbc0d98e2af05943701519a7d935e65b1b90e8519c", 
                "output": [
                    {
                        "amount": 999999, 
                        "hash": "d469831568d636ed18da2c9be5bd7081daf47e6ca467d7ada7b13663e65b5b52", 
                        "addr": "955c823ea45e97e128bd2c64d139b3625afb3b19c37da9972548f3d28ed584b24f5ea49a17ecbe60e9a0a717b834b131", 
                        "id": "c5a43e96-9a0c-46f6-93ce-40ca53ccdd9a"
                    }, 
                    {
                        "amount": 1, 
                        "hash": "5e8c4bdcf0fa9bb1c53cc840b0cf623dcdba592f3cb503ce2df1b2a6c2d9dd06", 
                        "addr": "b2b69bf382659fd193d40f3905eda4cb91a2af16d719b6f9b74b3a20ad7a19e4de41e5b7e78c8efd60a32f9701a13985", 
                        "id": "6846ef7a-5fe3-4a4f-ba46-dc7ebdc0c892"
                    }
                ]
            }
        ], 
        "height": 1
    }, 
    "e931d00cff9b9326263d71d9b036cc40d6025120b0043a62a6eb4c0da79f033d": {
        "nonce": "The Times 03/Jan/2009 Chancellor on brink of second bailout for bank", 
        "prev": "0000000000000000000000000000000000000000000000000000000000000000", 
        "hash": "e931d00cff9b9326263d71d9b036cc40d6025120b0043a62a6eb4c0da79f033d", 
        "transactions": [
            {
                "input": [ ], 
                "signature": [ ], 
                "hash": "6ac989b62f6e601146c298d68053cbd29e79edfa62b3a0862776d52c6c80c2b9", 
                "output": [
                    {
                        "amount": 1000000, 
                        "hash": "3bd03784159176f72a542bdcc574fa890a6c0c03681a43c651ce38bc8bf9b37c", 
                        "addr": "b2b69bf382659fd193d40f3905eda4cb91a2af16d719b6f9b74b3a20ad7a19e4de41e5b7e78c8efd60a32f9701a13985", 
                        "id": "b71f17ff-06ac-4fb7-8762-1bc965e740f2"
                    }
                ]
            }
        ], 
        "height": 0
    }, 
    "879340e7f47c24aa54f4f07ca93d37dc1ec7f7ab8971382b4547e710580964fb": {
        "nonce": "a empty block", 
        "prev": "3b503b0a08dee7d67c65d42c3cc6dea241bedbf3b5f62d0e0ca62fdf0f8a93db", 
        "hash": "879340e7f47c24aa54f4f07ca93d37dc1ec7f7ab8971382b4547e710580964fb", 
        "transactions": [ ], 
        "height": 2
    }, 
    "85f8f789de7c1624b5601590b01ec303662992909477eb635415194c85beaf98": {
        "nonce": "b@cKd00R tr1993ReD", 
        "prev": "879340e7f47c24aa54f4f07ca93d37dc1ec7f7ab8971382b4547e710580964fb", 
        "hash": "85f8f789de7c1624b5601590b01ec303662992909477eb635415194c85beaf98", 
        "transactions": [
            {
                "input": [
                    "6846ef7a-5fe3-4a4f-ba46-dc7ebdc0c892"
                ], 
                "signature": [
                    "020cbbf90830ea2d8a73ab2204612374e0b51a4fd64700baa310699b311123f018399b6c69e4d09d77fc5dd9bcf1ec06"
                ], 
                "hash": "4236c57a4e123b562998c6a12df46a62685831382dbc2662a1755507a1fabc3e", 
                "output": [
                    {
                        "amount": 1, 
                        "hash": "1b01dc9aed21b1a27f5601b9260ab2fb2adf23e8e48bc52290cdd97b56b3aa2d", 
                        "addr": "955c823ea45e97e128bd2c64d139b3625afb3b19c37da9972548f3d28ed584b24f5ea49a17ecbe60e9a0a717b834b131", 
                        "id": "5ebe6724-8a24-4d94-9c13-aa195fab6341"
                    }
                ]
            }
        ], 
        "height": 3
    }
}
"""