<template>
  <div class="home">
    <todo-form @add="handleAddToDo" />
    <todo-list
      v-loading="isLoading"
      :data="data"
      @delete="handleDelete"
      @complete="handleComplete"
    />
  </div>
</template>

<script lang="ts" scoped>
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import TodoList from '@/components/TodoList.vue';
import TodoForm from '@/components/TodoForm.vue';
import { namespace } from 'vuex-class';
import { PutToDo } from '@/interfaces/Todo';
import { filter } from 'lodash';
const todos = namespace('Todos');

@Component({
  components: {
    TodoList,
    TodoForm,
  },
})
export default class ToDo extends Vue {
  input = '';
  data: Record<string, unknown>[] = [];
  isLoading = false;

  mounted(): void {
    this.init();
  }

  //method
  @todos.Action
  public getTodo!: () => Promise<Record<string, unknown>[]>;
  @todos.Action
  public closeTodo!: (value: PutToDo) => Promise<never>;
  @todos.Action
  public addTodo!: (title: string) => Promise<any>;
  @todos.Action
  public deleteTodo!: (id: number) => Promise<unknown>;

  init(): void {
    this.isLoading = true;
    this.getTodo()
      .then((res) => {
        this.data = res;
        this.isLoading = false;
      })
      .catch((error) => {
        console.error(error);
        this.isLoading = false;
      });
  }

  handleComplete(value: PutToDo): void {
    this.closeTodo(value)
      .then(() => {
        if (value.isClose) {
          this.$message({
            message: 'Đã hoàn thành',
            type: 'success',
          });
        } else {
          this.$message({
            message: 'Chưa hoàn thành',
            type: 'success',
          });
        }
      })
      .catch((error) => {
        this.$message({
          message: error,
          type: 'error',
        });
      });
  }

  handleAddToDo(title: string): void {
    this.addTodo(title)
      .then((res) => {
        this.data.push(res);
        this.$message({
          message: 'Thêm thành công',
          type: 'success',
        });
      })
      .catch((error) => {
        this.$message({
          message: error,
          type: 'success',
        });
      });
  }

  handleDelete(id: number): void {
    this.$confirm('Xóa công việc ? ', 'Xóa', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'info',
    }).then(() => {
      this.deleteTodo(id).then(() => {
        this.data = filter(this.data, (todo) => todo.id !== id.toString());
        this.$message({
          message: 'Xóa thành công',
          type: 'success',
        });
      });
    });
  }
}
</script>
