const model = {}
model.currentUser = {}
model.register = async({ firstName, lastName, email, password }) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            // update profile
        firebase.auth().currentUser.updateProfile({
                displayName: firstName + ' ' + lastName
            })
            // gui email verify
        firebase.auth().currentUser.sendEmailVerification()
        alert('Regester success! please confirm emali')
        view.setActiveScreen('loginPage')
    } catch (err) {
        alert(err.message)
    }
}

//data trang login
model.login = async({ email, password }) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            // window.location = "http://mindx.edu.vn";
            // alert('Chúc mừng bạn đã đăng nhập thành công')
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}