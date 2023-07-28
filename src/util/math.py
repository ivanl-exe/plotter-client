from math import inf

def safe_division(n: float, d: float) -> float:
    if d == 0: return inf
    return n / d