import React from 'react';
import data from '../data';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class AddApplication extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      appList: data.applications,
      appStates: '',
      versionStatus:'',
    };
  }
  handleChange = event => {
    this.setState({
      ...this.state.appStates,
      [event.target.name]: event.target.value
    });
  };

  render() {
    const appDetails = this.state.appList.filter(item =>
      item.guid
        ? item.guid.toLowerCase().includes(this.props.match.params.guid)
        : false
    );
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '100px 325px',
          boxShadow: '2px 2px 5px grey',
          paddingBottom: 15,
          minWidth: 300
        }}
      >
        <FormControl style={{ minWidth: 300 }}>
          <InputLabel htmlFor="app-name">New Application name</InputLabel>
          <Input id="app-name" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl style={{ minWidth: 300 }}>
          <InputLabel htmlFor="app-id">GUID</InputLabel>
          <Input id="app-id" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl style={{ margin: 5, minWidth: 300 }}>
          <InputLabel htmlFor="app-state">State</InputLabel>
          <Select
            value={this.state.appStates}
            onChange={event => this.handleChange(event)}
            inputProps={{
              name: 'appStates',
              id: 'app-state'
            }}
          >
            <MenuItem value="analysis_ready">Analysis Ready</MenuItem>
            <MenuItem value="analysis_succeed">Analysis Succeed</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ minWidth: 300 }}>
          <InputLabel htmlFor="version-no">Current Version Number</InputLabel>
          <Input id="version-no" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl style={{ minWidth: 300 }}>
          <InputLabel htmlFor="version-id">version GUID</InputLabel>
          <Input id="version-id" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl style={{ minWidth: 300 }}>
          <InputLabel htmlFor="version-date">version Date</InputLabel>
          <Input id="version-date" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl style={{ minWidth: 300 }}>
          <InputLabel htmlFor="version-no">version Status</InputLabel>
          <Select
            value={this.state.versionStatus}
            onChange={event => this.handleChange(event)}
            inputProps={{
              name: 'versionStatus',
              id: 'version-no'
            }}
          >
            <MenuItem value="accepted">Accepted</MenuItem>
            <MenuItem value="delivered">Delivered</MenuItem>
            <MenuItem value="delivered">opened</MenuItem>
            <MenuItem value="delivered">purged</MenuItem>
          </Select>
        </FormControl>

        <Button
          style={{
            marginTop: 15
          }}
          variant="contained"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddApplication;
