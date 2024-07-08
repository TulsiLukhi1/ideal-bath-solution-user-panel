export const sendWhatsappMsg = async (
  WH_TOKEN = "",
  WH_URL = "",
  mobile_number,
  msg = ""
) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("token", WH_TOKEN);
  urlencoded.append("to", mobile_number);
  urlencoded.append("body", msg);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch(WH_URL, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
