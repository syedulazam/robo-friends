import Card from "./card";

const CardList = ({ Robot, onSearchChange }) => (
  <div>
    {/* <h3> {name1} </h3>o
         <h6> {email1} </h6> */}
    {Robot.map((user, i) => (
      <Card
        key={Robot[i].id}
        id={Robot[i].id}
        name={Robot[i].name}
        email={Robot[i].email}
        searchChange={onSearchChange}
      />
    ))}

    {/* Keeping key as {details[i].id} ensures that 
         the key that we considered  (in case we move the cards and then the order of the cards change, we need a constant variable for each card to move the cards
         easily) is fixed and doesn't changes, just like id is  */}
  </div>
);

export default CardList;

// NOTE: If you see in the mapping, you will notice that instead of using {} to close the <Robots/> statement, we have used (). This is because we are trying to get an
// implicit return and not an explicit return. Implicit return means that we are trying to return a value without using the return statement. In this case, we
// use the (). Wherease in the case of the explicit return, we are trying to return a value while actually using the return statement. So in this case, we will be
// using the {} to enclose the return statement along with () to enclose statements after the return statement like this:
//       //  {details.map((user,i)=>{
//         return(
//         <Robots key={details[i].id}
//         id = {details[i].id}
//         name = {details[i].name}
//         email = {details[i].email}/>)
// })
// }
