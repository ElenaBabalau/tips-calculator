const cost_input = document.getElementById('cost-id');
const peopleSelector = document.getElementById('people-id');
const serviceLevelSelector = document.getElementById('service-id');

const calcTip = () => {
  const cost = Number(cost_input.value);
  const service = getServiceLevel();
  const peopleNumber = getPeopleNumber();

  const tip = getTipValue(cost, service, peopleNumber);

  const tip_el = document.querySelector('.tip-wrap .tip');
  tip_el.innerText = tip.toFixed(2) + ' MDL' + ((peopleNumber > 1)? ' each' : '');
}

const getTipValue = (cost, service, peopleNumber) => {
  const processedValue = (cost * service) / peopleNumber;

  let value = 0;

  if(!isNaN(processedValue)) {
    value = processedValue;
  }

  return value;
}

const getPeopleNumber = () => {
  const peopleSelectedValue = Number(peopleSelector.options[peopleSelector.selectedIndex].text);

  let peopleNumber = 0;
  
  if(!isNaN(peopleSelectedValue)) {
    peopleNumber = Number(peopleSelectedValue);
  }

  return peopleNumber;
}

const getServiceLevel = () => {
  let serviceNumber = 0;

  for(let i = 0; i < serviceLevelSelector.length; i++) {
    if(serviceLevelSelector[i].checked) {
      serviceNumber = Number(serviceLevelSelector[i].value);
    }
  }

  return serviceNumber / 100;
}