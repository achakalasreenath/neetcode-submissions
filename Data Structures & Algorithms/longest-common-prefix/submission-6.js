class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let strsSorted = strs.sort(s => s.length);
        let res = ''
        for(let i = 0; i < strsSorted[0].length; i++ ){
            let isPresentInAll = true
            for(let j = 1; j < strsSorted.length; j++){
                if(!strsSorted[j].startsWith(strsSorted[0].slice(0, i + 1))){
                    isPresentInAll = false
                }
            }
            if(isPresentInAll) res = strsSorted[0].slice(0, i + 1);
        }
        return res
    }
}
