export default function Layout({ children }) {
	return (
		<section className="vh-75">
			<div className="container h-100 mt-5 p-3 dashed" >
				{children}
			</div>
		</section>
	)
}