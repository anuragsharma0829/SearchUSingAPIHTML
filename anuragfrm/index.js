// // fetch("http://localhost:8081/user/").then(
// //   res => {
// //     res.json().then(
// //       data => {
// //         console.log(data);
// //         if (data.data.length > 0) {

// //           var temp = "";
// //            data.forEach((itemData) => {
// //             temp += "<tr>";
// //             temp += "<td>" + itemData.id + "</td>";
// //             temp += "<td>" + itemData.username + "</td>";
// //             temp += "<td>" + itemData.firstName + "</td></tr>";
// //           });
// //           document.getElementById('data').innerHTML = temp;
// //         }
// //       }
// //     )
// //   }
// // )







// fetch("https://jsonplaceholder.typicode.com/posts", {
//   headers: {
//     "Authorization": "Bearer myToken123"
//   }
// }).then(
//   res => {
//     res.json().then(
//       data => {
//         let autorization="BAreirtolejkjhkdjf"
//         localStorage.setItem("token",autorization)
//         let iten=localStorage.getItem("token",autorization)
//         console.log(iten);
//         console.log("Hiii", data);
//         if (data.length > 0) {
//           var temp = "";
//           data.forEach((itemData) => {
//             temp += "<tr>";
//             temp += "<td>" + itemData.userId + "</td>";
//             temp += "<td>" + itemData.title + "</td>";
//             temp += "<td>" + itemData.body + "</td>";
//             temp += "</tr>";
//           });
//           document.getElementById('data').innerHTML = temp;
//         }
//       }
//     )
//   }
// );


document.addEventListener('DOMContentLoaded', () => {
// Define variables for search input and table data
const searchInput = document.getElementById('search');
const tableData = document.getElementById('data');

// Fetch data from API with authorization header
fetch("https://jsonplaceholder.typicode.com/posts", {
  headers: {
    "Authorization": "Bearer myToken123"
  }
}).then(
  res => {
    res.json().then(
      data => {
        // Store authorization token in local storage
        let authorization = "BAreirtolejkjhkdjf";
        localStorage.setItem("token", authorization);

        // Create table rows for fetched data
        let temp = "";
        data.forEach((itemData) => {
          temp += "<tr>";
          temp += "<td>" + itemData.id + "</td>";
          temp += "<td>" + itemData.title + "</td>";
          temp += "<td>" + itemData.body + "</td>";
          temp += "</tr>";
        });
        tableData.innerHTML = temp;

        // Add event listener for search input
        searchInput.addEventListener('keyup', (event) => {
          const searchText = event.target.value.toLowerCase();
          const rows = tableData.getElementsByTagName('tr');

          // Loop through table rows to filter data by search input
          for (let i = 0; i < rows.length; i++) {
            const userId = rows[i].getElementsByTagName('td')[0].innerText.toLowerCase();
            const title = rows[i].getElementsByTagName('td')[1].innerText.toLowerCase();
            const body = rows[i].getElementsByTagName('td')[2].innerText.toLowerCase();
            if (userId.includes(searchText) || title.includes(searchText) || body.includes(searchText)) {
              rows[i].style.display = "";
            } else {
              rows[i].style.display = "none";
            }
          }
        });
      }
    )
  }
);



});


