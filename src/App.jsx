import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function App() {
  const handleClick = (event) => {
    console.log(event);
    alert('clicked button');
  };

  return (
    <>
      <button onClick={handleClick}>Button</button>
      <form onSubmit={() => {}}>
        <input />
      </form>
      <Avatar
        image="https://images.unsplash.com/photo-1583284791098-29f95de7190b?q=80&w=2776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        isNew
      />
      <Profile
        image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Sam"
        title="frontend developer"
      />
      <Profile
        image="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2707&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="James"
        title="backend developer"
      />
      <Profile
        image="https://images.unsplash.com/photo-1583284791098-29f95de7190b?q=80&w=2776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Amelia"
        title="frontend developer"
        isNew
      />
    </>
  );
}

export default App;
