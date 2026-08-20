// Supabase configuration
const SUPABASE_URL = "https://zngnhssgpqxvimfocpil.supabase.co";
const SUPABASE_KEY = "sb_publishable_zbiPWLKaYRxQU-R3IgAO-A_RfkGfBZH";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// Check current user
async function getCurrentUser() {
  const { data, error } = await supabaseClient.auth.getUser();

  if (error) {
    console.log("No logged-in user");
    return null;
  }

  return data.user;
}

// Register
async function registerUser(email, password) {
  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    throw error;
  }

  return data;
}

// Login
async function loginUser(email, password) {
  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });

  if (error) {
    throw error;
  }

  return data;
}

// Logout
async function logoutUser() {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    throw error;
  }

  window.location.href = "index.html";
}

// Watch login/logout state
supabaseClient.auth.onAuthStateChange((event, session) => {
  console.log("Auth event:", event);

  if (session) {
    console.log("User logged in:", session.user.email);
  } else {
    console.log("No active session");
  }
});
