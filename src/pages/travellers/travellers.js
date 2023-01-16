import { useNavigate } from "react-router-dom";
import { Header } from "../../components";

export default function Travellers() {
	const navigate = useNavigate();
	return (
		<>
			<Header header="Bütün Yolcular">
				<label>Tip Seçimi Yapabilirsiniz</label>
				<select name="" id="" className="form-control select">
					<option value="">Hasta</option>
					<option value="">Hastane Personeli</option>
				</select>
			</Header>
			<div className="row d-flex">
				<div className="col">
					<table className="table">
						<thead>
							<tr>
								<th>Adı Soyadı</th>
								<th>E-posta</th>
								<th>Transport Başlangıç/Bitiş</th>
								<th>Tip</th>
								<th>İşlemler</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Hasan Ablak</td>
								<td>0hasanablak@gmail.com</td>
								<td>
									İstanbul Kağıthane Merkez <br /> Sakarya Serdivan merkez
								</td>
								<td>Hasta</td>
								<td>
									<button className="btn" onClick={() => navigate('/users/1')}>Kullanıcıyı Düzenle</button>
									<button className="btn" onClick={() => navigate('/transports/1')}>Yolculuğu Düzenle</button>
								</td>
							</tr>
						</tbody>
					</table>

				</div>
			</div>
		</>

	);
}