<template>
  <div class="group">
    <van-panel v-for="(item,id) in groups.list" :title="item.name" :key="id" >
      <van-card v-for="(res,id) in item.resNamePathList" :key="id"
          :desc="res.name"
          :thumb="'http://119.29.199.37:8888/rec/'+res.path" @load="itemImageLoad"/>
    </van-panel>
  </div>
</template>

<script>
export default {
  name: "GroupItem",
  props:{
    groups:{
      list: Array,
    } ,
  },
  methods:{
    itemImageLoad(){
      this.$emit('itemImageLoad')
    }
  }
}
</script>

<style scoped>

</style>