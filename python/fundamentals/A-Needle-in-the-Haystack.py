def find_needle(haystack):
    val = "needle"
    if val in haystack:
        return("found the needle at position "+str(haystack.index(val)))