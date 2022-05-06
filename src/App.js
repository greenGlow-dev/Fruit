import './App.css';
import Fruit from './fruits';


const data = [
  {id:1, img:'./', title:'Apple', uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  {id:2, img:'./', title:'Banana ', uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  {id:3, img:'./', title:'Apple2', uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  {id:4, img:'./', title:'Apple3', uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  {id:5, img:'./', title:'Apple4', uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  {id:6, img:'./', title:'Apple5', uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  {id:7, img:'./', title:'Apple32', uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  {id:8, img:'./', title:'Apple11', uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  {id:9, img:'./', title:'Apple21', uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  {id:10, img:'./', title:'Apple321', uom:'02', size:'02', unit:'$8.99', total:'$17.99'}
]

function App() {
  return (
    <div className="container">
        <Fruit/>
        <Fruit/>
        <Fruit/>
        <Fruit/>
        <Fruit/>
        <Fruit/>
        <Fruit/>
        <Fruit/>
    </div>
  );
}

export default App;
