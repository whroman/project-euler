def foo(limit):
    numbers = []
    for n in range(0, limit):
        if (n % 3 == 0 or n % 5 == 0):
            numbers.append(n)
    nSum = sum(numbers)

    return nSum

print foo(1000)