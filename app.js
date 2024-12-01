// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_Ragk4z68tvdKxjF8GJEqvf_r9_IJmdc",
    authDomain: "student-teacher-booking-4da36.firebaseapp.com",
    projectId: "student-teacher-booking-4da36",
    storageBucket: "student-teacher-booking-4da36.firebasestorage.app",
    messagingSenderId: "1091476531891",
    appId: "1:1091476531891:web:07ef410ac4a2b0cbbc9ec6",
    measurementId: "G-RZMJRFLLKM"
  };
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  // Double-click Login to Show Book Appointment Form
  function showBookAppointment() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      document.getElementById('auth-section').style.display = 'none';
      document.getElementById('appointment-section').style.display = 'block';
      document.getElementById('page-title').innerText = "Book Appointment";
    } else {
      alert("Please fill in your email and password!");
    }
  }
  
  // Book Appointment
  function bookAppointment() {
    const studentName = document.getElementById('student-name').value;
    const teacherName = document.getElementById('teacher-name').value;
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
  
    if (studentName && teacherName && date && time) {
      const newAppointment = {
        studentName,
        teacherName,
        date,
        time,
      };
  
      database.ref('appointments/').push(newAppointment)
        .then(() => {
          alert("Appointment booked successfully!");
        })
        .catch((error) => {
          alert("Error: " + error.message);
        });
    } else {
      alert("Please fill all fields.");
    }
  }
  
  // Navigate to Appointments Page
  function navigateToAppointments() {
    window.location.href = "appointments.html"; // Redirect to a new page
  }
  

