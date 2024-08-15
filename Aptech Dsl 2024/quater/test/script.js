const apiPrefix = `https://662ea63b43b6a7dce30d76f1.mockapi.io/teamwarriors/api1`;
const dataStorageUrl = `${apiPrefix}/datastorage`;
const instancesEl = document.getElementById("instances");

async function fetchInstances() {
  const response = await fetch(dataStorageUrl);
  const data = await response.json();
  return data;
}

async function addInstance(name) {
  const response = await fetch(dataStorageUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  const data = await response.json();
  return data;
}

async function updateInstance(id, name) {
  const response = await fetch(`${dataStorageUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  const data = await response.json();
  return data;
}

async function deleteInstance(id) {
  const response = await fetch(`${dataStorageUrl}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

function displayInstances(instances) {
  instancesEl.innerHTML = "";
  instances.forEach((instance) => {
    const instanceEl = document.createElement("div");
    instanceEl.textContent = instance.name;
    instanceEl.addEventListener("click", () => selectInstance(instance));
    instancesEl.appendChild(instanceEl);
  });
}

function selectInstance(instance) {
  document.getElementById("update-name").value = instance.name;
    document.getElementById("update-id").value = instance.id;
    document.getElementById("delete-id").value = instance.id;
  document.getElementById("update-form").style.display = "block";
  document.getElementById("add-form").style.display = "none";
  document.getElementById("delete-form").style.display = "block";
}

document
  .getElementById("add-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("add-name").value;
    const instance = await addInstance(name);
    displayInstances([instance]);
    document.getElementById("add-name").value = "";
  });

document
  .getElementById("update-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const id = document.getElementById("update-id").value;
    const name = document.getElementById("update-name").value;
    await updateInstance(id, name);
    document.getElementById("update-form").style.display = "none";
    document.getElementById("delete-form").style.display = "none";
    document.getElementById("add-form").style.display = "block";
    fetchInstances().then(displayInstances);
  });

document
  .getElementById("delete-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const id = document.getElementById("delete-id").value;
    await deleteInstance(id);
    document.getElementById("update-form").style.display = "none";
    document.getElementById("delete-form").style.display = "none";
    document.getElementById("add-form").style.display = "block";
    fetchInstances().then(displayInstances);
  });

document
  .getElementById("refresh")
  .addEventListener("click", () => fetchInstances().then(displayInstances));

fetchInstances().then(displayInstances);
