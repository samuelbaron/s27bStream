<template>
  <div class="player">
    <h3>Using Html5 to play m3u8 media file</h3>
    <video-player ref="videoPlayer"
                  class="vjs-custom-skin"
                  :options="playerOptions"
                  @play="onPlayerPlay($event)"
                  @ready="onPlayerReady($event)">
    </video-player>
  </div>
</template>

<script>
import VideoPlayer from 'vue-videojs7'

export default {
  name: 'home',
  components: {
    VideoPlayer
  },
  data () {
    return {
      playerOptions: {
        autoplay: true,
        controls: true,
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        }
        // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg'
      }
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerReady (player) {
      console.log('player ready!', player)
      this.player.play()
    },
    playVideo: function (source) {
      const video = {
        withCredentials: false,
        type: 'application/x-mpegurl',
        src: source
      }
      this.player.reset() // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,
      this.player.src(video)
      // this.player.load()
      this.player.play()
    }
  },
  mounted () {
    const src = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
    this.playVideo(src)
  }
}
</script>

<style scoped>
.player {
  position: absolute !important;
  width: 100%;
  height: 60%;
}
.vjs-custom-skin {
  height: 60% !important;
}

.vjs-custom-skin /deep/ .video-js {
  height: 60%;
}
</style>

<!--<template>-->
<!--  <div class="container">-->
<!--    <div>-->
<!--      <h1 class="title">-->
<!--        Uroczystość pamiątki-->
<!--      </h1>-->
<!--      <div class="streamWrapper">-->
<!--&lt;!&ndash;        <div class="stream"></div>&ndash;&gt;-->
<!--        <video-player ref="videoPlayer"-->
<!--                      class="vjs-custom-skin"-->
<!--                      :options="playerOptions"-->
<!--                      @play="onPlayerPlay($event)"-->
<!--                      @ready="onPlayerReady($event)">-->
<!--        </video-player>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import {videoPlayer} from 'vue-videojs7'-->
<!--export default {-->
<!--  components: {-->
<!--    videoPlayer-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      playerOptions: {-->
<!--        autoplay: true,-->
<!--        controls: true,-->
<!--        controlBar: {-->
<!--          timeDivider: false,-->
<!--          durationDisplay: false-->
<!--        }-->
<!--        // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg'-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    player () {-->
<!--      return this.$refs.videoPlayer.player-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    onPlayerPlay (player) {-->
<!--      console.log('player play!', player)-->
<!--    },-->
<!--    onPlayerReady (player) {-->
<!--      console.log('player ready!', player)-->
<!--      this.player.play()-->
<!--    },-->
<!--    playVideo: function (source) {-->
<!--      const video = {-->
<!--        withCredentials: false,-->
<!--        type: 'application/x-mpegurl',-->
<!--        src: source-->
<!--      }-->
<!--      this.player.reset() // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,-->
<!--      this.player.src(video)-->
<!--      // this.player.load()-->
<!--      this.player.play()-->
<!--    }-->
<!--  },-->
<!--  mounted () {-->
<!--    const src = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'-->
<!--    this.playVideo(src)-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.container {-->
<!--  margin: 0 auto;-->
<!--  min-height: 100vh;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  text-align: center;-->
<!--}-->

<!--.title {-->
<!--  font-family: 'Quicksand',-->
<!--  'Source Sans Pro',-->
<!--  -apple-system,-->
<!--  BlinkMacSystemFont,-->
<!--  'Segoe UI',-->
<!--  Roboto,-->
<!--  'Helvetica Neue',-->
<!--  Arial,-->
<!--  sans-serif;-->
<!--  display: block;-->
<!--  font-weight: 300;-->
<!--  font-size: 30px;-->
<!--  color: #273645;-->
<!--  letter-spacing: 1px;-->
<!--}-->
<!--.streamWrapper {-->
<!--  margin-top: 15px;-->
<!--  width: 60vw;-->
<!--  height: 60vh;-->
<!--  background-color: greenyellow;-->
<!--}-->
<!--.stream {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  background-color: black;-->
<!--}-->
<!--.player {-->
<!--  position: absolute !important;-->
<!--  width: 100%;-->
<!--  height: 60%;-->
<!--}-->
<!--.vjs-custom-skin {-->
<!--  height: 60% !important;-->
<!--}-->

<!--.vjs-custom-skin /deep/ .video-js {-->
<!--  height: 60%;-->
<!--}-->
<!--</style>-->
