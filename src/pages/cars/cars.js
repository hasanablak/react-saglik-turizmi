import { Header } from "../../components";

export default function	Cars()	{
	return (
		<>
		<Header header="All Cars">
				<button className="btn btn-outline-primary">+ Yeni Araç Ekle</button>
		</Header>
		<div className="row	d-flex">
			<div className="col">
				<table className="table">
				<thead>
					<tr>
					<th>Plate</th>
					<th>Seats	Count</th>
					<th>Driver</th>
					<th>İşlemler</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<td>34 JJ 4757</td>
					<td>10</td>
					<td>Hasan	Ablak</td>
					<td>
						<button	className="btn">Düzenle</button>
						<button	className="btn">Sil</button>
					</td>
					</tr>
				</tbody>
				</table>
			</div>
			</div>
		</>

	);
}