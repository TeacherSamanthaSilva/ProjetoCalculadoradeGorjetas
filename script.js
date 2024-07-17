body {
    background-color: #f2f2f2;
    font-family: Arial, sans-serif;
  }
  
  .calculator {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    margin: 3rem auto;
    max-width: 500px;
    padding: 1.6rem;
  }
  
  h2 {
    text-align: center;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin: 0.5rem 0;
  }
  
  input[type="number"],
  select {
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
  }
  
  button {
    background-color: #4caf50;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
  }
  
  button:hover {
    background-color: #3e8e41;
  }
  
  .result {
    display: flex;
    flex-direction: column;
  }
  
  input[type="text"] {
    border: none;
    border-bottom: 2px solid #ccc;
    font-size: 16px;
    margin-bottom: 10px;
    padding: 5px;
    text-align: right;
  }
  
  input[type="text"]:disabled {
    background-color: #f2f2f2;
    color: #777;
  }