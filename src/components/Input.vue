<template>
  <div class="displayFlex size">
    <div class="header">Login</div>

    <div class="defaultFontSize flex02">
      Please enter you Login and your Password
    </div>

    <div class="itmSize">
      <div class="borderWhite displayFlex borderRadius">
        <img class="inputLogoSize padding" src="userIcon.svg" />
        <input
          v-model="user.email"
          id="email"
          type="text"
          placeholder="Username or E-mail"
          class="defaultFontSize transparent inputStyle textColor"
        />
      </div>
    </div>

    <div class="itmSize flex02">
      <div class="borderWhite displayFlex borderRadius">
        <img class="inputLogoSize padding" src="passIcon.svg" />
        <input
          v-model="user.password"
          id="password"
          type="password"
          placeholder="Password"
          class="defaultFontSize transparent inputStyle textColor"
        />
      </div>
      <div class="forgotPass">
        <a href="..." class="linkDecoration textColor">Forgot password?</a>
      </div>
    </div>

    <button
      class="btn borderRadius defaultFontSize itmSize transparent cursor"
      @click.enter="loginButton()"
    >
      Login
    </button>

    <button
      type="button"
      class="defaultFontSize borderRadius itmSize googleSignIn cursor textColor"
      @click="googleLogin"
    >
      <img class="inputLogoSize" src="googleicon2.jpg" /> Or sign-in with Google
    </button>

    <div>
      <div>
        Not a member yet ? <a href="..." class="linkDecoration">Register!</a>
      </div>
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
        async loginButton() {
            // we can destructure object key values using destructuring `const {destructuredValue} = object
            // we are pulling user object and its email, password keys right out of this; this references component object
            const { user: {email, password}} = this;
            // we can perform repetitive functions once and then use the result
            const trimmedEmail = email.trim();
            const trimmedPassword = password.trim();
            if (!trimmedEmail && !trimmedPassword) {
                alert("Unesite svoju e-mail adresu/korisničko ime i svoju lozinku")
                // stop advancing trough the function in case the code enterers this if block
                return;
            }
            // alert("Bravo, oba popunjena");
            const response = await fetch('http://restapi.adequateshop.com/api/authaccount/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: trimmedEmail,
                    password: trimmedPassword,
                }),
            })
            // wait for the response body to be parsed as a json object
            const responseJson = await response.json()
            // destructuring code and data keys from the response json
            const { code, data } = responseJson;
            // checking if code is equals to number 1 as that represents an error, and if data is null which is also no continue condition
            // i have used ! operator on data as null value equals to false, then is we invert it with ! we get true; meaning data is falsey value
            if (code === 1 && !data) {
                alert("Nevaljani username i password, provjerite podatke i pokusajte opet");
                // we are terminating the further function execution because we ran into an error; we notified the user and this function can not continue
                return;
            }

            // in case code is not 1 which is an error and we have the data we can continue
            const { Token } = data;
            // if token exists set it as current token in the local storage and emit login success event
            if (Token) {
                localStorage.setItem("token", Token);
                this.$emit("loginSuccess");
            } else {
                console.log("think of an error handling method")
            }
        }
    },
    googleLogin() {
    alert("Google login...not a member yet!")
    },
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
  border: solid 1px #7bf98c;
  color: #7bf98c;
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

.flex02 {
  flex: 0.2;
}

.padding {
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
input:-webkit-autofill:focus input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}
</style>
