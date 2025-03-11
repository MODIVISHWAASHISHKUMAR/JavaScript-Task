//TODO using function component

// import React, { useState } from 'react';

// const TodoApp = () => {
//   const [tasks, setTasks] = useState([]);  // Array to store tasks
//   const [newTask, setNewTask] = useState('');  // Input field for new task
//   const [editIndex, setEditIndex] = useState(null);  // To track which task is being edited
//   const [editTask, setEditTask] = useState('');  // Task text when editing

//   // Handle input change for new task
//   const handleNewTaskChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   // Add a new task to the list
//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, newTask]);
//       setNewTask('');  // Clear input field after adding
//     }
//   };

//   // Delete a task
//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((task, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   // Start editing a task
//   const editTaskHandler = (index) => {
//     setEditIndex(index);
//     setEditTask(tasks[index]);
//   };

//   // Update the task after editing
//   const updateTask = () => {
//     if (editTask.trim()) {
//       const updatedTasks = [...tasks];
//       updatedTasks[editIndex] = editTask;
//       setTasks(updatedTasks);
//       setEditIndex(null);
//       setEditTask('');
//     }
//   };

//   // Cancel editing
//   const cancelEdit = () => {
//     setEditIndex(null);
//     setEditTask('');
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>

//       {/* Add new task */}
//       <div>
//         <input
//           type="text"
//           value={newTask}
//           onChange={handleNewTaskChange}
//           placeholder="Add a new task"
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>

//       {/* Edit task */}
//       {editIndex !== null && (
//         <div>
//           <input
//             type="text"
//             value={editTask}
//             onChange={(e) => setEditTask(e.target.value)}
//             placeholder="Edit task"
//           />
//           <button onClick={updateTask}>Update</button>
//           <button onClick={cancelEdit}>Cancel</button>
//         </div>
//       )}

//       {/* Task List */}
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}{' '}
//             <button onClick={() => editTaskHandler(index)}>Edit</button>
//             <button onClick={() => deleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;



//TODO usnig class component

// import React  from 'react';

// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],   // Array to store tasks
//       newTask: '', // Input field for new task
//       editIndex: null, // To track which task is being edited
//       editTask: '', // Task text when editing
//     };
//   }

//   // Handle change in input field
//   handleChange = (e) => {
//     this.setState({
//       newTask: e.target.value,
//     });
//   };

//   // Add a new task to the list
//   addTask = () => {
//     if (this.state.newTask.trim()) {
//       this.setState((prevState) => ({
//         tasks: [...prevState.tasks, prevState.newTask],
//         newTask: '', // Clear input field
//       }));
//     }
//   };

//   // Delete a task
//   deleteTask = (index) => {
//     const tasks = [...this.state.tasks];
//     tasks.splice(index, 1);
//     this.setState({ tasks });
//   };

//   // Start editing a task
//   editTask = (index) => {
//     this.setState({
//       editIndex: index,
//       editTask: this.state.tasks[index],
//     });
//   };

//   // Update the edited task
//   updateTask = () => {
//     if (this.state.editTask.trim()) {
//       const updatedTasks = [...this.state.tasks];
//       updatedTasks[this.state.editIndex] = this.state.editTask;
//       this.setState({
//         tasks: updatedTasks,
//         editTask: '',
//         editIndex: null,
//       });
//     }
//   };

//   // Cancel editing
//   cancelEdit = () => {
//     this.setState({ editTask: '', editIndex: null });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Todo List</h1>
//         <div>
//           <input
//             type="text"
//             value={this.state.newTask}
//             onChange={this.handleChange}
//             placeholder="Add a new task"
//           />
//           <button onClick={this.addTask}>Add Task</button>
//         </div>

//         {this.state.editIndex !== null && (
//           <div>
//             <input
//               type="text"
//               value={this.state.editTask}
//               onChange={(e) => this.setState({ editTask: e.target.value })}
//               placeholder="Edit task"
//             />
//             <button onClick={this.updateTask}>Update</button>
//             <button onClick={this.cancelEdit}>Cancel</button>
//           </div>
//         )}

//         <ul>
//           {this.state.tasks.map((task, index) => (
//             <li key={index}>
//               {task}{' '}
//               <button onClick={() => this.editTask(index)}>Edit</button>
//               <button onClick={() => this.deleteTask(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoApp;


//todo list with localstorage  using class component 

// import React from 'react';

// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     // Initialize the state
//     this.state = {
//       tasks: [],           // List of tasks
//       newTask: '',         // New task input value
//       editingIndex: null,  // Track which task is being edited
//     };
//   }

//   // Load tasks from localStorage on component mount
//   componentDidMount() {
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     this.setState({ tasks });
//   }

//   // Save tasks to localStorage whenever tasks are updated
//   componentDidUpdate() {
//     localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
//   }

//   // Handle input change for new task
//   handleInputChange = (event) => {
//     this.setState({ newTask: event.target.value });
//   };

//   // Handle adding a new task
//   addTask = () => {
//     if (this.state.newTask.trim()) {
//       const newTask = {
//         id: Date.now(),  // Use timestamp as a unique ID
//         name: this.state.newTask,
//       };

//       this.setState((prevState) => ({
//         tasks: [...prevState.tasks, newTask],
//         newTask: '',  // Clear input field
//       }));
//     }
//   };

//   // Handle deleting a task
//   deleteTask = (taskId) => {
//     const updatedTasks = this.state.tasks.filter(task => task.id !== taskId);
//     this.setState({ tasks: updatedTasks });
//   };

//   // Handle editing a task
//   editTask = (index) => {
//     const task = this.state.tasks[index];
//     this.setState({
//       newTask: task.name,
//       editingIndex: index,
//     });
//   };

//   // Handle updating a task
//   updateTask = () => {
//     if (this.state.newTask.trim()) {
//       const updatedTasks = [...this.state.tasks];
//       updatedTasks[this.state.editingIndex].name = this.state.newTask;

//       this.setState({
//         tasks: updatedTasks,
//         newTask: '',  // Clear input field
//         editingIndex: null,  // Reset editing index
//       });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>Todo List</h1>

//         {/* Input field for adding/editing tasks */}
//         <input
//           type="text"
//           value={this.state.newTask}
//           onChange={this.handleInputChange}
//           placeholder="Enter a new task"
//         />
//         <button onClick={this.state.editingIndex !== null ? this.updateTask : this.addTask}>
//           {this.state.editingIndex !== null ? 'Update Task' : 'Add Task'}
//         </button>

//         {/* Task List */}
//         <ul>
//           {this.state.tasks.map((task, index) => (
//             <li key={task.id}>
//               {task.name}
//               <button onClick={() => this.editTask(index)}>Edit</button>
//               <button onClick={() => this.deleteTask(task.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoApp;


//todo list  with localstorage  using function component

import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  // State hooks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks are updated
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Handle input change
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      const task = { id: Date.now(), name: newTask };
      setTasks((prevTasks) => [...prevTasks, task]);
      setNewTask(''); 
    }
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
  };

  // Edit a task
  const editTask = (index) => {
    setNewTask(tasks[index].name);  // Set input to the task name
    setEditingIndex(index);          // Set the index of the task being edited
  };

  // Update an existing task
  const updateTask = () => {
    if (newTask.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex].name = newTask; // Update the task name
      setTasks(updatedTasks);
      setNewTask('');  // Clear input field
      setEditingIndex(null); // Reset editing index
    }
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input field for adding/editing tasks */}
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={editingIndex !== null ? updateTask : addTask}>
        {editingIndex !== null ? 'Update Task' : 'Add Task'}
      </button>

      {/* Task List */}
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
