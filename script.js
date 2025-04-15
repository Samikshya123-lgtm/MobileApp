import { getDatabase, set, get, ref, update, remove } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

const app=initializeApp

    const db= getdatabase(app)


console.log(db)

function writeUserData(name, email) {

    const userRef = ref(db, 'users');

    const newUserRef = push(userRef); // creates a new node with unique ID

    set(newUserRef, {

      name: name,

      email: email

    });

    console.log("New user ID:", newUserRef.key);

  }

  

// Function to write user data to firebase realtime database

Funtion writeUser

function readUser(){

    const userRef = ref(db, 'users')


    get(userRef).then(snapshot)=>{

        snapshot.forEach(childsnapshot)=>

    }

}

<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Your Name | Portfolio</title>

  <link rel="stylesheet" href="styles.css" />

  <style>

    /* Simple reset and base styles */

    * {

      margin: 0;

      padding: 0;

      box-sizing: border-box;

    }


    body {

      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

      background-color: #f9f9f9;

      color: #333;

      line-height: 1.6;

    }


    header {

      background-color: #fff;

      padding: 20px;

      text-align: center;

      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

    }


    nav a {

      margin: 0 15px;

      text-decoration: none;

      color: #333;

      font-weight: bold;

    }


    .hero {

      padding: 100px 20px;

      text-align: center;

      background: linear-gradient(to right, #667eea, #764ba2);

      color: #fff;

    }


    .hero h1 {

      font-size: 3rem;

      margin-bottom: 10px;

    }


    .hero p {

      font-size: 1.2rem;

    }


    section {

      padding: 60px 20px;

      max-width: 1000px;

      margin: 0 auto;

    }


    footer {

      text-align: center;

      padding: 20px;

      background-color: #eee;

      font-size: 0.9rem;

    }

  </style>

</head>

<body>

    <script type="module">

        // Import the functions you need from the SDKs you need

        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

        import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

        // TODO: Add SDKs for Firebase products that you want to use

        // https://firebase.google.com/docs/web/setup#available-libraries

      

        // Your web app's Firebase configuration

        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

        const firebaseConfig = {

          apiKey: "AIzaSyCRd9gm72QsYJ0Ai_TfvCrWincJHzLC16I",

          authDomain: "test-project-a226b.firebaseapp.com",

          projectId: "test-project-a226b",

          storageBucket: "test-project-a226b.firebasestorage.app",

          messagingSenderId: "809030553729",

          appId: "1:809030553729:web:299dc2c41ce8fe8a30bd80",

          measurementId: "G-DKK3N8J1QX"

        };

      

        // Initialize Firebase

        const app = initializeApp(firebaseConfig);

        const analytics = getAnalytics(app);

      </script>

  <header>

    <h2>Your Name</h2>

    <nav>

      <a href="#about">About</a>

      <a href="#work">Work</a>

      <a href="#contact">Contact</a>

    </nav>

  </header>


  <section class="hero">

    <h1>Hello, I'm Your Name</h1>

    <p>I'm a UI/UX designer passionate about creating beautiful and user-friendly digital experiences.</p>

  </section>


  <section id="about">

    <h2>About Me</h2>

    <p>Write a short introduction about yourself here — who you are, what you do, and what you're passionate about.</p>

  </section>


  <section id="work">

    <h2>My Work</h2>

    <p>Showcase your best projects or case studies. You can include screenshots, descriptions, and links.</p>

  </section>


  <section id="contact">

    <h2>Contact</h2>

    <p>Provide your email, LinkedIn, or a contact form link so people can reach out.</p>

  </section>


  <footer>

    &copy; 2025 Your Name. All rights reserved.

  </footer>

</body>

</html>
