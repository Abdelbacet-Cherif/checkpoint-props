import Profile from './profile/Profile'
import './App.css';

function App() {
  var firstName = "Abdelbacet"
  var lastName="Cherif"
  var profession="web developer"
  var bio="hello world"
  return (
      <div className="App">
          <Profile fname={firstName} lname={lastName} pro={profession} myBio={bio}><img src="/photo.jpg"></img></Profile>
      </div>
  );
}


export default App;
