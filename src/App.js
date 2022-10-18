import BasicCard from './Components/BasicCard'
import logo1 from './Photos/637880558264506587.jpeg'
import logo2 from './Photos/SImon-Fraser-Commission.jpeg'
import logo3 from './Photos/barbarian_tattoo_sm_by_bryansyme-dbv4gaj-640x804.jpg'

function App() {
  return (
    <div>
      <BasicCard 
     logo={logo1}
     name="Meneld the Relentless"
     race="changeling and more"
     auth="Mark"
     class="Warlock"
     />
      <BasicCard 
     logo={logo3}
     name="Etrian Valarius"
     race="Human"
     auth="Lara"
     class="Barbarian"
     />
    </div>
  );
}

export default App;