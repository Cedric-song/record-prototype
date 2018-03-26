<template>
  <div class="home">
    <ul>
      <li class="item">
        <span class="num">ID</span>
        <span class="time">Create Time</span>
        <span class="action">Actions</span>
      </li>
      <li class="item" v-for="(item) in list" :key="item.id">
        <span class="num">{{item.id}}</span>
        <span class="time">{{item.time}}</span>
        <span class="btn play" @click="handlePlay(item.id)">Play</span>
        <span class="btn" @click="handleReplay(item.id)">Replay</span>
      </li>
      <div v-if="list.length === 0" class="no-records">No Records</div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
      list: JSON.parse(localStorage.getItem('list'))
        ? JSON.parse(localStorage.getItem('list')).reverse()
        : []
    }
  },

  methods: {
    handlePlay(id) {
      alert(`Play Record : ${id}`)
    },
    handleReplay(id) {
      alert(`Replay Record : ${id}`)
    },
    handleDelete(i) {
      const list = JSON.parse(localStorage.getItem('list'))
      list.splice(i, 1)
      if (list.length !== 0) {
        localStorage.setItem('list', JSON.stringify(list))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .item {
    &:first-child {
      border-top: 1px solid #c2c2c2;
      border-bottom: 1px solid #c2c2c2;
    }
    width: 100%;
    display: flex;
    justify-content: center;
    height: 12rem;
    line-height: 12rem;
    border-bottom: 1px solid plum;
    .btn {
      display: inline-block;
      padding: 0 2rem;
      border: 1px solid blue;
      margin: 3rem 1rem;
      height: 6rem;
      line-height: 6rem;
    }
    .num {
      position: absolute;
      left: 4rem;
    }

    .time {
      position: absolute;
      left: 10rem;
    }
    .btn {
      position: absolute;
      right: 4rem;
      &.play {
        right: 20rem;
      }
    }

    .action {
      position: absolute;
      right: 20rem;
    }
  }

  .no-records {
    height: 40rem;
    line-height: 40rem;
    font-size: 4rem;
    border-bottom: 1px solid #c2c2c2;
  }
}
</style>
