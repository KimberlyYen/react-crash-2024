
const Apple = (props) => {

    const itemList = props.item ;
    // const category = props.category


    // fruits.sort((a,b) => a.number - b.number)
    // const lowerCount = fruits.filter( item => item.number < 100 )
    // const lowerCount = fruits.filter( item => item.number >= 100 )


    const list = itemList.map( (itemList, index) => <li key={index} >
        { itemList.name } { itemList.number }
        </li> )

  return (
    <div>
        <h1>{props.category}</h1>
        <ol>
            {list}
        </ol>
    </div>
  )
}
Apple.defaultProps = {
    category: '123'
}
export default Apple
