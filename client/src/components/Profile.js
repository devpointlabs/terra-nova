import React, { Fragment } from 'react';
import { AuthConsumer } from "../providers/AuthProvider";
import { Form, Grid, Image, Container, Divider, Header, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Profile extends React.Component {
    state = { editing: false, formValues: { name: '', email: '', file: '', }, };
  
    onDrop = (files) => {
        this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
    }
    
    componentDidMount() {
      const { auth: { user: { name, email, }, }, } = this.props;
      this.setState({ formValues: { name, email, }, });
    }
  
    toggleEdit = () => {
      this.setState( state => {
        return { editing: !state.editing, };
      })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { formValues: { name, email, file, }, } = this.state;
        const { auth: { user, updateUser, }, } = this.props;
        updateUser(user.id, { name, email, file, });
        this.setState({
          editing: false,
          formValues: {
            ...this.state.formValues,
            file: "",
          },
        });
    }

    handleChange = (e) => {
      const { name, value, } = e.target;
      this.setState({
        formValues: {
          ...this.state.formValues,
          [name]: value,
        }
      })
    }
  
    profileView = () => {
      const { auth: { user }, } = this.props;
      return (
        <Fragment>
          <Grid.Column width={4}>
            <Image src={user.image || defaultImage} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h1">{user.name}</Header>
            <Header as="h1">{user.email}</Header>
          </Grid.Column>
        </Fragment>
      )
    }
  
    editView = () => {
        const { formValues: { name, email } } = this.state;
      return (
        <Form onSubmit={this.handleSubmit}>
          <Grid.Column width={4}>
          <Dropzone 
            onDrop={this.onDrop}
            multiple={false}
            >
            {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                // style={styles.dropzone}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> 
                  :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form.Input
              label="Name"
              name="name"
              value={name}
              required
              onChange={this.handleChange}
            />
            <Form.Input
              label="Email"
              name="email"
              value={email}
              required
              onChange={this.handleChange}
            />
            <Button>Update</Button>
          </Grid.Column>
        </Form>
      )
    }
  
  render() {
    const { editing, } = this.state;
    return (
      <Container style={styles}>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            { editing ? this.editView() : this.profileView()}
            <Grid.Column>
              <Button onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;

const styles = {
  marginTop: '100px'
}