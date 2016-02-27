var Comment = React.createClass({
	propTypes: {
		author: React.PropTypes.string,
		body: React.PropTypes.string,
		rank: React.PropTypes.number
	},
	render: function() {
		return(
			<div>
				<div>{this.props.author}</div>
				<div>{this.props.body}</div>
				<div>{this.props.rank}</div>
			</div>
			)
	}
})