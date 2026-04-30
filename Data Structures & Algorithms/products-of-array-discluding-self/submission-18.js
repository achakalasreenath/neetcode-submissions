class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let allProduct = 1;
        let zeroCount = 0;
        nums.forEach((n) => {
            if(n) allProduct = allProduct * n;
            else zeroCount += 1;
        })

        nums = nums.map((n) => {
            if(zeroCount > 1) return 0;
            if(zeroCount === 1 && n === 0) return allProduct;
            else if(zeroCount === 1 && n !== 0) return 0;
            return allProduct / n;
        })

        return nums
        
    }
}
