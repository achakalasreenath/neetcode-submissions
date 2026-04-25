class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    isAnagram(a, b){
        return a.split("").sort().join("") = b.split("").sort().join("")
    }

    finalRes = []
    groupAnagrams(strs) {
        let res = {}
        strs.forEach(item => {
            let sortedStr = item.split("").sort().join("")
            res[sortedStr] ? res[sortedStr].push(item) : res[sortedStr] = [item]
        })

        return Object.values(res)
    }
}
