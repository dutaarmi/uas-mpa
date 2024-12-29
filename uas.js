// 1>// const App = () => {
//   const [tasks, setTasks] = useState([]); // State untuk menyimpan daftar tugas

//   return null;
// };

// export default App;
// 2> jsx
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList } from 'react-native';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [judul, setJudul] = useState('');
//   const [deskripsi, setDeskripsi] = useState('');

//   const tambahTodo = () => {
//     setTodos([...todos, { judul, deskripsi }]);
//   };

//   return (
//     <View>
//       <TextInput value={judul} onChangeText={(text) => setJudul(text)} />
//       <TextInput value={deskripsi} onChangeText={(text) => setDeskripsi(text)} />
//       <Button title="Tambah" onPress={tambahTodo} />
//       <FlatList data={todos} renderItem={({ item }) => (
//         <View>
//           <Text>{item.judul}</Text>
//           <Text>{item.deskripsi}</Text>
//         </View>
//       )} />
//     </View>
//   );
// };
// 3> jsx
// // actions.js
// export const TAMBAH_TODO = 'TAMBAH_TODO';
// export const HAPUS_TODO = 'HAPUS_TODO';

// export const tambahTodo = (judul, deskripsi) => {
//   return { type: TAMBAH_TODO, judul, deskripsi };
// };

// export const hapusTodo = (id) => {
//   return { type: HAPUS_TODO, id };
// };



// jsx
// // reducers.js
// const initialState = [];

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'TAMBAH_TODO':
//       return [...state, { judul: action.judul, deskripsi: action.deskripsi }];
//     case 'HAPUS_TODO':
//       return state.filter((todo) => (link unavailable) !== (link unavailable));
//     default:
//       return state;
//   }
// };

// export default todoReducer;


// Pengaturan Store


// jsx
// // store.js
// import { createStore } from 'redux';
// import todoReducer from './reducers';

// const store = createStore(todoReducer);

// export default store;


// jsx
// // TodoList.js
// import React from 'react';
// import { connect } from 'react-redux';
// import { tambahTodo, hapusTodo } from './actions';

// const TodoList = ({ todos, tambahTodo, hapusTodo }) => {
//   const [judul, setJudul] = React.useState('');
//   const [deskripsi, setDeskripsi] = React.useState('');

//   const handleSubmit = () => {
//     tambahTodo(judul, deskripsi);
//     setJudul('');
//     setDeskripsi('');
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={judul}
//         onChange={(e) => setJudul(e.target.value)}
//       />
//       <input
//         type="text"
//         value={deskripsi}
//         onChange={(e) => setDeskripsi(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Tambah</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo.judul} - {todo.deskripsi}
//             <button onClick={() => hapusTodo(index)}>Hapus</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return { todos: state };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     tambahTodo: (judul, deskripsi) => dispatch(tambahTodo(judul, deskripsi)),
//     hapusTodo: (id) => dispatch(hapusTodo(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// 4> const hapusTugas = async (idTugas) => {
//   try {
//     const response = await fetch(`/api/tugas/${idTugas}`, {
//       method: 'DELETE',
//     });
//     const data = await response.json();
//     console.log(data);
//     // Perbarui state aplikasi
//   } catch (error) {
//     console.error(error);
//   }
// };

// 5> import axios from 'axios';

// const tambahTugas = async (data) => {
//   try {
//     const response = await axios.post('/api/tugas', data);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error.message);
//     // Tampilkan pesan error kepada pengguna
//   }
// };


// const tambahTugas = async (data) => {
//   try {
//     const response = await fetch('/api/tugas', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });
//     const dataResponse = await response.json();
//     console.log(dataResponse);
//   } catch (error) {
//     console.error(error.message);
//     // Tampilkan pesan error kepada pengguna
//   }
// };
