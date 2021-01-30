export const setCookie = (name, value, exdays) => {
  document.cookie = `${name ?? ""}=${value ?? ""} ;path=/ `;
};

export const removeCookie = (name) => {
  setCookie(name, "");
};

export const getCookie = (name) => {
  const match =
    document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          // eslint-disable-next-line
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    ) ?? [];
  return match[1] ?? undefined;
};
