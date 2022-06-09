// Add your code here
// const formData = {
//   name: `${userName}`,
//   email: `${userEmail}`,
// };

// const configObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     name: `${userName}`,
//     email: `${userEmail}`,
//   }),
// };

// function errorMessage(){
//     return alert("Unauthorized Access")
// }

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name, email
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.id);
      const id = (document.getElementsByTagName("body").innerText = data.id);
      document.body.append(id);
    })

    .catch(() => {
      const errorMessage = (document.getElementsByTagName("body").innerText =
        "Unauthorized Access")
      document.body.append(errorMessage);
    });
}
submitData();

//////////////////////////////////////////////////////////////////

// function errorMessage(){
//     return alert("Unauthorized Access")
// }

// function submitData(userName, userEmail) {
//   return fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       name: `${userName}`,
//       email: `${userEmail}`,
//     }),
//   })
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data.id)
//     //   let id = document.querySelector('id')
//     //   id.innerText = data.id
//     //   document.append(id)
//     //   console.log(id)
//     })

//     .catch(errorMessage)

//     // .catch((error) => {
//     //     alert("Unauthorized Access")
//     //     console.log(error.message)
//     //     const newParagraph = body.createElement('p')
//     //     const message = body.append('p')
//     //     message.innerText = error.message
//     //     body.appendChild(newParagraph)
//     // })

// }
// submitData();
