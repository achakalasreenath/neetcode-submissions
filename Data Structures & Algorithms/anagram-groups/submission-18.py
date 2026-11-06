class Solution:
    def getCountPattern(self, s: str):
        # count = {}
        # for i in s:
        #     count[i] = 1 + count.get(i, 0)
        # res = ''
        # keys = list(count.keys())
        # keys.sort()
        # for i in keys:
        #     res += f'{count[i]}{i}'
        count = [0] * 26
        for i in s:
            count[ord(i) - ord('a')] += 1
        return count

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)
        for s in strs:
            p = self.getCountPattern(s)
            res[tuple(p)].append(s)

        return [res[x] for x in res]
    
        