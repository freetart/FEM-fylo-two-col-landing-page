const validateEmail = () => {
  const formHero = document.querySelector(".cta--hero");
  const emailInputHero = document.querySelector(".cta--hero .cta__input");
  const formBanner = document.querySelector(".cta--banner");
  const emailInputBanner = document.querySelector(".cta--banner .cta__input");

  // check hero input
  const checkInputHero = () => {
    const emailValueHero = emailInputHero.value.trim();

    if (emailValueHero === "") {
      setErrorMsg(emailInputHero, "Email cannot be blank");
    } else if (!isEmail(emailValueHero)) {
      setErrorMsg(emailInputHero, "Email is not valid");
    } else {
      setSuccess(emailInputHero);
    }
  };

  // check banner input
  const checkInputBanner = () => {
    const emailValueBanner = emailInputBanner.value.trim();

    if (emailValueBanner === "") {
      setErrorMsg(emailInputBanner, "Email cannot be blank");
    } else if (!isEmail(emailValueBanner)) {
      setErrorMsg(emailInputBanner, "Email is not valid");
    } else {
      setSuccess(emailInputBanner);
    }
  };

  // error message
  const setErrorMsg = (input, message) => {
    const inputGroup = input.parentElement.parentElement;
    const errorMessage = inputGroup.querySelector(".cta__message");
    errorMessage.innerText = message;
    inputGroup.classList.remove("success");
    inputGroup.classList.add("error");
  };

  const setSuccess = (input) => {
    const inputGroup = input.parentElement.parentElement;
    inputGroup.classList.remove("error");
    inputGroup.classList.add("success");
  };

  // check if valid email
  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  // submit form
  formHero.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputHero();
  });

  formBanner.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputBanner();
  });
};

export default validateEmail;
