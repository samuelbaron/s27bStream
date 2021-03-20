<template>
  <div class="container">
    <div>
      <h1 class="title">
        Uroczystość pamiątki
      </h1>
      <div class="streamWrapper">
        <div class="stream"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersNumber: null
    }
  },
  methods: {
    setUsersNumber(value) {
      this.usersNumber = value
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
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
  font-weight: 300;
  font-size: 30px;
  color: #273645;
  letter-spacing: 1px;
}
.streamWrapper {
  margin-top: 15px;
  width: 60vw;
  height: 60vh;
  background-color: greenyellow;
}
.stream {
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>
