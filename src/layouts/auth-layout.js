export default function AuthLayout({ children }) {
	return (<div className="row">
				<div className="col-md-2">
					<div className="card mt-2 text-center">
					<label htmlFor="">Menü</label>
					<ul className="list-group">
						<li	className="list-group-item active">Yolcular</li>
						<li	className="list-group-item">Transferler</li>
						<li	className="list-group-item">Arabalar</li>
						<li	className="list-group-item">Kullanıcılar</li>
					</ul>
					</div>
				</div>
				<div className="col-md-10">
					{children}
				</div>
			</div>
			);
}