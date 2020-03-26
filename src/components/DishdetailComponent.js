import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, BreadcrumbItem, Breadcrumb, Button, ModalBody, ModalHeader, Label, Modal, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderDish({ dish }) {
    console.log("DishDetail render invoked");
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>

            </Card>
        );
    else
        return (
            <div></div>
        );
}

class RenderComments extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);


    }

    handleSubmit = (values) => {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }


    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    render() {
        const { comments } = this.props
        if (comments != null)
            return <div>
                <h3>Comments</h3>
                {
                    comments.map((comment) => {
                        return (
                            <ul className="list-unstyled" key={comment.id}>
                                <li>{comment.comment}</li>
                                <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
                            </ul>
                        )
                    })
                }
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg"></i>Submit Comment
                                    </Button>


                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            <Label htmlFor="lastname" >Rating</Label>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Label htmlFor="lastname">Your Name</Label>
                            <Row className="form-group">
                                <Col>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            reauired: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>


                            <Label htmlFor="message" >Your message</Label>
                            <Row className="form-group">
                                <Col >
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>

                        {/* <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Rating</Label>
                                <Input type="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Your Name</Label>
                                <Input type="password" id="password" name="password"
                                ></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input}
                                    />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary"><i className="fa fa-pencil fa-lg"></i>Submit Comment</Button>
                        </Form> */}
                    </ModalBody>
                </Modal>
            </div >
        else
            return (
                <div></div >
            );
    }
}


const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    else
        return (
            <div></div>
        );
}

export default DishDetail;