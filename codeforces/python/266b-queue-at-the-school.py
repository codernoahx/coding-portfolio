def main():
    n, t = map(int, input().split())
    s = list(input())

    l = n - 1
    # While l is greater than 0, because we'll compare it wit- 1 element in s
    while l > 0:
        # If l points to B
        if s[l] == "B":
            # Set r is equal to l
            r = l
            # Keep on looping until r is less than the l + t, where t is the no. of swaps to be made if all the values lying
            # between r(excluding) and l + t (excluding) is G
            while r < l + t and r < n - 1:
                # If G doesn't lie at r + 1 then we break the loop
                if s[r + 1] != "G":
                    break
                # Else keep on incrementing r by 1
                r += 1
            # Swap the B at l index with G at index r
            s[l], s[r] = s[r], s[l]
            # Set the pointer to r + 1, because r has the correct B value and we need to look for the next B
            l = r + 1
        # Else increment l by 1
        else:
            l += 1
    print("".join(s))


if __name__ == "__main__":
    main()
