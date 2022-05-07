import './App.css';
import Fruit from './fruits';
import Head from './header/index.js';


const data = [
  {id:1, img:'https://img.cppng.com/download/2020-06/8-2-apple-fruit-transparent.png', title:'Apple', uom:'02', size:'02', unit:'$8.99', total:'$11.99'},
  {id:2, img:'https://cdn.picpng.com/apricot/apricot-face-25251.png', title:'Apricot ', uom:'02', size:'02', unit:'$8.99', total:'$19.99'},
  {id:3, img:'https://i.pinimg.com/originals/61/c2/26/61c22661bef5b5358c9b8fa4049947aa.png', title:'Kiwi', uom:'02', size:'02', unit:'$8.99', total:'$10.99'},
  {id:4, img:'https://parspng.com/wp-content/uploads/2021/12/pomegranate-png.parspng.com-10.png', title:'Pomogreate', uom:'02', size:'02', unit:'$8.99', total:'$12.89'},
  {id:5, img:'https://freepngimg.com/save/19218-strawberry-png/1600x1315', title:'Strawbarry', uom:'02', size:'02', unit:'$8.99', total:'$21.99'},
  {id:6, img:'https://purepng.com/public/uploads/large/purepng.com-cucumbercucumbervegetablespicklegreenfoodhealthycucumbers-481522161925n6wbx.png', title:'Cucumber', uom:'02', size:'02', unit:'$8.99', total:'$12.99'},
  {id:7, img:'https://static.wixstatic.com/media/2cd43b_fb245523ec46402c86676b6dba7df4c4~mv2.png/v1/fill/w_320,h_206,q_90/2cd43b_fb245523ec46402c86676b6dba7df4c4~mv2.png', title:'Banana', uom:'02', size:'02', unit:'$8.99', total:'$13.99'},
  {id:8, img:'https://pics.clipartpng.com/Pineapple_PNG_Clipart-248.png', title:'Pineaapple', uom:'02', size:'02', unit:'$8.99', total:'$14.99'},
  {id:9, img:'https://www.picng.com/upload/orange/png_orange_9346.png', title:'Orange', uom:'02', size:'02', unit:'$8.99', total:'$17.99'},
  // {id:10, img:'./', title:'Apple321', uom:'02', size:'02', unit:'$8.99', total:'$17.99'}
]

function App() {
  return (
    <div className="container">
     <Head/>
   {data.map((item, index)=>{
   return(
     <div>
        <Fruit data = {item} id = {index} />
     </div>
  )
})}

  
    </div>
  );
}

export default App;
