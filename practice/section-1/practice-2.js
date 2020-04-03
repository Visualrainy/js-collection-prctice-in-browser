'use strict';

function collectSameElements(collectionA, collectionB) {
  let resultCollection = [];
  collectionA.forEach(elementA => {
    collectionB.forEach(arrayB => {
      let result = arrayB.find(elementB => elementA == elementB)
      if (result !== undefined) {
        resultCollection.push(result);
      }
    })
  });
  return resultCollection;
}
