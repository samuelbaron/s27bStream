<template>
  <div class="container">
    <div>
      <h1 class="title">
        Uroczystość Pamiątki
      </h1>
      <div class="streamWrapper">
        <div class="stream"></div>
      </div>
      <div>
        <h2 class="subtitle">
          Zmień ilość osób, które korzystają z Pamiątki:
        </h2>

        <button
          @click="changeUsersNumber(1)"
          class="button--grey"
        >
          1
        </button>
        <button
          @click="changeUsersNumber(2)"
          class="button--grey"
        >
          2
        </button>
        <button
          @click="changeUsersNumber(3)"
          class="button--grey"
        >
          3
        </button>
        <button
          @click="changeUsersNumber(4)"
          class="button--grey"
        >
          4
        </button>
        <button
          @click="changeUsersNumber(5)"
          class="button--grey"
        >
          5
        </button>
        <button
          @click="changeUsersNumber(6)"
          class="button--grey"
        >
          6
        </button>
        <button
          @click="changeUsersNumber(7)"
          class="button--grey"
        >
          7
        </button>
        <button
          @click="changeUsersNumber(8)"
          class="button--grey"
        >
          8
        </button>
        <button
          @click="changeUsersNumber(9)"
          class="button--grey"
        >
          9
        </button>
        <button
          @click="changeUsersNumber(10)"
          class="button--grey"
        >
          10
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import firebase from "@/firebase";

export default {
  data() {
    return {
      userId: null,
      userNumber: null
    }
  },
  created() {
    // get user id
    this.userId = Cookies.get('id')
  },
  methods: {
    changeUsersNumber(value) {
      this.userNumber = value

      let usersDocument = firebase.firestore().collection("streamUsers").doc(this.userId)
      usersDocument.update({
        number: this.userNumber
      })
        .then(() => {
          console.log("Done")
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  padding: 30px 30px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 400;
  font-size: 30px;
  color: #273645;
  letter-spacing: 1px;
}

.subtitle {
  margin-top: 30px;

  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  letter-spacing: 1px;
}

@media all and (max-width: 500px){
  .streamWrapper {
    margin-top: 15px;
    width: 100%;
    height: 30vh;
    background-color: greenyellow;
  }

  .stream {
    width: 100%;
    height: 100%;
    background-color: black;
  }
}
@media all and (min-width: 501px){
  .streamWrapper {
    margin-top: 15px;
    width: 100%;
    height: 50vh;
    background-color: greenyellow;
  }

  .stream {
    width: 100%;
    height: 100%;
    background-color: black;
  }
}
</style>
