<template>
  <div class="record">
    <div class="btn" @click="Timer">{{ record }}</div>
    <div class="time" v-if="recording === true">
      <div>{{computeTime(time)}}</div>
      <button class="button" @click="handlePause">{{pause}}</button>
      <button class="button" @click="handleDone">Done</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Record',

  data() {
    return {
      recording: false,
      pausing: false,
      time: 0,
      interval: ''
    }
  },

  computed: {
    record() {
      return this.recording ? 'Recording' : 'Start Record'
    },
    pause() {
      return this.pausing ? 'Continue' : 'Pause'
    }
  },

  created() {},

  methods: {
    computeTime(s) {
      var t
      if (s > -1) {
        var hour = Math.floor(s / 3600)
        var min = Math.floor(s / 60) % 60
        var sec = s % 60
        if (hour < 10) {
          t = '0' + hour + ':'
        } else {
          t = hour + ':'
        }

        if (min < 10) {
          t += '0'
        }
        t += min + ':'
        if (sec < 10) {
          t += '0'
        }
        t += sec
      }
      return t
    },
    handleDone() {
      this.recording = false
      this.saveItem()
      this.$router.push({
        name: 'home'
      })
      alert('record success')
    },
    Timer() {
      this.recording = true
      this.interval = setInterval(this.add, 1000)
    },
    add() {
      this.time += 1
    },
    handlePause() {
      this.pausing = !this.pausing
      if (this.pausing) {
        clearInterval(this.interval)
      } else {
        this.Timer()
      }
    },
    saveItem() {
      const list = JSON.parse(localStorage.getItem('list')) || []
      const item = {
        time: this.$_moment().format('YYYY-MM-DD HH:mm:SS'),
        id: list.length + 1
      }
      list.push(item)
      localStorage.setItem('list', JSON.stringify(list))
    }
  }
}
</script>


<style lang="scss" scoped>
.record {
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  .btn {
    width: 30rem;
    height: 30rem;
    line-height: 30rem;
    border-radius: 50%;
    background: #42b983;
    color: #ffffff;
  }
  .time {
    position: absolute;
    top: 70rem;
  }

  .button {
    margin: 4rem 2rem;
  }
}
</style>
