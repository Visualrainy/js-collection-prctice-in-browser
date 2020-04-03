'use strict';

function collectSameElements(collectionA, objectB) {
  let resultCollection = [];
  collectionA.forEach(elementA => {
    let result = objectB.value.find(elementB => elementA == elementB)
    if(result !== undefined) {
      resultCollection.push(result);
    }
  });
  return resultCollection;
}
