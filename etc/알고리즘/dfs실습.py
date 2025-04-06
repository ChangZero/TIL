tree = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F', 'G'],
    'D': ['H', 'I'],
    'E': ['I'],
    'F': ['U'],
    'G': [],
    'H': [],
    'I': [],
    'U': []
}

open_ = ['A']
closed = []
goal = 'U'

cnt = 0
print(f'{cnt}. open = [{open_}]; closed = [{closed}]')
while True:
    x = open_.pop(0)

    if x == goal:
        print("목표노드 U 발견")
        break
    else:
        child = tree[x]
        closed.append(x)
        for ls in child:
            if (ls in open_) or (ls in closed):
                child.remove(ls)
        if open_ != None:
            open_ = child + open_
    cnt += 1

    print(f'{cnt}. open = [{open_}]; closed = [{closed}]')
