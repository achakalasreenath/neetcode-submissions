class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        idx = {}
        for index, i in enumerate(nums):
            if target - i in idx:
                return [idx.get(target - i), index]
            else:
                idx[i] =  index
        return []