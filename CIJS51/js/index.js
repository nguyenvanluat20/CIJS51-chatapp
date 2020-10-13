const init = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyB9Ok1D950__5AztwBw3ILQDfTYoI0onbk",
        authDomain: "chat-app-def99.firebaseapp.com",
        databaseURL: "https://chat-app-def99.firebaseio.com",
        projectId: "chat-app-def99",
        storageBucket: "chat-app-def99.appspot.com",
        messagingSenderId: "99854185758",
        appId: "1:99854185758:web:aac89a2899f4bf30b2c50f",
        measurementId: "G-8WZ2PCJHBR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log(firebase.app().name)
    firebase.auth().onAuthStateChanged((res) => {
            console.log(res)
            if (res) {
                if (res.emailVerified) {
                    model.currentUser = {
                        displayName: res.displayName,
                        email: res.email
                    }
                    console.log(model.currentUser)
                    view.setActiveScreen('chatPage')
                } else {
                    view.setActiveScreen('loginPage')
                    alert('please verify email')
                }
            } else {
                view.setActiveScreen('registerPage')
            }
        })
        // view.setActiveScreen('registerPage')
}
window.onload = init