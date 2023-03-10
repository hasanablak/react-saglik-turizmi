import { useNavigate } from "react-router-dom";
import { Header } from "../../components";

export default function TransportUpdate() {
	const navigate = useNavigate();
	return (
		<>
			<Header header="Transferi Düzenle">
				<button className="btn btn-outline-primary" onClick={() => navigate('/transports')}>Bütün Seferler</button>
			</Header>
			<div className="row	d-flex">
				<div className="col">
					<form>
						<div className="form-group">
							<label>Araç Seç</label>
							<select name="driver" id="driver" className="form-control">
								<option value={1}>Hasan Ablak</option>
								<option value={2}>Melih Gökçe</option>
								<option value={3}>Hamit Altuntop</option>
							</select>
						</div>
						<div className="form-group">
							<label>Başlangıç Saati</label>
							<input type="datetime-local" className="form-control" />
						</div>
						<div className="row">
							<div className="col">
								<div className="form-group">
									<label>Başlangıç Şehir</label>
									<select name="driver" id="driver" className="form-control">
										<option value={1}>İstanbul</option>
										<option value={2}>Melih Gökçe</option>
										<option value={3}>Hamit Altuntop</option>
									</select>
								</div>
							</div>
							<div className="col">
								<div className="form-group">
									<label>Başlangıç İlçe</label>
									<select name="driver" id="driver" className="form-control">
										<option value={1}>Kağıthane</option>
										<option value={2}>Melih Gökçe</option>
										<option value={3}>Hamit Altuntop</option>
									</select>
								</div>
							</div>
							<div className="col">
								<div className="form-group">
									<label>Başlangıç Mahalle</label>
									<select name="driver" id="driver" className="form-control">
										<option value={1}>Merkez</option>
										<option value={2}>Melih Gökçe</option>
										<option value={3}>Hamit Altuntop</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="form-group">
									<label>Bitiş Şehir</label>
									<select name="driver" id="driver" className="form-control">
										<option value={1}>Sakarya</option>
										<option value={2}>Melih Gökçe</option>
										<option value={3}>Hamit Altuntop</option>
									</select>
								</div>
							</div>
							<div className="col">
								<div className="form-group">
									<label>Bitiş İlçe</label>
									<select name="driver" id="driver" className="form-control">
										<option value={1}>Serdivan</option>
										<option value={2}>Melih Gökçe</option>
										<option value={3}>Hamit Altuntop</option>
									</select>
								</div>
							</div>
							<div className="col">
								<div className="form-group">
									<label>Bitiş Mahalle</label>
									<select name="driver" id="driver" className="form-control">
										<option value={1}>Merkez</option>
										<option value={2}>Melih Gökçe</option>
										<option value={3}>Hamit Altuntop</option>
									</select>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>Yolcular</label>
							<div className="row">
								<div className="col dashed m-2">
									<label htmlFor="">Seçilebilir Yolcular</label>
									<div style={{ height: 100 }}>
										Ali Rıza Ergüç
										<button className="btn btn-outline-warning ">Hasta</button>
										<button className="btn  btn-outline-warning">
											Hastane Personeli
										</button>
										<table>
											<tbody>
												<tr />
												<tr></tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="col dashed m-2">
									<label htmlFor="">Seçilen Yolcular</label>
									<div style={{ height: 100 }}>
										Mehmet Akkuş
										<button className="btn btn-outline-warning active">Hasta</button>
										<button className="btn  btn-outline-warning">
											Hastane Personeli
										</button>
										<table>
											<tbody>
												<tr />
												<tr></tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<button type="submit" className="btn btn-primary">
							Kaydet
						</button>
					</form>

				</div>

			</div>
		</>

	);
}