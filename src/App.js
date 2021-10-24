import logo from './images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Example of how to use tailwindcss styling */}
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl 
                       shadow-md flex items-center 
                       space-x-4 bg-green-100 md:bg-green-500 shadow-2xl">
        <div className="flex-shrink-0 bg-regal-blue">
          <img className="h-1 w-12 App-logo" src={logo} alt="ChitChat Logo"></img>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <div className='block h-12 bg-gray-100 flex flex-row items-center'> 
        <div className='flex-initial'>Logo</div>
        <div className='flex-1'>First</div>
        <h1 className='flex-1'>Second</h1>
        <h1 className='flex-1'>Third</h1>
        <div className='flex-auto'></div>
        <div className='flex-initial px-2'>Account</div>
      </div>
      <div className='flex flex-row h-12'>
        <div className='flex-0'>Hello, How are you?</div>
        <div className='flex-auto'></div>
      </div>
      <div className='block h-12 bg-gray-100'>
        Footer
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
