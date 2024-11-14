// Lesson Code-Along Code:
/*const formData = {
    dogName: "Scooby Doo",
    dogBreed: "Great Dane",
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    })
    .catch(function (error) {
        alert("Bad things! Ragnarok!");
        console.log(error.message);
    });*/


// Add your code here
function submitData(userName, userEmail) {
    const userData = {
        name: userName,
        email: userEmail,
    };

    return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(userData),
            })
            .then((resp) => resp.json())
            .then(function (data) {
                const pTag = document.createElement('p');
                pTag.textContent = data.id;
                document.querySelector("body").appendChild(pTag);
            })
            .catch((error) => {
                const h3Tag = document.createElement('h3');
                h3Tag.textContent = error.message;
                document.querySelector("body").appendChild(h3Tag);
            })
}