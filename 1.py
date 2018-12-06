import csv
data = list(csv.reader(open('P1_data.csv', 'r')))
a = [x for x in data if x[-1] == 'True']
b = list(zip(*a))
b.pop(len(b)-1)
classes = [list(set(col)) for col in b]
print([val[0] if len(val) == 1 else '?' for val in classes])