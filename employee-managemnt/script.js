(async function getData() {
  const response = await fetch("./data.json");
  const data = await response.json();

  console.table(data);

  const list = document.querySelector(".employees-list");
  data.forEach((employee) => {
    const li = document.createElement("div");
    li.textContent = employee.firstName;
    li.className = "employee-card";
    li.addEventListener("click", () => {
    //   alert(
    //     `Name: ${employee.firstName} ${employee.lastName}\nEmail: ${employee.email}`
    //   );
      showEmployeeDetails(employee)
    });
    list.appendChild(li);
  });
})();

function showEmployeeDetails(employee) {
    const modal = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("h1");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    image.src = employee.imageUrl;
    name.textContent = `${employee.firstName} ${employee.lastName}`;


    // modal.appendChild(image);
    modal.appendChild(name);
    const employeeDetails = document.querySelector(".employees-item");
    employeeDetails.appendChild(modal);
}



