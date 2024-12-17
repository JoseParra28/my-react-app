import Student from "./Student";



function App() {
  return (
    <>
   <Student name='Nicolas' age={30} isStudent={false}/>
   <Student name='Patrick' age={38} isStudent={true}/>
   <Student name='Jose' age={33} isStudent={true}/>
   <Student name='Sara' age={50} isStudent={true}/>
    </>
  );
}


export default App
