const $ = document.querySelector.bind(document)

const calculateResult = (event) => {
  event.preventDefault()

  const whidthValue = convertStringToFloat('whidth-value')
  const legthValue = convertStringToFloat('legth-value')
  const eachFloor = convertStringToFloat('floor-type')

  const areaValue = calculateAreaValue(whidthValue, legthValue, eachFloor)

  $('#result').innerText = `Valor da área por m²: R$ ${areaValue.toFixed(2)}`
}

/**
 * 
 * @param {string} id 
 * @returns 
 */

const convertStringToFloat = (id) => {
  let aux = $(`#${id}`).value
  const value = parseFloat(aux)
  return value
}

/**
 * 
 * @param {number} whidthValue 
 * @param {number} legthValue 
 * @param {number} eachFloor 
 * @returns 
 */

const calculateAreaValue = (whidthValue, legthValue, eachFloor) => {
  const calculeteArea = whidthValue * legthValue
  const areaValue = calculeteArea * eachFloor

  
  return areaValue
}