<template>
  <div class="list-todo">
    <div class="todo-item" v-for="item in data" :key="item.id">
      <div class="status" @click="handleClose(item)">
        <i v-if="item.isClose" class="el-icon-success" />
        <i v-else class="el-icon-circle-check" />
      </div>
      <div class="title">
        <span>{{ item.title }}</span>
      </div>
      <div class="action" @click="handleDelete(item.id)">
        <i class="el-icon-delete" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from '@/interfaces/Todo';
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class TodoList extends Vue {
  @Prop() readonly data!: unknown;

  // method
  @Emit('complete')
  handleClose(item: Todo): unknown {
    item.isClose = !item.isClose;
    return {
      isClose: item.isClose,
      id: item.id,
    };
  }
  @Emit('delete')
  handleDelete(id: string): number {
    console.log(+id);

    return +id;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-todo {
  margin-top: 20px;
  min-height: 200px;
  .todo-item {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 24px;
    .status {
      width: 7%;
    }

    .action {
      margin-left: auto;
      display: none;
    }

    &:hover {
      border-bottom: 1px solid #ccc;
      .action {
        display: block;
      }
    }
  }
}
</style>
