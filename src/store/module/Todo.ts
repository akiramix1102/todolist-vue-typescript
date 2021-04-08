import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import api from '@/api'
import { Todo } from '@/interfaces/Todo'

@Module({ namespaced: true })
class Todos extends VuexModule {
    public list: Array<Todo> = []
    @Action
    public async getTodo(): Promise<any> {
        try {
            const result = await api.get('/todo')
            return result.data
        } catch (error) {
            console.error(error)
        }
    }
    @Action
    public async closeTodo(data: Record<string, unknown>): Promise<any> {
        try {
            await api.put(`/todo/${data.id}`, data)
        } catch (error) {
            console.error(error)
        }
    }
    @Action
    public async addTodo(title: string): Promise<any> {
        try {
            const result = await api.post(`/todo`, { title })
            return result.data
        } catch (error) {
            console.error(error)
        }
    }
    @Action
    public async deleteTodo(id: number): Promise<any> {
        try {
            await api.delete(`/todo/${id}`)
        } catch (error) {
            console.error(error)
        }
    }
}
export default Todos