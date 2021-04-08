<template>
  <div class="input">
    <el-input placeholder="Nhập tên công việc..." v-model="input" />
    <span @click="handleAddTodo">Add</span>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
@Component
export default class TodoForm extends Vue {
  input = '';

  @Emit('add')
  handleAddTodo(): string {
    const temp = this.input;
    this.input = '';
    return temp;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input {
  display: flex;
  span {
    height: 40px;
    background: red;
    line-height: 40px;
    padding: 0 15px;
    margin-left: 15px;
    cursor: pointer;
    color: #fff;
    background: #7375ee;
    font-weight: bold;
  }
}
</style>
