from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        res = ""
        for i in range(len(strs[0])):
            for string in strs:
                if i == len(string) or string[i] != strs[0][i]:
                    return res
            res += strs[0][i]
        return res

obj = Solution()
result = obj.longestCommonPrefix(["flower", "flow", "flight"])
print(result)
