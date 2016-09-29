
module.exports = {
    encodeFirebaseKey: function (decoded) {
        return encodeURIComponent(decoded).replace(/\./g, '%2E');
    },
    decodeFirebaseKey: function (encoded) {
        return decodeURIComponent(encoded.replace('%2E', '.'));
    },
    // Replaces the key with `fn(key)` on each key in an object tree.
    // i.e. making all keys uppercase.
    deepKeyReplace: function (obj, fn) {
        var rebuiltTree = lodash.clone(obj);

        function traverse(o, x, func) {
            if (typeof(o) === "object") {
                for (var i in o) {
                    if (o[i] !== null && (typeof(o[i])=="object" || typeof(o[i])=="array")) {
                        //going on step down in the object tree!!
                        traverse(o[i],x[i],func);
                    }
                    func.apply(this,[x, i, x[i]]);
                }
            } else if (typeof(o) === "array") {
                for (var i = 0; i < o.length; i++) {
                    // func.apply(this,[o, i,o[i]]);
                    if (o[i] !== null && (typeof(o[i])=="object" || typeof(o[i])=="array")) {
                        //going on step down in the object tree!!
                        traverse(o[i], x[i], func);
                    }
                }
            }
        }

        traverse(obj, rebuiltTree, function (parent, key, val) {
            delete parent[key];
            parent[fn(key)] = val;
        });

        return rebuiltTree;
    },
    decodeFirebaseKeysDeep: function (encodedTree) {
        var $this = this;

        var rebuiltTree = this.deepKeyReplace(encodedTree, function (key) {
            return $this.decodeFirebaseKey(key);
        });

        return rebuiltTree;
    },
    encodeFirebaseKeysDeep: function (decodedTree) {
        var $this = this;

        var rebuiltTree = this.deepKeyReplace(decodedTree, function (key) {
            return $this.encodeFirebaseKey(key);
        });

        return rebuiltTree;
    }
}
