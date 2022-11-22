// /password/forgotpassword  -- > post

document.getElementById("form").addEventListener("submit", (e) => {
  let email = document.getElementById("email").value;

  sendPasswordResetReq(email);
});

async function sendPasswordResetReq(email) {
  try {
    let res = await axios.post(
      "http://13.230.14.1:3000/password/forgotpassword",
      { email }
    );

    console.log("sendPasswordResetReq ==> \n ", res);
  } catch (error) {
    console.log("err in  sendPasswordResetReq \n ", error);
  }
}
