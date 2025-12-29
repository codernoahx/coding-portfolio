def is_weight_even(w):
    if w > 2 and w % 2 == 0:
        return "YES"
    return "NO"
    
print(is_weight_even(int(input())))