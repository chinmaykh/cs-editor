import re


def cray(s):
    # Indices of the question numbers
    re.finditer('\d\d\.', s)
    spl = re.split('\d\d\.', s)
    # Defining the dictionary
    a = {}
    i = 1
    # print(spl)
    for m in re.finditer('\d\d\.', s):
        a[m.group(0)] = spl[i]
        i += 1
        pass
    return a


anss = cray(
    "02. (a) 14/39; 10/39; 10/39; 5/39 (b) 84; 70; 70; 70; 40; 40; 40; 15 all divided by 429 03. 15/26; 5/26; 5/26; 1/26 04. 25/169; 40/169; 40/169; 64/169 07. p(i, j) = p2(1 − p)i+j 08. c = 1/8; E[X] = 0 09. (12x2 + 6x)/7; 15/56;.8625; 5/7; 8/7 10. 1/2; 1 − e−a11. .1458 12. 39.3e−5 13. 1/6; 1/2 15. π/4 16. n(1/2)n−1 17. 1/3 18. 7/919. 1/2 21. 2/5; 2/5 22. no; 1/3 23. 1/2; 2/3; 1/20; 1/18 25. e−1/i! 28. 12 e−t;1−3e−2 29. .0326 30. .3772; .2061 31. .0829; .3766 32. e−2; 1 − 3e−235. 5/13; 8/13 36. 1/6; 5/6; 1/4; 3/4 41. (y + 1)2xe−x(y+1); xe−xy; e−x42. 1/2 + 3y/(4x) − y3/(4x3) 46. (1 − 2d/L)3 47. .79297 48. 1 − e−5λa;(1 − e−λa)5 52. r/π 53. r 56. (a) u/(ν + 1)2")


while True:
    print('')
    print(*anss.keys())
    print('')
    q = input('Enter question number - ')
    print(chr(27) + "[2J")
    if q in anss.keys():
        print('\033[96m'+anss[q]+'\033[0m')
    else:
        print('WHAT"S WRONG WITH YOU?')
