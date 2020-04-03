'use strict';

function collectSameElements(collectionA, collectionB) {
  let resultCollection = [];
  collectionA.forEach(elementA => {
    let result = collectionB.find(elementB => elementA == elementB)
    if(result !== undefined) {
      resultCollection.push(result);
    }
  });
  return resultCollection;
}
