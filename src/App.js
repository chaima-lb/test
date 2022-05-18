import './App.css'
import Profile from './component/Profile/Profile/Profile'

function App() {
  const name = "your name";
  const bio = "your bio";
  const profession = "your profession";
  const consolelog=(x)=> console.log(`hy ${x}`)
  return (
    <div className='container'>
      <div className="card">
      <Profile name={name} bio={bio} profession={profession} consolelog={consolelog}>
        <img src="https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/1bbe7/Twitter-NFT-profile.jpg" alt='img' style={{width:"400px", borderRadius:"40px", opacity:1,boxShadow:"blur"}}/>
      </Profile>
      </div>
    </div>
  );
}

export default App;
