<script setup>

import { onMounted, ref } from 'vue';
    
            const name =ref ('John Doe');
            const status = ref('pending');
            const tasks = ref(['task 1', 'task 2', 'task 3']);
            const newtask = ref('');
            
            const togglestatus = () => {
                if (status.value === 'active') {
                    status.value = 'pending';
                } else if (status.value === 'pending') {
                    status.value = 'inactive';
                } else {
                    status.value = 'active';
                }
            };

            const addTask = () => {
                if(newtask.value.trim() !== ''){
                    tasks.value.push(newtask.value);
                    newtask.value = '';
                }
            };
            const deleteTask = (index) => {
                tasks.value.splice(index, 1);
            };
          onMounted(async ()=> {
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await response.json();
                tasks.value=data.map((task)=>task.title);
                console.log(data);
            }catch(error){
                console.log("Error Fetching data");
            }
          })
</script>

<template>
  <div class="todo-app">
    <h1>Todo App</h1>
    <p v-if="status === 'active'" class="status active">Active</p>
    <p v-else-if="status === 'pending'" class="status pending">Pending</p>
    <p v-else class="status inactive">Inactive</p>

    <form @submit.prevent="addTask" class="task-form">
      <label for="task">Task:</label>
      <input type="text" id="task" name="task" v-model="newtask" />
      <button type="submit">Add Task</button>
    </form>

    <h3>Tasks:</h3>
    <ul class="task-list">
      <li v-for="(task, index) in tasks" :key="task" class="task-item">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </ul>

    <button @click="togglestatus" class="status-btn">Toggle Status</button>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

.status {
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 20px;
}

.status.active {
  color: green;
}

.status.pending {
  color: orange;
}

.status.inactive {
  color: red;
}

.task-form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.task-form input {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.task-form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.task-form button:hover {
  background-color: #0056b3;
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.delete-btn {
  background: none;
  border: none;
  color: red;
  cursor: pointer;
}

.delete-btn i {
  font-size: 1.2em;
}

.status-btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.status-btn:hover {
  background-color: #218838;
}
</style>

