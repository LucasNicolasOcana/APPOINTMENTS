const Validation = ({ name, email, birthdate, nDni, username, password }) => {
  const errors = {};

  const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,30}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const birthdateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  const nDniRegex = /^(?!(0{4}|1{4}|2{4}|3{4}|4{4}|5{4}|6{4}|7{4}|8{4}|9{4}))\d{7,8}$/;
  const usernameRegex = /^[a-zA-ZñÑ0-9_-\s]{4,15}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,10}$/;

  if (!nameRegex.test(name))
    errors.name = "Solo se admiten letras (mínimo 4, máximo 30 letras)";
  if (!emailRegex.test(email)) errors.email = "Correo inválido";
  if (!birthdateRegex.test(birthdate))
    errors.birthdate = "Fecha de nacimiento inválida";
  if (!nDniRegex.test(nDni)) errors.nDni = "Número de DNI inválido";
  if (!usernameRegex.test(username))
    errors.username = "Solo letras, números, '-', '_' (máximo 15 caracteres)";
  if (!passwordRegex.test(password))
    errors.password =
      "La contraseña debe contener al menos una letra mayúscula, minúscula, un número, y tener una longitud entre 8 y 10 caracteres";

  return errors;
};

export default Validation;
