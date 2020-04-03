'use strict';

const MATCH_NUMBER = 3;
function createUpdatedCollection(collectionA, objectB) {
  let filterCollection = collectionA.filter((item, index, array) => array.indexOf(item, 0) === index)
  
  let mapCollection = filterCollection.map(elementA => {
    let count = collectionA.filter(item => item === elementA).length;  
    if(elementA.indexOf('-') != -1) {
      let specialElement = elementA.split('-');
      return {key: specialElement[0], count: specialElement[1] * count}
    }

    return {key: elementA, count: count}
  })
  mapCollection.filter((item, index, array) => {

  })  
  
  mapCollection.map(item => item.key).forEach((item, index, array) => {
    if(array.indexOf(item, 0) != index) {
      mapCollection[array.indexOf(item, 0)].count += mapCollection[index].count; 
      mapCollection.splice(index, 1)
    }
  })

  return mapCollection.map(a => {
    let result = objectB.value.find(elementB => a.key == elementB)
    if(result !== undefined && a.count >= MATCH_NUMBER) {
      a.count -= Math.floor(a.count / MATCH_NUMBER);
    }
    return a;
  })
}
