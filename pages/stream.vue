<template>
  <div class="container">
    <div>
      <h1 class="title">
        Uroczystość Pamiątki
      </h1>
      <div class="streamWrapper">
         <div class="stream">
           <vue-core-video-player v-if="screenWidth === 432" :core="HLSCore" src="https://d3cqx6tvn5bq08.cloudfront.net/stream/index_768x432.m3u8"></vue-core-video-player>
           <vue-core-video-player v-if="screenWidth === 540" :core="HLSCore" src="https://d3cqx6tvn5bq08.cloudfront.net/stream/index_960x540.m3u8"></vue-core-video-player>
           <vue-core-video-player v-if="screenWidth === 720" :core="HLSCore" src="https://d3cqx6tvn5bq08.cloudfront.net/stream/index_1280x720.m3u8"></vue-core-video-player>
           <vue-core-video-player v-if="screenWidth === 1080" :core="HLSCore" src="https://d3cqx6tvn5bq08.cloudfront.net/stream/index_1920x1080.m3u8"></vue-core-video-player>
         </div>
      </div>
      <div>
        <h2 class="subtitle">
          Zmień ilość osób, które korzystają z Pamiątki:
        </h2>

        <button
          @click="changeUsersNumber(1)"
          class="button--grey"
          v-bind:class="{ active: activeNumber1 }"
        >
          1
        </button>
        <button
          @click="changeUsersNumber(2)"
          class="button--grey"
          v-bind:class="{ active: activeNumber2 }"
        >
          2
        </button>
        <button
          @click="changeUsersNumber(3)"
          class="button--grey"
          v-bind:class="{ active: activeNumber3 }"
        >
          3
        </button>
        <button
          @click="changeUsersNumber(4)"
          class="button--grey"
          v-bind:class="{ active: activeNumber4 }"
        >
          4
        </button>
        <button
          @click="changeUsersNumber(5)"
          class="button--grey"
          v-bind:class="{ active: activeNumber5 }"
        >
          5
        </button>
        <button
          @click="changeUsersNumber(6)"
          class="button--grey"
          v-bind:class="{ active: activeNumber6 }"
        >
          6
        </button>
        <button
          @click="changeUsersNumber(7)"
          class="button--grey"
          v-bind:class="{ active: activeNumber7 }"
        >
          7
        </button>
        <button
          @click="changeUsersNumber(8)"
          class="button--grey"
          v-bind:class="{ active: activeNumber8 }"
        >
          8
        </button>
        <button
          @click="changeUsersNumber(9)"
          class="button--grey"
          v-bind:class="{ active: activeNumber9 }"
        >
          9
        </button>
        <button
          @click="changeUsersNumber(10)"
          class="button--grey"
          v-bind:class="{ active: activeNumber10 }"
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
import VueCoreVideoPlayer from 'vue-core-video-player'
import HLSCore from '@core-player/playcore-hls'
export default {


  data() {
    return {
      screenWidth: null,
      streamIsOnline: true,
      userId: null,
      userNumber: null,
      HLSCore,
      activeNumber1: false,
      activeNumber2: false,
      activeNumber3: false,
      activeNumber4: false,
      activeNumber5: false,
      activeNumber6: false,
      activeNumber7: false,
      activeNumber8: false,
      activeNumber9: false,
      activeNumber10: false,
    }
  },

  created() {

    // check resolution and set stream proper video
    if (window.screen.width < 540) {
      this.screenWidth = 432
    } else if (window.screen.width < 720) {
      this.screenWidth = 540
    } else if (window.screen.width < 1080) {
      this.screenWidth = 720
    } else if (window.screen.width >= 1080 ) {
      this.screenWidth = 1080
    }

    setTimeout(() => {
      console.log("reload")
    }, 2000)

    // get user id
    this.userId = Cookies.get('id')

      // get user number
      firebase.firestore().collection('streamUsers').doc(`${this.userId}`).get().then((doc) => {

        if (doc.data().number === 1) {
          this.activeNumber1 = true
        } else if (doc.data().number === 2) {
          this.activeNumber2 = true
        } else if (doc.data().number === 3) {
          this.activeNumber3 = true
        } else if (doc.data().number === 4) {
          this.activeNumber4 = true
        } else if (doc.data().number === 5) {
          this.activeNumber5 = true
        } else if (doc.data().number === 6) {
          this.activeNumber6 = true
        } else if (doc.data().number === 7) {
          this.activeNumber7 = true
        } else if (doc.data().number === 8) {
          this.activeNumber8 = true
        } else if (doc.data().number === 9) {
          this.activeNumber9 = true
        } else if (doc.data().number === 10) {
          this.activeNumber10 = true
        }
      })

  },
  methods: {
    changeUsersNumber(value) {
      this.userNumber = value

      let usersDocument = firebase.firestore().collection("streamUsers").doc(this.userId)
      usersDocument.update({
        number: this.userNumber
      })
        .then(() => {
          this.activeNumber1 = false
          this.activeNumber2 = false
          this.activeNumber3 = false
          this.activeNumber4 = false
          this.activeNumber5 = false
          this.activeNumber6 = false
          this.activeNumber7 = false
          this.activeNumber8 = false
          this.activeNumber9 = false
          this.activeNumber10 = false


          if (this.userNumber === 1) {
            this.activeNumber1 = true
          } else if (this.userNumber === 2) {
            this.activeNumber2 = true
          } else if (this.userNumber === 3) {
            this.activeNumber3 = true
          } else if (this.userNumber === 4) {
            this.activeNumber4 = true
          } else if (this.userNumber === 5) {
            this.activeNumber5 = true
          } else if (this.userNumber === 6) {
            this.activeNumber6 = true
          } else if (this.userNumber === 7) {
            this.activeNumber7 = true
          } else if (this.userNumber === 8) {
            this.activeNumber8 = true
          } else if (this.userNumber === 9) {
            this.activeNumber9 = true
          } else if (this.userNumber === 10) {
            this.activeNumber10 = true
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<style>
.active {
  background-color: #83b4e9;
  color: white;
}
@media all and (max-width: 500px){
  .container {
    margin: 0 auto;
    padding: 30px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    margin-top: -30px;
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
    color: #273645;
    letter-spacing: 1px;
  }
  .subtitle {
    margin-top: 50px;
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
    font-size: 18px;
    color: #000000;
    letter-spacing: 1px;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    width: 130px;
    height: 30px;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  .streamWrapper {
    padding: 0;
    margin-top: 15px;
    width: 100%;
    height: 30vh;

  }
  .stream {
    width: 100%;
    height: 100%;
    background-color: black;
  }
}
@media all and (min-width: 501px) and (max-width: 900px){
  .container {
    margin: 0 auto;
    padding: 30px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    margin-top: -40px;
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
    color: #273645;
    letter-spacing: 1px;
  }
  .subtitle {
    margin-top: 50px;
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
    font-size: 18px;
    color: #000000;
    letter-spacing: 1px;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    width: 130px;
    height: 30px;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  .streamWrapper {
    padding: 0;
    margin-top: 15px;
    width: 100%;
    height: 45vh;

  }
  .stream {
    width: 100%;
    height: 100%;
    background-color: black;
  }
}
@media all and (min-width: 901px){
  .container {
    margin: 0 auto;
    padding: 30px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    margin-top: -70px;
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
    color: #273645;
    letter-spacing: 1px;
  }
  .subtitle {
    margin-top: 50px;
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
    font-size: 18px;
    color: #000000;
    letter-spacing: 1px;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    width: 130px;
    height: 50px;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  .streamWrapper {
    padding: 0;
    margin-top: 15px;
    margin-left: 15%;
    width: 70%;
    height: 60vh;

  }
  .stream {
    width: 100%;
    height: 100%;
    background-color: black;
  }
}
</style>
