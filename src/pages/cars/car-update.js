import { Header } from "../../components";

export default function	CarUpdate()	{
	return (
		<>
			<Header header="Araç Güncelleme">
						<button className="btn btn-outline-primary">Bütün araçlar</button>
			</Header>
			<div className="row	d-flex">
				<div className="col">
					<form>
						<div className="form-group">
							<label>Plaka</label>
							<input type="text" className="form-control" />
						</div>
						<div className="form-group">
							<label>Koltuk Sayısı</label>
							<input
								type="number"
								className="form-control"
								placeholder="Koltuk sayısı"
							/>
						</div>
						<div className="form-group">
							<label>Şöför</label>
							<select name="driver" id="driver" className="form-control">
								<option value={1}>Hasan Ablak</option>
								<option value={2}>Melih Gökçe</option>
								<option value={3}>Hamit Altuntop</option>
							</select>
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