import todoResponse from '../../fixtures/getTodo.json';

class TodoFixtureService{
    getTodoAPI(){
        return new Promise((resolve,reject)=>{
            resolve(todoResponse);
        });
    }
}
export default TodoFixtureService;
