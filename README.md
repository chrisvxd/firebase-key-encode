# firebase-key-encode
Encode and decode your object keys so they're firebase friendly. Also supports deep encoding/decoding.

## Installation

    npm install firebase-key-encode

## Usage

Encode:

    var firebaseKeyEncode = require('firebase-key-encode');

    firebaseKeyEncode.encode('my.bad.key');

    // Output: my%2Ebad%2Ekey

Decode:

    var firebaseKeyEncode = require('firebase-key-encode');

    firebaseKeyEncode.encode('my%2Ebad%2Ekey');

    // Output: my.bad.key

Deep Encode:

    var firebaseKeyEncode = require('firebase-key-encode');

    var badTree = {
        "pets": [
            {
                "jimmy.choo": 15}
            ],
        "other.key": 5
    }

    firebaseKeyEncode.deepEncode(badTree);

    // Output: {
    //    "pets": [
    //        {
    //            "jimmy%2Echoo": 15}
    //        ],
    //    "other%2Ekey": 5
    // }


Deep Decode:

    var firebaseKeyEncode = require('firebase-key-encode');

    var badTree = {
        "pets": [
            {
                "jimmy%2Echoo": 15}
            ],
        "other%2Ekey": 5
    }

    firebaseKeyEncode.deepEncode(badTree);

    // Output: {
    //    "pets": [
    //        {
    //            "jimmy.choo": 15}
    //        ],
    //    "other.key": 5
    // }

That's all, folks.
