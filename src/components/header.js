export default function Header({children, header}) {
	return (
		<div className="row d-flex dashed header my-2">
			<div className="col-md-12">
				<div className="row py-2">
					<div className="col-md-3">
							<h5>{header}</h5>
					</div>
					<div className="col justify-content-end d-flex">
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}