<template>
  <div class="container">
    <div>
      <h1 class="title">
        Wybierz ilość osób, które będą odbierać uroczystość Pamiątki
      </h1>
      <div class="links">
        <button
          @click="setUsersNumber(1)"
          class="button--grey"
        >
          1
        </button>
        <button
          @click="setUsersNumber(2)"
          class="button--grey"
        >
          2
        </button>
        <button
          @click="setUsersNumber(3)"
          class="button--grey"
        >
          3
        </button>
        <button
          @click="setUsersNumber(4)"
          class="button--grey"
        >
          4
        </button>
        <button
          @click="setUsersNumber(5)"
          class="button--grey"
        >
          5
        </button>
        <button
          @click="setUsersNumber(6)"
          class="button--grey"
        >
          6
        </button>
        <button
          @click="setUsersNumber(7)"
          class="button--grey"
        >
          7
        </button>
        <button
          @click="setUsersNumber(8)"
          class="button--grey"
        >
          8
        </button>
        <button
          @click="setUsersNumber(9)"
          class="button--grey"
        >
          9
        </button>
        <button
          @click="setUsersNumber(10)"
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
  created() {
    if (Cookies.get('cookie')) {
      this.$router.push('/stream')
    } else {
      Cookies.set ('cookie', true)
    }
  },
  methods: {
    setUsersNumber(value) {
      const id = Math.floor(Math.random() * 10001);
      firebase.firestore().collection('streamUsers').add({
        id: id,
        number: value
      })

      this.$router.push('/stream')
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
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
  font-weight: 300;
  font-size: 35px;
  color: #273645;
  letter-spacing: 1px;
}
button {
  margin-top: 22px;
  background-color: white;
}
</style>
