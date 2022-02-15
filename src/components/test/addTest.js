import React from 'react';

const AddTest = ({ changeIsAddnew }) => {
  return<div className='container'>
     <div className='row'>
          <div className='col-md-12 d-flex flex-row-reverse  '>
              <button className='btn btn-primary mb-3 mt-3 ' onClick={ ()=>changeIsAddnew(false)}>
     Show Data
    </button>
          </div>
          <div className='col-md-8 d-flex justify-content-center'>
              Form
          </div>
      </div>

  </div>;
};

export default AddTest;
