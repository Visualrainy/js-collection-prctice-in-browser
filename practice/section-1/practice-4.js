'use strict';

function collectSameElements(collectionA, objectB) {
  let resultCollection = [];
  collectionA.map(a => a.key).forEach(elementA => {
    let result = objectB.value.find(elementB => elementA == elementB)
    if(result !== undefined) {
      resultCollection.push(result);
    }
  });
  return resultCollection;
}
