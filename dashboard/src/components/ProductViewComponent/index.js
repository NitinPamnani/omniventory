import React from 'react';
import {Table, Modal, Header, Form, Select, FormGroup} from "semantic-ui-react";
import {DateInput} from "semantic-ui-calendar-react";
import 'semantic-ui-css/semantic.min.css'

class ProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            modalIsOpen: false,
            shippingModalIsOpen:false,
            id:'',
            sku:'',
            name:'',
            currentStock:'',
            suppliers: [],
            supplierOptions:[],
            quantityToPurchase:'',
            supplierToPurchaseFrom:'',
            purchaseDate:'',
            orderQuantity:'',
            orderDate:'',
            updateBoard:0
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.makePurchase = this.makePurchase.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
    }

    openShippingModal(product) {
        this.setState ( {
            shippingModalIsOpen: true,
            name: product[2],
            id: product[0],
            sku: product[1],
            currentStock: product[4]
        });
    }

    closeShippingModal() {
        this.setState({
            shippingModalIsOpen: false,
            updateBoard: (this.state.updateBoard === 1)?0:1
        });


    }

    openModal(product) {
        this.setState ({
           modalIsOpen: true,
           name: product[2],
           id: product[0],
           sku: product[1],
           currentStock: product[4]
        });
        this.prepareOptions();

    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            updateBoard: (this.state.updateBoard === 1)?0:1
        });

    }

    handleQuantityPurchaseChange=(e, {name, value})=> {
        //console.log("quantityToPurchase"+value);
        this.setState({quantityToPurchase: value});
    }

    handleQuantitySellChange=(e,{name, value})=>{
        this.setState({orderQuantity: value});
    }

    handleSupplierChangeOption=(e, {name,value})=> {
       // console.log("supplierId"+value);
        this.setState({supplierToPurchaseFrom: value});
    }

    handlePurchaseDate=(e, {name, value})=>{
       // console.log("dateSelected"+value);
        this.setState({purchaseDate: value});
    }

    handleOrderDate=(e,{name,value})=>{
        this.setState({orderDate: value});
    }

    prepareOptions() {
       for(var i = 0; i < this.state.suppliers.length; i++) {
           this.state.supplierOptions.push({key:this.state.suppliers[i][0],text:this.state.suppliers[i][1],value:this.state.suppliers[i][0]});
       }

    }

    placeOrder=()=> {
        const{id, sku, name, orderQuantity, orderDate} = this.state;

        var data = {
            id: id,
            sku: sku,
            name:name,
            orderQuantity:orderQuantity,
            orderDate:orderDate
        }

        fetch('/api/v1/placeOrder',{
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response){
            if(response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data);
            if(data.msg === "success") {

            }
        }).catch(function(err){
            console.log(err);
        }) ;

        this.closeShippingModal();
        this.fetchProducts();

    }


    makePurchase=()=> {
        const{id, sku, name, quantityToPurchase, supplierToPurchaseFrom, purchaseDate} = this.state;



        var data = {
            id: id,
            sku: sku,
            name: name,
            quantityToPurchase: quantityToPurchase,
            supplierToPurchaseFrom: supplierToPurchaseFrom,
            purchaseDate: purchaseDate
        }

        fetch('/api/v1/makePurchase',{
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response){
            if(response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data);
            if(data.msg === "success") {

            }
        }).catch(function(err){
            console.log(err);
        }) ;

        this.closeModal();
        this.fetchProducts();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //this.fetchProducts();
        if(prevState.updateBoard !== this.state.updateBoard) {

            this.fetchProducts();
            //console.log("Hello");
        }
    }

    fetchProducts() {
        fetch('/api/v1/products')
            .then(res => res.json())
            .then(data => this.setState({ products: data }));
    }

    componentDidMount() {
        this.fetchProducts();

        fetch('/api/v1/suppliers')
            .then(res => res.json())
            .then(data => this.setState({suppliers: data}));


    }


    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Sku</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Brand</Table.HeaderCell>
                        <Table.HeaderCell>Currentstock</Table.HeaderCell>
                        <Table.HeaderCell>Thresholdstock</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.state.products.map(product =>
                        <Table.Row key={product[0]}>
                            <Table.Cell>{product[0]}</Table.Cell>
                            <Table.Cell>{product[1]}</Table.Cell>
                            <Table.Cell>{product[2]}<span style={{float:"right"}}><a onClick={()=>this.openModal(product)}>PURCHASE </a>| <a onClick={() => this.openShippingModal(product)} >SHIP ORDER </a></span></Table.Cell>
                            <Table.Cell>{product[3]}</Table.Cell>
                            <Table.Cell>{product[4]}</Table.Cell>
                            <Table.Cell>{product[5]}</Table.Cell>
                        </Table.Row>
                    )}

                </Table.Body>

                <Modal
                    closeIcon
                    open={this.state.modalIsOpen}
                    onClose={() => this.closeModal()}
                    onOpen={() => this.openModal()}
                >
                    <Header icon='archive' content='Make Purchase' />
                    <Modal.Content>
                        <Form onSubmit={this.makePurchase} >
                         <Form.Group widths='equal'>
                          <Form.Input
                            fluid
                            disabled
                            label='Product Id'
                            name='productid'
                            value={this.state.id}
                          />

                            <Form.Input
                                fluid
                                disabled
                                label='Product SKU'
                                name='sku'
                                value={this.state.sku}
                            />

                            <Form.Input
                                fluid
                                disabled
                                label='Product Name'
                                name='name'
                                value={this.state.name}
                            />

                            <Form.Input
                                fluid
                                disabled
                                label='Product Current Qty'
                                name='currentqty'
                                value={this.state.currentStock}
                            />

                           </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                  fluid
                                  placeholder='0'
                                  name='quantityreqd'
                                  label='Quantity Required'
                                  value={this.state.quantityToPurchase}
                                  onChange={this.handleQuantityPurchaseChange}
                                />

                             <Form.Field
                                fluid
                                search
                                control = {Select}
                                label='Select Supplier'
                                placeholder='Generic Supplier'
                                name='supplier'
                                value={this.state.supplierToPurchaseFrom}
                                options={this.state.supplierOptions}
                                onChange={this.handleSupplierChangeOption}
                             />

                            </Form.Group>
                            <FormGroup>
                                <Form.Field
                                  fluid
                                  label="Purchase Date"
                                  width = {8}
                                  control = {DateInput}
                                  name='date'
                                  dateFormat="YYYY-MM-DD"
                                  value={this.state.purchaseDate}
                                  onChange={this.handlePurchaseDate}
                                />
                            </FormGroup>
                           <Form.Button> Purchase </Form.Button>

                        </Form>

                    </Modal.Content>
                    <Modal.Actions>

                    </Modal.Actions>
                </Modal>


                <Modal
                    closeIcon
                    open={this.state.shippingModalIsOpen}
                    onClose={() => this.closeShippingModal()}
                    onOpen={() => this.openShippingModal()}
                >
                    <Header icon='truck' content='Place an order' />
                    <Modal.Content>
                        <Form onSubmit={this.placeOrder} >
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    disabled
                                    label='Product Id'
                                    name='productid'
                                    value={this.state.id}
                                />

                                <Form.Input
                                    fluid
                                    disabled
                                    label='Product SKU'
                                    name='sku'
                                    value={this.state.sku}
                                />

                                <Form.Input
                                    fluid
                                    disabled
                                    label='Product Name'
                                    name='name'
                                    value={this.state.name}
                                />

                                <Form.Input
                                    fluid
                                    disabled
                                    label='Product Current Qty'
                                    name='currentqty'
                                    value={this.state.currentStock}
                                />

                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    placeholder='0'
                                    name='orderqty'
                                    label='Quantity to sell'
                                    value={this.state.orderQuantity}
                                    onChange={this.handleQuantitySellChange}
                                />

                            </Form.Group>
                            <FormGroup>
                                <Form.Field
                                    fluid
                                    label="Order Date"
                                    width = {8}
                                    control = {DateInput}
                                    name='date'
                                    dateFormat="YYYY-MM-DD"
                                    value={this.state.orderDate}
                                    onChange={this.handleOrderDate}
                                />
                            </FormGroup>
                            <Form.Button> Place Order </Form.Button>

                        </Form>

                    </Modal.Content>
                    <Modal.Actions>

                    </Modal.Actions>
                </Modal>



            </Table>


        )
    }
}

export default ProductTable;
