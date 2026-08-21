// ========================================
// CRYPTOSIM APP.JS
// ========================================
// Supabase client is created in Supabase.js.
// Do NOT create another client here.
// ========================================


// ========================================
// REGISTER
// ========================================

const registerForm =
  document.getElementById("registerForm");

if (registerForm) {

  registerForm.addEventListener(
    "submit",
    async function (e) {

      e.preventDefault();

      const name =
        document.getElementById("name").value.trim();

      const email =
        document.getElementById("email").value.trim();

      const password =
        document.getElementById("password").value;

      const message =
        document.getElementById("registerMessage");

      message.style.display = "block";
      message.className = "message";
      message.textContent =
        "Creating your account...";

      try {

        const { error } =
          await supabaseClient.auth.signUp({

            email: email,

            password: password,

            options: {

              data: {
                full_name: name
              }

            }

          });


        if (error) {
          throw error;
        }


        message.className =
          "message success";

        message.textContent =
          "Account created successfully! You can now log in.";

        registerForm.reset();


      } catch (error) {

        message.className =
          "message error";

        message.textContent =
          error.message;

      }

    }
  );

}



// ========================================
// LOGIN
// ========================================

const loginForm =
  document.getElementById("loginForm");

if (loginForm) {

  loginForm.addEventListener(
    "submit",
    async function (e) {

      e.preventDefault();

      const email =
        document.getElementById("email").value.trim();

      const password =
        document.getElementById("password").value;

      const message =
        document.getElementById("loginMessage");


      message.style.display = "block";

      message.className =
        "message";

      message.textContent =
        "Logging in...";


      try {

        const { error } =
          await supabaseClient.auth.signInWithPassword({

            email: email,

            password: password

          });


        if (error) {
          throw error;
        }


        message.className =
          "message success";

        message.textContent =
          "Login successful!";


        setTimeout(
          function () {

            window.location.href =
              "dashboard.html";

          },
          500
        );


      } catch (error) {

        message.className =
          "message error";

        message.textContent =
          error.message;

      }

    }
  );

}



// ========================================
// LOGOUT
// ========================================

async function logoutUser() {

  const { error } =
    await supabaseClient.auth.signOut();


  if (error) {

    console.error(
      "Logout error:",
      error
    );

    return;

  }


  window.location.href =
    "index.html";

}



// ========================================
// CURRENT USER
// ========================================

async function getCurrentUser() {

  const {
    data,
    error
  } =
    await supabaseClient.auth.getUser();


  if (error) {

    console.error(
      "User error:",
      error
    );

    return null;

  }


  return data.user;

              }
