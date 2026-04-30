class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let finalRes = []
        console.log(nums.length)
        for(let i =0; i < nums.length ; i ++){
            let res = 1;
            for(let j = 0; j < nums.length; j++){
                if(i == j) continue;
                res = res * nums[j]
            }
            finalRes.push(res)
        }
        return finalRes
    }
}
