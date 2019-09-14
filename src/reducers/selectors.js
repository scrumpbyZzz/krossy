
export const getColorsSelector = (models) => {
  let tempArr = [];
  models.forEach(i => tempArr.push(i.color));
  tempArr = [ ...new Set(tempArr)].filter(n =>n);
  return tempArr
};

export const getSizeSelector = (models) => {
  let tempArr = [];
  models.forEach(i => tempArr.push(i.size));
  tempArr = [ ...new Set(tempArr)].filter(n =>n);
  return tempArr
};

export const getModel = (models, color) => {
  let sizes = [];
  const oneColor = models.filter(i => i.color === color);
  oneColor.forEach(i => sizes.push(i.size));
  sizes = [ ...new Set(sizes)].filter(n =>n);

  const product = {
    sizes: sizes,
    pic: oneColor[0].pictures
  };

  return product
};

export const getPictures = (models) => {
  const model = models.find(i => i.pictures);
  const pic = model.pictures;
  return pic
};
