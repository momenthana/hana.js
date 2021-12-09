import Hana from "../dist/index.js"

Hana.init({
  clientId: "128ba3b3-f2ca-4a33-afaf-aae20ba79093",
})

console.log(Hana.Auth.getClientId())

Hana.Auth.token({
  grantType: "authorization_code",
  redirectUri: "https://test",
  code: "dc4dbd39-bb0e-49b5-82c4-2538628ec083",
}).then((res) => console.log(res))

Hana.Auth.tokenInfo({
  accessToken: "",
}).then((res) => console.log(res))
