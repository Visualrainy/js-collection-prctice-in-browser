'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(a => {
    let result = objectB.value.find(elementB => a.key == elementB)
    if(result !== undefined) {
      a.count--;
    }
    return a;
  })
}
