import ComponentC from "./ComponentC"

const ComponentB = (props) => {
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <ComponentC user={props.user}/>
    </div>
  )
}

export default ComponentB
