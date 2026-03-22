import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 REPLACE THIS WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// UI refs
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const authDiv = document.getElementById("auth");
const appDiv = document.getElementById("app");

window.register = async () => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      emailInput.value,
      passwordInput.value
    );
    alert("Registered!");
  } catch (e) {
    alert(e.message);
  }
};

window.login = async () => {
  try {
    const userCred = await signInWithEmailAndPassword(
      auth,
      emailInput.value,
      passwordInput.value
    );

    showApp();
    loadPrefs(userCred.user.uid);

  } catch (e) {
    alert(e.message);
  }
};

window.logout = async () => {
  await signOut(auth);
  location.reload();
};

function showApp() {
  authDiv.classList.add("hidden");
  appDiv.classList.remove("hidden");
}

window.savePrefs = async () => {
  const user = auth.currentUser;

  const prefs = {
    vegan: document.getElementById("vegan").checked,
    glutenFree: document.getElementById("glutenFree").checked
  };

  await setDoc(doc(db, "users", user.uid), prefs);
  loadMeals(prefs);
};

async function loadPrefs(uid) {
  const docSnap = await getDoc(doc(db, "users", uid));

  if (docSnap.exists()) {
    const prefs = docSnap.data();

    document.getElementById("vegan").checked = prefs.vegan;
    document.getElementById("glutenFree").checked = prefs.glutenFree;

    loadMeals(prefs);
  }
}

function loadMeals(prefs) {
  const meals = [
    { name: "Salad", vegan: true, glutenFree: true },
    { name: "Burger", vegan: false, glutenFree: false },
    { name: "Rice Bowl", vegan: true, glutenFree: true },
    { name: "Pasta", vegan: false, glutenFree: false }
  ];

  const list = document.getElementById("mealList");
  list.innerHTML = "";

  meals
    .filter(m =>
      (!prefs.vegan || m.vegan) &&
      (!prefs.glutenFree || m.glutenFree)
    )
    .forEach(m => {
      const li = document.createElement("li");
      li.textContent = m.name;
      list.appendChild(li);
    });
}
