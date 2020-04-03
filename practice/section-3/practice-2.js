'use strict';

const MATCH_NUMBER = 3;

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(a => {
    let result = objectB.value.find(elementB => a.key == elementB)
    if(result !== undefined && a.count >= MATCH_NUMBER) {
      a.count -= Math.floor(a.count / MATCH_NUMBER);
    }
    return a;
  })
}
