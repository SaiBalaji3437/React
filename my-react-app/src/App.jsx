import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food";
import Card from "./card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ListItam from "./ListItam";
import Buttons from "./Buttons";




function App() {

  const fruits=[{id:1,name:"apple",cal:100},
                {id:2,name:"banana",cal:45},
                 {id:3,name:"cocount",cal:40}];
  return(
  <>
  <Header></Header>
  <Food></Food>
  <Card></Card>
  <Button/>
  <Student name="Balaji" age="13" isStudent={true}/>
  <Student name="SAI" age={21} isStudent={false}/>
  <Student name="Kal" age={15} isStudent={false}/>
  <Student name="Sandy" age={27} isStudent={true}/>
  <Student/>
  <UserGreeting isLoggedIn={false} username="Balaji"/>
  <UserGreeting/>
  <List/>
  <Buttons/>
  <Footer></Footer>
  {fruits.length >0 ? <ListItam items={fruits} category="fruits"/>:null}
  
  </>
    
   
    
    
  );
}

export default App
