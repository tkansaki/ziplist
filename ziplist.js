function ziplist(list1, list2) {
  if (list1.length !== list2.length) {
    return null;
  }
  const returnList = [];
  for (let i = 0; i < list1.length; i++) {
    returnList[2 * i] = list1[i];
    returnList[(2 * i) + 1] = list2[i];
  }
  return returnList;
}

function ziplistTheSimpleWay(list1, list2) {
  if (list1.length !== list2.length) {
    return null;
  }
  return _.flatten(_.zip(list1, list2));
}

const testList1 = [1, 2, 3];
const testList2 = ['a', 'b', 'c'];

console.log(ziplist(testList1, testList2));
console.log(ziplistTheSimpleWay(testList1, testList2));
