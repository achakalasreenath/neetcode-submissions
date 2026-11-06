class Solution:
    def getCountPattern(self, s: str):
        count = {}
        for i in s:
            count[i] = 1 + count.get(i, 0)
        res = ''
        keys = list(count.keys())
        keys.sort()
        for i in keys:
            res += f'{count[i]}{i}'
        return res

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = {}
        for s in strs:
            p = self.getCountPattern(s)
            if p in res:
                res[p].append(s)
            else:
                res[p] = [s]
        return [res[x] for x in res]
    
        