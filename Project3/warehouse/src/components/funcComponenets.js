import{ Form, Button } from "react-bootstrap"; 
export default function AddProduct() {
    return(
        <Form>
        <Form.Group  controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Name" />
        
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}