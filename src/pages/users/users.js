import { Header } from "../../components";

export default function	Users()	{
	return (
		<>
			<Header header="Bütün Kullanıcılar">
						<button className="btn btn-outline-primary">+ Yeni Kullanıcı Ekle</button>
			</Header>
			<div className="row d-flex">
				<div className="col">
					<table className="table">
						<thead>
							<tr>
							<th>Adı Soyadı</th>
							<th>E-posta</th>
							<th>Tipler</th>
							<th>İşlemler</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<td>Hasan Ablak</td>
							<td>0hasanablak@gmail.com</td>
							<td>
								<ul>
									<li>Admin</li>
									<li>Hasta</li>
								</ul>
							</td>
							<td>
								<button className="btn">Düzenle</button>
								<button className="btn">Sil</button>
							</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>

	);
}