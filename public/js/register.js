// const { regForm } = document.forms;

// console.log(regForm);
// regForm.addEventListener('submit', async (event) => {
//   // console.log('check');
//   event.preventDefault();

//   const formData = Object.fromEntries(new FormData(regForm));
//   // console.log(formData);
//   const res = await fetch('/user/register', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   });

//   if (res.ok) {
//     const { id } = await res.json();
//     window.location.assign('/');
//   } else {
//     alert('что то пошло не так');
//   }
// });
