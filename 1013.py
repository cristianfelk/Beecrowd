# 1013 - @crisfeldk

entrada = input().split(" ")
a, b, c = entrada
omaior = (int(a) + int(b) + abs (int(a) - int(b))) / 2
restante = (int(omaior) + int(c) + abs (int(omaior) - int(c))) / 2
print("%d eh o maior"%restante)
