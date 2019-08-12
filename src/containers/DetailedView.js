import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router';
import '../styles/DetailedView.scss';

class DetailedView extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			appList: props.context.applications
		};
	}

	onAdd = () => {
		this.props.history.push(`/add-version/${this.props.match.params.guid}`);
	};

	onDelete = (id) => {
		const list = this.state.appList;
		const filterList = list.map((item) => {
			const index = item.versions.map((version) => version.guid).indexOf(id);
			if (index !== -1) item.versions.splice(index, 1);
			return item;
		});
		this.setState({
			appList: filterList
		});
	};

	getAppDetails = () => {
		const app = this.state.appList.filter(
			(item) => (item.guid ? item.guid.toLowerCase().includes(this.props.match.params.guid) : false)
		);
		return app[0]; // return single filtered element
	};

	render() {
		const appDetails = this.getAppDetails();
		const currentVersion =
			appDetails.versions && appDetails.versions.map((item) => (item.currentVersion ? item.name : ''));
		return (
			<div>
				<Paper className="app-details-wrapper">
					<Grid container spacing={1}>
						<Grid item md={5}>
							<strong>Application Name :</strong> {appDetails.name}
						</Grid>
						<Grid item md={4}>
							<strong>Current version :</strong> {currentVersion}
						</Grid>
						<Grid item md={3}>
							<strong>Application state :</strong> {appDetails.state}
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
							{appDetails.versions.map((row) => (
								<TableRow key={row.name}>
									<TableCell component="th" scope="row">
										{row.name}
										{row.currentVersion ? '*' : ''}
									</TableCell>
									<TableCell align="center">{row.guid}</TableCell>
									<TableCell align="center">{row.status}</TableCell>
									<TableCell align="center">
										{new Date(row.versionDate).toISOString().split('T')[0]}
									</TableCell>
									<TableCell align="center">{row.currentVersion ? 'Yes' : 'No'}</TableCell>
									<TableCell>
										<Button onClick={() => this.onDelete(row.guid)}>
											<DeleteIcon />
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Paper>
				<div className='add-button'>
					<Button variant="contained" onClick={this.onAdd}>
						Add version
					</Button>
				</div>
			</div>
		);
	}
}

DetailedView.propTypes = {
	context: PropTypes.object.isRequired
};

export default withRouter(DetailedView);
