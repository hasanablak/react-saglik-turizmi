import { useNavigate } from "react-router-dom"
import { Header } from "../../components"


export default function () {
	const navigate = useNavigate();
	return (
		<>
			<Header header="Transport Details">
				<button className="btn btn-outline-primary" onClick={() => navigate('/transports')}>Bütün Transferler</button>
			</Header>
			<div className="row d-flex">
				<div className="col">
					<div className="card">
						<div className="card-header">Araç Bilgileri</div>
						<div className="card-body">
							<ul className="list-group">
								<li className="list-group-item">Araç Plaka:</li>
								<li className="list-group-item">Araç Koltuk Sayısı:</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row d-flex">
				<div className="col">
					<div className="card mt-3">
						<div className="card-header">Şöför Bilgileri</div>
						<div className="card-body">
							<ul className="list-group">
								<li className="list-group-item">Adı Soyadı: Hasan Ablak</li>
								<li className="list-group-item">E-posta: 0hasanablak@gmail.com</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row d-flex">
				<div className="col">
					<div className="card mt-3">
						<div className="card-header">Transfer Bilgileri</div>
						<div className="card-body">
							<ul className="list-group">
								<li className="list-group-item">Başlangıç Saati: 10 Ocak 2022 22:00</li>
								<li className="list-group-item">Başlangıç Noktası: İstanbul/Kağıthane Merkez</li>
								<li className="list-group-item">Bitiş Noktası: Sakarya/Serdivan Merkez</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row d-flex">
				<div className="col">
					<div className="card mt-3">
						<div className="card-header">Yolcu Bilgileri</div>
						<div className="card-body">
							<table className="table">
								<thead>
									<tr>
										<th>Adı Soyadı</th>
										<th>E-posta</th>
										<th>Tip</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Mehmet Akkuş</td>
										<td>m.akkus52@hotmail.com</td>
										<td>Hasta</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}