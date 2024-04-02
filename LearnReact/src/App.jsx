import './App.css'
import Title from './Title';
import Title1 from './Title';
import Card from './Card';
import MsgBox from "./MsgBox"

function Footer(){
  return <h3>Done !! Bye</h3>
}
function App() {
  return (
  <div>
      <Title></Title>
      <h1>Sai Balaji Jayavarpu</h1>
      <Footer></Footer>
      <Card title="Phone" matter="Redmi note 10" />
      <Card title="Laptop" matter="Lenevo Thin pad" />
      <Card title="Earphones" matter="Appo" />
      <Card title="Phone" matter="Redmi note 10" />
      <MsgBox name="Sai Balaji" color="red" />
      <MsgBox name="Pavan Kiran" color="green" />
      <MsgBox name="mark" color="blue" />

  </div>
  )
};

export default App
