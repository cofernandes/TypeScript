// Cristian Olimpip Fernandes 2016323

// USER REGISTER
(async () => {
  const data = {
    email: "cristian.fernandes@gmail.com",
    password: "1234"
  };
  const response = await fetch("http://localhost:8080/api/v1/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  console.log(json);
})();

// LOGIN

(async () => {
  const data = {
    email: "cristian.fernandes@gmail.com",
    password: "1234"
  };
  const response = await fetch("http://localhost:8080/api/v1/auth/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  console.log(json);
})();

// LINKS REGISTER
(async () => {
  const data = {
    Url:
      "sheep_shows_gratitude_to_the_dog_after_saving_them_from_a_wolf_attack.",
    title:
      "Sheep shows gratitude to the dog after saving them from a wolf attack."
  };
  const response = await fetch("http://localhost:8080/api/v1/links/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDg3MTA3MDJ9.gWB2wD7XUJvd9NdmLusi13PsVuxcLbWGAqZZarAdIqc"
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  console.log(json);
})();

// DELETE LINK
(async () => {
  const response = await fetch("http://localhost:8080/api/v1/links/1", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTQ4NTI2MTY5fQ.d-RC6n8KY6DstlFgsuym8Ta0qgycccq58uDzI30j2Tg"
    }
  });
  const json = await response.json();
  console.log(json);
})();

// DOWN VOTE

(async () => {
  const response = await fetch(
    "http://localhost:8080/api/v1/links/3/downvote",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDg3MTA3MDJ9.gWB2wD7XUJvd9NdmLusi13PsVuxcLbWGAqZZarAdIqc"
      }
    }
  );
  const json = await response.json();
  console.log(json);
})();

//  UP VOTE

(async () => {
  const response = await fetch("http://localhost:8080/api/v1/links/3/upvote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDg3MTA3MDJ9.gWB2wD7XUJvd9NdmLusi13PsVuxcLbWGAqZZarAdIqc"
    }
  });
  const json = await response.json();
  console.log(json);
})();

//COMMENT LINK

(async () => {
  const data = {
    text: "This is a comment  in the link 3",
    link_id: 3
  };
  const response = await fetch("http://localhost:8080/api/v1/comments/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDg3MTA3MDJ9.gWB2wD7XUJvd9NdmLusi13PsVuxcLbWGAqZZarAdIqc"
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  console.log(json);
})();

// DELETE COMMENT
(async () => {
  const response = await fetch("http://localhost:8080/api/v1/comments/1", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDg3MTA3MDJ9.gWB2wD7XUJvd9NdmLusi13PsVuxcLbWGAqZZarAdIqc"
    }
  });
  const json = await response.json();
  console.log(json);
})();

// EDIT A COMMENT
(async () => {
  const data = {
    text: "Exactly."
  };
  const response = await fetch("http://localhost:8080/api/v1/comments/1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDg3MTA3MDJ9.gWB2wD7XUJvd9NdmLusi13PsVuxcLbWGAqZZarAdIqc"
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  console.log(json);
})();
