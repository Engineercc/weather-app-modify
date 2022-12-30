import React from 'react'

import loading from '../assets/images/loading.gif'
const Loading = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={loading} width="212" alt="loading gif" />
    </div>
  );
}

export default Loading