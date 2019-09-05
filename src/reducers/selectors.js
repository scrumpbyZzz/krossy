
export const getColorsSelector = (models) => {
  let tempArr = [];
  models.forEach(i => tempArr.push(i.color));
  tempArr = [ ...new Set(tempArr)].filter(n =>n);
  return tempArr
};
