class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = strs.map(s => {
            if(s === "") return "-";
            else return s
        })
        return res.join("/n")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === '') return []
        let lines = str.split("/n")
        let res = []
        lines.forEach(l => {

            console.log(l)
            res.push(l.replaceAll("-", ""))
        })
        return res
    }
}
