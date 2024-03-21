const myInputs = document.querySelectorAll('.inputPhone');
if (myInputs.length > 0) {
  myInputs.forEach(input => {
    let maskOptions = {
      mask: '+{98} 000-000-00-00'
    };
    let mask = IMask(input, maskOptions);
  });
}
