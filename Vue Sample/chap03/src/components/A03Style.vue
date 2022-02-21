<template>
  <div id="app" class="card-body">
    <h3>A09 Style Binding</h3>

    <div style="color: orange; font-size: 24pt">{{ hello }}</div>
    <div :style="{ color: 'gray', fontSize: '24pt' }">{{ hello }}</div>
    <!-- 좋은 방식이 아님. computed로 빼서 사용. -->
    <div :style="styleOne">{{ hello }}</div>
    <div :style="styleTwo" @mouseenter="changeEnter" @mouseleave="changeLeave">{{ hello }}</div>
    <br />

    <h3>Class Binding</h3>

    <div class="one" :class="['two', 'three']">{{ hello }}</div>
    <div class="one" :class="clzTwo">{{ hello }}</div>
    <div class="one" :class="[clzTwo, 'three']">{{ hello }}</div>
    <br />

    <div class="one" :class="{ two: true, three: true }">{{ hello }}</div>
    <div class="one" :class="{ two: true, three: false }">{{ hello }}</div>
    <div class="one" :class="{ two: true, three: isChecked }">{{ hello }}</div>
    <input type="checkbox" v-model="isChecked" /> Check<br />
    <br />

    <input type="text" class="form-control" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      hello: "Hello World!!",
      styleOne: { color: "lightblue", fontSize: "24pt" },
      clzTwo: {},
      isChecked: true,
    };
  },
  computed: {
    styleTwo: function () {
      // 매개변수가 없음.
      return { color: "lightgray", fontSize: "24pt" };
    },
  },
  methods: {
    changeEnter: function () {
      this.styleOne.color = "lightgreen";
      this.styleOne.backgroundColor = "yellow";
    },
    changeLeave: function () {
      this.styleOne.color = "green";
      this.styleOne.backgroundColor = "white";
    },
  },
};
</script>

<style scoped>
/* scoped가 붙으면 이 지역 안에서만 쓸 css라는 것. */
.one {
  color: orange;
}
.two {
  font-size: 24pt;
}
.three {
  font-weight: bold;
}
.warning {
  background-color: orange;
  color: gray;
}

[v-cloak] {
  display: none;
}
</style>
