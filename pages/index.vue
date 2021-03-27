<template>
  <div class="container">

    <div v-if="streamOffline === false">
      <h1 class="title">
        Zaznacz ilość osób, które będą odbierać uroczystość Pamiątki:
      </h1>
      <div>
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

    <div v-if="streamOffline === true">
      <h1 class="title">
        Transmisja uroczystości Pamiątki jest aktualnie wyłączona
      </h1>
    </div>

  </div>
</template>

<script>
import Cookies from "js-cookie";
import firebase from "@/firebase";
export default {

  data() {
    return {
      streamOffline: false,
      userId: null
    }
  },
  // check if server is online
  async fetch() {
    this.stream = await fetch(
      'https://d3cqx6tvn5bq08.cloudfront.net/stream/index_1920x1080.m3u8'
    ).then((res) => {
      if (res.status === 200) {
        this.streamOffline = false
        console.log("stream jest ok")
      } else {
        this.streamOffline = true
        console.log("stream nie działa")
      }
    })
  },

  created() {
    // wait for async function and decide if redirect to stream page or not
    setTimeout(() => {

      // prepare new user and redirect if stream is online
      if (this.streamOffline === false) {

        // set user id
        this.userId =  Math.floor(Math.random() * 10001);

        // set cookies and redirect
        if (Cookies.get('opened')) {
          this.$router.push('/stream')
        } else {
          Cookies.set ('opened', true)
          Cookies.set ('id', this.userId)
        }
      }
    }, 1400)

  },
  methods: {
    setUsersNumber(value) {
      firebase.firestore().collection('streamUsers').doc(`${this.userId}`).set({
        id: this.userId,
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
  padding: 40px 40px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  margin-bottom: 10px;

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
  font-size: 28px;
  color: #273645;
  letter-spacing: 1px;
}
button {
  margin-top: 22px;
  background-color: white;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  width: 110px;
  height: 40px;
  margin-left: 15px;
  margin-bottom: 10px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
