const getData = async () => {
  try {
    const URL = "https://randomuser.me/api/?results=5";
    const res = await fetch(URL);
    const { results } = await res.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

const destructureData = async () => {
  const results = await getData();

  const users = results.map((user) => {
    const img = user.picture.large;
    const firstName = user.name.first;
    const lastName = user.name.last;

    return { img, firstName, lastName };
  });

  return users;
};

export const displayData = async () => {
  const users = await destructureData();

  const quoteImg = [...document.querySelectorAll(".quote__avatar")];
  const quoteName = [...document.querySelectorAll(".quote__username")];

  quoteImg.forEach((_, idx) => {
    quoteImg[idx].src = users[idx].img;
  });

  quoteName.forEach((_, idx) => {
    quoteName[
      idx
    ].textContent = `${users[idx].firstName} ${users[idx].lastName}`;
  });
};
