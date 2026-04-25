class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counter = {};
        let res = []
        nums.forEach(item => {
            counter[item] ? counter[item] += 1 : counter[item] = 1;
        })
        
        return Object.keys(counter).sort((a,b) => counter[b] - counter[a]).slice(0, k)
    }
}
