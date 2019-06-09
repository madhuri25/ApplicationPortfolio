import React from 'react';
import data from '../data';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

class DetailedView extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      appList: data.applications
    };
  }
  render() {
    const appDetails = this.state.appList.filter(item =>
      item.guid
        ? item.guid.toLowerCase().includes(this.props.match.params.guid)
        : false
    );
    const currentVersion = appDetails[0].versions.map(item =>
      item.currentVersion ? item.name : ''
    );
    return (
      <div>
        <Paper
          style={{
            display: 'flex',
            padding: 10,
            margin: '15px 0'
          }}
        >
          <Grid container spacing={1}>
            <Grid item md={12}>
              <strong>Application Name :</strong> {appDetails[0].name}
            </Grid>
            <Grid item md={9}>
              <strong>Current version :</strong> {currentVersion}
            </Grid>
            <Grid item md={3}>
              <strong>Application state :</strong> {appDetails[0].state}
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Version Name</TableCell>
                <TableCell align="center">Version GUID</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Version Date</TableCell>
                <TableCell align="center">Current Version</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appDetails[0].versions.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.guid}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">
                    {new Date(row.versionDate).toISOString().split('T')[0]}
                  </TableCell>
                  <TableCell align="center">
                    {row.currentVersion ? 'Yes' : 'No'}
                  </TableCell>
                  <TableCell>
                    <Button>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <div
          style={{
            display: 'flex',
            marginTop: 15,
            justifyContent: 'center'
          }}
        >
          <Button variant="contained">Add version</Button>
        </div>
      </div>
    );
  }
}

export default DetailedView;
