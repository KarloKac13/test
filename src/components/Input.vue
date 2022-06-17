<template>
    <div class="displayFlex size">

        <div class="header">Login</div>

        <div class="defaultFontSize flex02">Please enter you Login and your Password</div>
        
        <div class="itmSize">
            <div class="borderWhite displayFlex borderRadius">
                <img class="inputLogoSize padding" src="userIcon.svg">
                <input v-model="user.email" id="email" type="text" placeholder="Username or E-mail" 
                class="defaultFontSize transparent inputStyle textColor">
            </div>
        </div>

        <div class="itmSize flex02">
            <div class="borderWhite displayFlex borderRadius">
                <img class="inputLogoSize padding" src="passIcon.svg">
                <input v-model="user.password" id="password" type="password" placeholder="Password" 
                class="defaultFontSize transparent inputStyle textColor"> 
            </div>
            <div class="forgotPass">
                <a href="..." class="linkDecoration textColor">Forgot password?</a>
            </div>
        </div>

        <button class="btn borderRadius defaultFontSize itmSize transparent cursor" @click.enter="loginButton()" >Login</button>

        <button type="button" class="defaultFontSize borderRadius itmSize googleSignIn cursor textColor" @click="googleLogin" >
            <img class="inputLogoSize" src="googleicon2.jpg" > Or sign-in with Google
        </button>

        <div>
            <div>Not a member yet ? <a href="..." class="linkDecoration">Register!</a></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: "",
                password: ""
            },
            email: "Developer6@gmail.com",
            password: 123456,
        }
    },
    methods: {
          loginButton() {
            if (this.user.email.trim() === "" && this.user.password.trim() === "") {
                alert("Unesite svoju e-mail adresu/korisničko ime i svoju lozinku")
            } else if (this.user.email.trim() === "") {
                alert("Unesite svoju e-mail adresu ili korisničko ime");
            } else if (this.user.password.trim() === "") {
                alert("Unesite svoju lozinku");
            } else if (this.user.email.trim().toLowerCase() === this.email.toLowerCase() && parseInt(this.user.password.trim()) === this.password) {

                // alert("Bravo, oba popunjena");
                fetch('http://restapi.adequateshop.com/api/authaccount/login', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: this.user.email,
                        password: this.user.password
                    }),
                })
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result)
                        localStorage.setItem("token", result.data.Token);
                        alert("Welcome" + " " + result.data.Name);
                    })
                    .then (this.$emit("switchComp", "getAllUsers")) 
                    .catch((error) => console.log("error", error));
            }

            else {
                alert("Molimo unesite ispravno korisničko ime i lozinku!")
            }
        },

         googleLogin() {
            alert("Google login...not a member yet!")
        },

    }
}
</script>

<style scoped>

::placeholder {
    color: #fff;
    opacity: 0.85;
}
.size {
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    height: 600px;
    width: 400px;
}

.displayFlex {
    display: flex;
}

.inputStyle {
    border: none;
    outline: none;
    width: 100%;
}

/* vertical-align:middle sam također našao na stack overflow */

.inputLogoSize {
    height: 25px;
    width: 25px;
    vertical-align: middle;
    padding-bottom: 5px;
}

.btn {
    border: solid 1px #7BF98C;
    color: #7BF98C;
}

.googleSignIn {
    background-color: #222;
    border: solid 1px transparent;
    padding-top: 5px;
}

.defaultFontSize {
    font-size: 20px;
}

.borderWhite {
    border: solid 1px #fff;
}

.transparent {
    background-color: transparent;
}

.header {
    font-size: 50px;
}

.forgotPass {
    padding-top: 10px;
    text-align: end;
}

.linkDecoration {
    text-decoration: none;
}

.itmSize {
    height: 50px;
    width: 100%;
}

.flex02{
    flex:0.2;
}

.padding{
    padding: 10px;
}

.textColor {
    color: #fff;
}

.cursor {
    cursor: pointer;
}

.borderRadius {
    border-radius: 4px;
}

/* Ovaj kod je kopiran sa stack overflow-a */

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}
</style>