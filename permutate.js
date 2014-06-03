
exports = module.exports = {
    next:function next(arr) {
        var retArr = arr.slice();
        for(var k = arr.length - 2; k > -1; k--) {
            if(arr[k] < arr[k+1]){
                for(var l = arr.length - 1; l > k; l--) {
                    if(arr[k] < arr[l]) {
                        retArr[k] = arr[l];
                        retArr[l] = arr[k];
                        var sub = retArr.slice(k+1);
                        sub.reverse();
                        retArr = retArr.slice(0,k+1).concat(sub);
                        return retArr;
                    }
                }
            }
        }
        return null;
    },
    first:function first(arr) {
        var ret = arr.slice();
        ret.sort();
        return ret;
    },
    last:function last(arr) {
        var ret = this.first(arr);
        return ret.reverse();
    }
}
