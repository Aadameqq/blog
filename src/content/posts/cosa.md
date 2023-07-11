---
title: Oauth 2.0
keywords: test, test
category: test2
date: 21.03.2021
description: Ddsklfklsdfksdfsjdfkldsfjsjkdklkdskjf
---

Oauth 2.0 jest **standardem** pozwalającym na udzielenie zewnętrznej aplikacji dostępu do danych użytkownika za jego zgodą. **Jest on sposobem na ułatwienie sobie życia i zrzucenie odpowiedzialności** za np. bezpieczne przechowywanie haseł na zewnętrzną, zazwyczaj większą, a co za tym idzie bezpieczniejszą aplikację. Jest to również znaczne ułatwienie dla samego użytkownika, który nie musi zakładać kolejnego konta.

## W jaki sposób działa?

Działanie oauth 2.0 można rozłożyć na kilka kroków.
Na początku nasza strona przekierowuje użytkownika (którego będziemy nazywać właścicielem zasobów) na odpowiedni adres wraz z informacjami o tym jakie uprawnienia chcemy uzyskać ( tzw. scope), naszym identyfikatorem (client id), adresem, na który aplikacja ma przekierować użytkownika (redirect uri) po udzieleniu dostępu oraz sposobem, w jaki później uzyskamy dostęp do zasobu (response type).
Następnie właściciel zasobów, na stronie na którą przekierowaliśmy (serwer zasobów), udziela nam dostęp do swoich danych, po czym zostaje z powrotem przekierowany na naszą stronę wraz z pewnymi informacjami. Kolejne etapy będą zależeć od wybranego sposobu uzyskania dostępu do zasobów.
Mamy do wyboru cztery rodzaje uzyskania dostępu, lecz w tym artykule skupię się na najczęściej używanym.
Authorization code flow - używany, gdy nasza strona posiada backend. Spowodowane jest to faktem, iż wymagane jest podanie sekretu, którego nie powinno umieszczać się po stronie przeglądarki. Wraz z przekierowaniem otrzymujemy kod, który żyje bardzo krótko oraz jest jednorazowy. Kod ten, wraz z parametrem client id, secret, grant type określającym używany typ uzyskania dostępu do zasobu oraz innymi danymi, przesyłany jest do serwera zasobów. W odpowiedzi otrzymujemy token dostępu (access token), który pozwala na np. odczytanie nicku użytkownika.
Mamy też możliwość skorzystania z dodatkowego zabezpieczenia, jakim jest state. State to opcjonalny parametr dołączany do przekierowania. Serwer zasobów również zwraca ten sam parametr z dokładnie tą samą wartością. Dzięki temu mamy pewność, że przekierowanie przychodzi od serwera zasobów.
Wszystkie powyższe funkcjonalności zazwyczaj znajdują się pod dwoma endpointami:

- /authorize - w te miejsce będziemy przekierowywali właściciela zasobów
- /oauth/token - w tym miejscu wymienimy kod na token

## Wykorzystanie na przykładzie Discord'a i Node.js

Pierwszym krokiem jaki trzeba wykonać, jest skonfigurowanie aplikacji w [panelu](https://discord.com/developers/applications). Tworzymy nową aplikację, a następnie przechodzimy do zakładki "Oauth2". Na początku musimy dodać adres przekierowania. Ponieważ wykonanie tego jest intuicyjne, nie będę tłumaczył krok po kroku. Dodam tylko, że w przykładzie adresem przekierowania będzie "http://localhost:3000/redirect".

Dla ułatwienia wykorzystam bibliotekę express oraz axios. Kod prostego serwera będzie wyglądał w poniższy sposób:

```ts
const express = require("express");
const config = require("./config.json");

const app = express();

app.use(express.json());

app.get("/test", (req, res) => res.send("Test"));

app.get("/redirect",handleRedirect)

app.use(express.static("public"));

app.listen(3000, () => console.log("ready"));

async function handleRedirect(req, res) {

}
```

Do tego plik konfiguracyjny w formacie `json`, do którego wprowadzamy dane z panelu. By móc skopiować secret, należy go najpierw zresetować za pomocą odpowiedniego przycisku znajdującego się pod napisem "CLIENT SECRET"

```json
{
    "CLIENT_ID":"id",
    "CLIENT_SECRET":"secret",
    "REDIRECT_URI":"np. http://localhost:3000/redirect"
}
```

Wróćmy ponownie do panelu. Pod zakładką "Oauth2" znajduje się "URL Generator". Pozwoli on nam wygenerować url, na które przekierujemy użytkownika. Zaznaczamy opcję "Identify", a następnie wybieramy odpowiedni adres przekierowania. Teraz wystarczy utworzyć prosty plik html w folderze public. Umieścimy w nim przycisk, który po kliknięciu przekieruje na wygenerowany url.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>Login with discord</button>
    <script>
        document.querySelector("button").addEventListener("click",()=>{
            location.href = "adres z panelu"
        })
    </script>
</body>
</html>
```

Gdy użytkownik wyrazi zgodę na udostępnienie danych, zostanie przekierowany na **/redirect** wraz z kodem. Możemy go wymienić na token wysyłając zapytanie do api discorda wraz z odpowiednimi danymi. W tym celu dodajemy poniższy kod do wcześniej utworzonej funkcji **handleRedirect**

```ts
async function handleRedirect(req, res) {
  const code = req.query.code;

  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = config;

  const response = await axios({
    method: "post",
    url: ` https://discord.com/api/v8/oauth2/token`,
    data:  `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT_URI}&scope=identify`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
```

Posiadając token możemy pobrać nick użytkownika również wysyłając zapytanie do api discorda w poniższy sposób

```
const userDataResponse = await axios({
  method: "get",
  url: `${API_URI}/v8/users/@me`,
  headers: {
    Authorization: `Bearer ${response.data.access_token}`,
  },
});
res.send(userDataResponse.data.username);
```

W ten oto sposób utworzyliśmy logowanie poprzez discorda. Cały kod dostępny jest [tutaj](https://github.com/Aadameqq/simple-oauth-with-discord).

### Poniżej możemy zobaczyć cytat testowy
> Oauth 2.0 jest dosyć proste w użyciu  
Wystarczy umieć czytać dokumentację techniczną ze zrozumieniem
