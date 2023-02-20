import React from 'react';
import './App.scss';

function App() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
  };
  return (
    <div className="Container py-4">
     <h1 className='mb-0'>React Form</h1>
     <p>Learn how to use form in react</p>
      <div className="card my-4">
        <div className="card-header"></div>
        <h2 className="mb-0">User Form</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
   <div className="mb-3">
   <label className="mb-1" htmlFor="name">
    Nama
    </label>
 <input
 type="text"
  className="form-control" 
 placeholder="Masukan Nama"/ >
 </div>

 <div className="mb-3">
   <label className="mb-1" htmlFor="Birth Date">
   Birth Date
   </label>
 <input 
 type="date"
 className="form-control"
  placeholder="tgl lahir"/ >
 </div>
 
 <div className="mb-3">
   <label className="mb-1" htmlFor="Birth Date">
   usia
   </label>
 <input 
 type="number"
 className="form-control" 
 placeholder="Masukan usia"/ >
 </div>
 <button className='btn btn-primary'>
      <em className="fas fa-plus"></em> Add
      </button>
      </form>
      </div>
    </div>
  );
}

export default App;
