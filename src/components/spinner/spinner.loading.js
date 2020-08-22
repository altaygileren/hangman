import React from 'react'
import { Spinner } from 'react-bootstrap';
import './spinner.loading.css';

export default function Spinnerloading() {
  return (
    <div className="spinner-loading-div">
      <Spinner className="spinnerLoading" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}
