import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductTable from './components/ProductViewComponent';

class Routes extends React.Component{
 render() {
     return(
     <Router>
         <Route path="/products" component={ProductTable}/>
     </Router>
     )
 }
}

export default Routes;