'use strict';

const MATCH_NUMBER = 3;
function createUpdatedCollection(collectionA, objectB) {
  let filterCollection = collectionA.filter((item, index, array) => array.indexOf(item, 0) === index)
  
  let mapCollection = filterCollection.map(elementA => {
    let count = collectionA.filter(item => item === elementA).length;  
    return {key: elementA, count: count}
  })

  return mapCollection.map(a => {
    let result = objectB.value.find(elementB => a.key == elementB)
    if(result !== undefined && a.count >= MATCH_NUMBER) {
      a.count -= Math.floor(a.count / MATCH_NUMBER);
    }
    return a;
  })
}
