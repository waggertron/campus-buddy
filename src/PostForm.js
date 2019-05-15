import React from 'react';
import {
  Input,
  FormGroup,
  Col,
  Form,
  Label,
  Row,
  Button,
  Card,
} from 'reactstrap';

export default class PostForm extends React.Component {
  handleSubmit = async e => {
    e.preventDefault();
    const result = await this.createPost(this.state);
    if (result) {
      await this.setState({...PostForm.defaultState});
    }
  };
  createPost = async data => {
    try {
      for (let requiredField of PostForm.fields) {
        if (!data[requiredField]) {
          return alert('all fields are required');
        }
      }
      const response = await fetch('/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      await response.json();
      this.props.history.push('/');
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  static defaultState = {
    compensation: 'None',
    reoccuringUnit: 'week',
    type: 'advocacy',
    offerType: 'Requesting Help',
  };
  static fields = new Set([
    'title',
    'description',
    'type',
    'timeLength',
    'compensation',
    'contact',
    'offerType',
  ]);
  state = {...PostForm.defaultState};
  onChange = e => {
    const {
      target: {value, name},
    } = e;
    this.setState({[name]: value});
  };
  onCheck = e => {
    const {
      target: {checked, name},
    } = e;

    this.setState({[name]: checked});
  };
  handleOptionChange = e => {
    const {
      target: {value, name},
    } = e;
    this.setState({[name]: value});
  };
  render() {
    console.log(this.props);
    const {
      state: {
        title,
        description,
        type,
        timeLength,
        reoccuringUnit,
        compensation,
        reoccuring,
        contact,
        offerType,
      },
    } = this;
    return (
      <Col>
        <Card className="postFormCard">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Col sm={2}>
                <Label for="title">Post Title:</Label>
              </Col>
              <Col sm={10}>
                <Input
                  type="text"
                  placeholder=""
                  name="title"
                  onChange={this.onChange}
                  value={title}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={2}>
                <Label for="description">Description:</Label>
              </Col>
              <Col sm={10}>
                <Input
                  type="textarea"
                  placeholder=""
                  name="description"
                  onChange={this.onChange}
                  value={description}
                />
              </Col>
            </FormGroup>
            <FormGroup tag="fieldset">
              <Col>
                <Label for="description">Offering or requesting help?</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="offerType"
                      checked={offerType === 'Requesting Help'}
                      onChange={this.handleOptionChange}
                      value="Requesting Help"
                    />{' '}
                    Requesting Help
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="offerType"
                      checked={offerType === 'Offering Help'}
                      value="Offering Help"
                      onChange={this.handleOptionChange}
                    />{' '}
                    Offering Help
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={4}>
                <Label for="timeLength">Time (in hours):</Label>
              </Col>
              <Col sm={10}>
                <Input
                  type="number"
                  placeholder=""
                  name="timeLength"
                  value={timeLength}
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row style={{marginLeft: '18px'}}>
              <Label for="reoccuring">
                Reoccuring? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Label>
              {/* <FormGroup check> */}
              <Label check>
                <Input
                  type="checkbox"
                  name="reoccuring"
                  onChange={this.onCheck}
                  checked={reoccuring}
                />
              </Label>
              {/* </FormGroup> */}
            </FormGroup>
            {reoccuring ? (
              <FormGroup>
                <Col sm={2}>
                  <Label for="reoccuringUnit">per</Label>
                </Col>
                <Col sm={10}>
                  <Input
                    type="select"
                    name="reoccuringUnit"
                    onChange={this.onChange}
                    value={reoccuringUnit}>
                    <option value="day">day</option>
                    <option value="week">week</option>
                    <option value="month">month</option>
                  </Input>
                </Col>
              </FormGroup>
            ) : null}
            <FormGroup>
              <Col sm={4}>
                <Label for="type">Help Category</Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="select"
                  name="type"
                  onChange={this.onChange}
                  value={type}>
                  <option value="advocacy">
                    advocacy (assistance talking to school officials/offices)
                  </option>
                  <option value="orientation">
                    orientation (finding campus locations)
                  </option>
                  <option value="organization">organization</option>
                  <option value="educational">
                    educational (school work/tutoring)
                  </option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={2}>
                <Label for="compensation">Compensation</Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="select"
                  name="compensation"
                  onChange={this.onChange}
                  value={compensation}>
                  <option value="None">None</option>
                  <option value="Negotiable">Negotiable</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={2}>
                <Label for="contact">Contact:</Label>
              </Col>
              <Col sm={10}>
                <Input
                  type="text"
                  name="contact"
                  onChange={this.onChange}
                  value={contact}
                />
              </Col>
            </FormGroup>
            <Row>
              <Col xs={8} />
              <Col>
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    );
  }
}
