def contract(s: str, i: int, j: int = None) -> str:
    return '[...]'.join(map(lambda s: s.replace('[', '[/').replace(']', ']/'), (s[:abs(i)], s[-abs(j if j != None else i):])))