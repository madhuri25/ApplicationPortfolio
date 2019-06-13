import React from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import purple from '@material-ui/core/colors/purple';

class AddApplicationForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      appList: props.context.applications,
      appState: '',
      versionStatus: '',
      appName: '',
      appGuid: '',
      appVersion: '',
      appVersionGuid: '',
      appVersionDate: new Date(),
      Errors: false
    };
  }
  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  validateForm = () => { // TODO: validate for all fields
    if (this.state.appState === '' || this.state.versionStatus === '')
      return false;
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {
      this.setState({
        Errors: false
      });
      const newApp = {
        guid: this.state.appGuid,
        name: this.state.appName,
        state: this.state.appState,
        versions: [
          {
            currentVersion: true,
            guid: this.state.appVersionGuid,
            name: this.state.appVersion,
            status: this.state.versionStatus,
            versionDate: new Date(this.state.appVersionDate).toISOString()
          }
        ]
      };

      this.updateAppList(newApp);
      this.props.history.push('/');
    } else {
      this.setState({
        Errors: true
      });
    }
  };

  updateAppList = newApp => {
    let lists = this.state.appList;
    lists.push(newApp);
    this.setState({
      appList: lists
    });
  };

  render() {
    return (
      <div>
        <header
          style={{
            textAlign: 'center',
            margin: '30px 325px',
            color: purple[800],
            fontSize: 18
          }}
        >
          Add Application Form
        </header>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 300,
            margin: '10px 325px',
            boxShadow: '2px 2px 5px grey',
            padding: 20
          }}
          onSubmit={event => this.handleSubmit(event)}
        >
          <FormControl style={{ minWidth: 300 }} required>
            <InputLabel htmlFor="app-name">New Application name</InputLabel>
            <Input
              id="app-name"
              name="appName"
              value={this.state.appName}
              onChange={event => this.handleChange(event)}
              required
            />
          </FormControl>
          <FormControl style={{ minWidth: 300 }} required>
            <InputLabel htmlFor="app-id">GUID</InputLabel>
            <Input
              id="app-id"
              name="appGuid"
              value={this.state.appGuid}
              onChange={event => this.handleChange(event)}
              required
            />
          </FormControl>
          <FormControl style={{ margin: 5, minWidth: 300 }} required>
            <InputLabel htmlFor="app-state">State</InputLabel>
            <Select
              value={this.state.appState}
              onChange={event => this.handleChange(event)}
              inputProps={{
                name: 'appState',
                id: 'app-state'
              }}
              required
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="analysis_ready">Analysis Ready</MenuItem>
              <MenuItem value="analysis_succeed">Analysis Succeed</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: 300 }} required>
            <InputLabel htmlFor="version-no">Current Version name</InputLabel>
            <Input
              id="version-no"
              name="appVersion"
              value={this.state.appVersion}
              onChange={event => this.handleChange(event)}
              required
            />
          </FormControl>
          <FormControl style={{ minWidth: 300 }} required>
            <InputLabel htmlFor="version-id">version GUID</InputLabel>
            <Input
              id="version-id"
              name="appVersionGuid"
              value={this.state.appVersionGuid}
              onChange={event => this.handleChange(event)}
              required
            />
          </FormControl>
          <FormControl style={{ minWidth: 300 }} required>
            <InputLabel htmlFor="version-date" />
            <Input
              id="version-date"
              label="version Date"
              type="date"
              name="appVersionDate"
              value={this.state.appVersionDate}
              onChange={event => this.handleChange(event)}
              required
            />
          </FormControl>
          <FormControl style={{ minWidth: 300 }} required>
            <InputLabel htmlFor="version-no">version Status</InputLabel>
            <Select
              value={this.state.versionStatus}
              onChange={event => this.handleChange(event)}
              inputProps={{
                name: 'versionStatus',
                id: 'version-no'
              }}
              required
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="accepted">Accepted</MenuItem>
              <MenuItem value="delivered">Delivered</MenuItem>
              <MenuItem value="opened">Opened</MenuItem>
              <MenuItem value="purged">Purged</MenuItem>
            </Select>
          </FormControl>

          <Button
            style={{
              marginTop: 15
            }}
            variant="contained"
            type="submit"
            value="Submit"
          >
            Add
          </Button>
        </form>
        {this.state.Errors && (
          <footer style={{ color: 'red', textAlign: 'center' }}>
            Please select all the fields
          </footer>
        )}
      </div>
    );
  }
}

AddApplicationForm.propTypes = {
	context: PropTypes.object.isRequired
};

export default AddApplicationForm;
