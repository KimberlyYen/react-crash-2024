import { useContext } from "react"
import { UserContext } from "./ComponentA.jsx"
import ComponentD from "./ComponentD"

const ComponentC = (props) => {

  const user = useContext(UserContext)

  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{` Hello again ${user} `}</h2>
      <ComponentD user={props.user}/>
    </div>
  )
}

export default ComponentC
