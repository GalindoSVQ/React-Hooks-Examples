import React, { useState, useEffect } from "react";

const provinces = [
  "Álava",
  "Albacete",
  "Alicante",
  "Almería",
  "Asturias",
  "Ávila",
  "Badajoz",
  "Barcelona",
  "Burgos",
  "Cáceres",
  "Cádiz",
  "Cantabria",
  "Castellón",
  "Ceuta",
  "Ciudad Real",
  "Córdoba",
  "La Coruña",
  "Cuenca",
  "Gerona",
  "Granada",
  "Guadalajara",
  "Guipúzcoa",
  "Huelva",
  "Huesca",
  "Baleares",
  "Jaén",
  "León",
  "Lérida",
  "Lugo",
  "Madrid",
  "Málaga",
  "Melilla",
  "Murcia",
  "Navarra",
  "Orense",
  "Palencia",
  "Las Palmas",
  "Pontevedra",
  "La Rioja",
  "Salamanca",
  "Segovia",
  "Sevilla",
  "Soria",
  "Tarragona",
  "Santa Cruz de Tenerife",
  "Teruel",
  "Toledo",
  "Valencia",
  "Valladolid",
  "Vizcaya",
  "Zamora",
  "Zaragoza"
];

static propTypes = {
  options: PropTypes.instanceOf(Array).isRequired
};

  const [activeOption, setActiveOption] = useState(0)
  const [filteredOptions, setFilteredOptions] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [userInput, setUserInput] = useState('')


onChange = (e) => {

  const { options } = this.props;
  const userInput = e.currentTarget.value;

  const filteredOptions = options.filter(
    (optionName) =>
      optionName.toLowerCase().normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1").indexOf(userInput.toLowerCase()) > -1
  );

  this.setState({
    activeOption: 0,
    filteredOptions,
    showOptions: true,
    userInput: e.currentTarget.value
  });

};

onClick = (e) => {
  this.setState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: e.currentTarget.innerText
  });

  window.location.href = ('crags/' + e.currentTarget.innerText.toLowerCase().normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1"));

};

onKeyDown = (e) => {
  const { activeOption, filteredOptions } = this.state;

  if (e.keyCode === 13) {
    this.setState({
      activeOption: 0,
      showOptions: false,
      userInput: filteredOptions[activeOption]
    });
  } else if (e.keyCode === 38) {
    if (activeOption === 0) {
      return;
    }
    this.setState({ activeOption: activeOption - 1 });
  } else if (e.keyCode === 40) {
    if (activeOption === filteredOptions.length - 1) {
      console.log(activeOption);
      return;
    }
    this.setState({ activeOption: activeOption + 1 });
  }
};

return (

  let optionList;
  if (showOptions && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul className="options">
          {filteredOptions.map((optionName, index) => {
            let className;
            if (index === activeOption) {
              className = 'option-active';
            }
            return (
              <li className={className} key={optionName} onClick={onClick}>
                {optionName.toUpperCase()}
              </li>
            );
          })}
        </ul>
      );
    } else {
      optionList = (
        <div className="no-options">
          No Province Found
        </div>
      );
    }
  }
  return (
    <React.Fragment>
      <div className="fieldProvince">

        <input
          type="text"
          className="lookingProvinces"
          name="province"
          id="province"
          placeholder=" "
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          autoComplete="off"
        />
        <label htmlFor="province">Search by Province</label>
      </div>
      {optionList}
    </React.Fragment>
  );
}

export default SearchProvince;
