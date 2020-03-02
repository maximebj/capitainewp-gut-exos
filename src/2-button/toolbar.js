const { __ } = wp.i18n
const { Component } = wp.element
const {
	BlockControls,
	BlockAlignmentToolbar,
} = wp.blockEditor

export default class Toolbar extends Component {

	render() {

		const { alignment, setAttributes } = this.props

		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ alignment }
					onChange={ alignment => setAttributes( { alignment } ) }
				/>
			</BlockControls>
		)
	}
}
