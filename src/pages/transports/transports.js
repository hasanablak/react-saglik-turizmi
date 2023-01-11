import { Header } from "../../components";

export default function Transports() {
	return (
		<>
			<Header header="All Transports">
				<button className="btn btn-outline-primary">+ Yeni Sefer Ekle</button>
			</Header>
			<div className="row	d-flex">
				<div className="col">
					<table className="table">
						<thead>
							<tr>
								<th>Araç Plaka</th>
								<th>Sefer Başlangıç Tarihi</th>
								<th>Sefer Başlangıç Noktası</th>
								<th>Sefer Bitiş Noktası</th>
								<th>Yolcu Sayısı</th>
								<th>İşlemler</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>34 JJ 4757</td>
								<td>20 Ocak 2023 10:00</td>
								<td>Sakarya Serdivan Merkez</td>
								<td>İstanbul Kağıthane Merkez</td>
								<td>12</td>
								<td>
									<button className="btn">Detaylar</button>
									<button className="btn">Düzenle</button>
									<button className="btn btn-danger">Sil</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>

	);
}