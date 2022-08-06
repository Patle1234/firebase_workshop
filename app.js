const firebaseConfig = {
    apiKey: "AIzaSyBFryX6LyfrJHzCpvDEGGHfXGCs06Oz2wA",
    authDomain: "fir-workshop-stdl.firebaseapp.com",
    projectId: "fir-workshop-stdl",
    storageBucket: "fir-workshop-stdl.appspot.com",
    messagingSenderId: "1005747719546",
    appId: "1:1005747719546:web:32f6b12880834108621ac3",
    measurementId: "G-6ENCDCYBEP"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

function firebaseWrite() {
    var pAge = document.getElementById("age").value;
    var pNumber = document.getElementById("number").value;
    var name = document.getElementById("name").value;
    var docData = {
        Age: pAge,
        Number: pNumber
    };
    db.collection("Users").doc(name).set(docData).then(() => {
        console.log("Document successfully written!");
    });
    
}

function firebaseRead() {
    var name = document.getElementById("name2").value;
    var docRef = db.collection("Users").doc(name);
    docRef.get().then((doc) => {
        if (doc.exists) {
            document.getElementById("rAge").innerHTML = doc.data()['Age'];
            document.getElementById("rNumber").innerHTML = doc.data()['Number'];
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


