import { useEffect, useState } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    const response = await fetch(`https://www.randomuser.me/api?results=1`);
    const data = await response.json();
    setPerson(data.results[0]);
    console.log(data);
  };
  useEffect(() => {
    getPerson();
  }, []);
  return (
    <div>
        {person && (
        <Person
          firstName={person.name.first}
          lastName={person.name.last}
          email={person.email}
        />
      )}
      
    </div>
  );
};

export default PersonController;
