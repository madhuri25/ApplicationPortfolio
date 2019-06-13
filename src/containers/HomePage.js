import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import ZoomIn from '@material-ui/icons/ZoomIn';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../styles/HomePage.scss';

const Currentversion = ({ versionList }) => {
	let currentVersion = '';
	for (let index = 0; index < versionList.length; index++) {
		if (versionList[index].currentVersion) {
			currentVersion = <TableCell align="center">{versionList[index].name}</TableCell>;
			break;
		}
	}
	return currentVersion || (!currentVersion && <TableCell align="center">Unavailable</TableCell>);
};

class HomePage extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			appList: props.context.applications,
			filteredList: {},
			searchText: ''
		};
	}

	handleChange = (event) => {
		const filterList = this.state.appList.filter(
			(item) => (item.name ? item.name.toLowerCase().includes(event.target.value) : '')
		);
		this.setState({
			filteredList: filterList,
			searchText: event.target.value
		});
	};

	onAdd = () => {
		this.props.history.push('/add-application');
	};

	onDelete = (id) => {
		const filterList = this.state.appList.filter((item) => (item.guid ? !item.guid.includes(id) : false));
		this.setState({
			appList: filterList
		});
	};

	render() {
		const list = (this.state.searchText !== '' && this.state.filteredList) || this.state.appList;
		this.props.context.applications = this.state.appList;
		return (
			<div>
				<div className="search-wrapper">
					<span>Welcome user!</span>
					<span>
						<SearchIcon className="searchIconWrapper" />
						<input
							type="text"
							placeholder="Search…"
							value={this.state.searchText}
							onChange={(event) => this.handleChange(event)}
						/>
					</span>
				</div>
				<Paper>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Application Name</TableCell>
								<TableCell align="center">GUID</TableCell>
								<TableCell align="center">State</TableCell>
								<TableCell align="center">Total Versions</TableCell>
								<TableCell align="center">Current Version</TableCell>
								<TableCell>Details</TableCell>
								<TableCell>Delete</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{list.map((row) => (
								<TableRow key={row.guid}>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="center">{row.guid}</TableCell>
									<TableCell align="center">{row.state.toString()}</TableCell>
									<TableCell align="center">{row.versions.length}</TableCell>
									<Currentversion versionList={row.versions} />
									<TableCell>
										<Link className="link-wrapper" to={{ pathname: `/detailed-view/${row.guid}` }}>
											<ZoomIn />
										</Link>
									</TableCell>
									<TableCell>
										<Button onClick={() => this.onDelete(row.guid)}>
											<DeleteIcon />
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					{this.state.searchText !== '' &&
					this.state.filteredList.length === 0 && <div className="no-result-text">0 search result</div>}
				</Paper>
				<div className="add-button">
					<Button variant="contained" onClick={() => this.onAdd()}>
						Add Application
					</Button>
				</div>
			</div>
		);
	}
}
HomePage.propTypes = {
	context: PropTypes.object.isRequired
};

export default withRouter(HomePage);
