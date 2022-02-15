// const { logForm } = document.forms;
// console.log(logForm);

// logForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const formData = Object.fromEntries(new FormData(logForm));

//   const res = await fetch('/user/login', {
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
//     alert('что-то пошло не так');
//   }
// });
