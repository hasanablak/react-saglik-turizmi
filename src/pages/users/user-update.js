import { Header } from "../../components";

export default function	UserUpdate()	{
	return (
		<>
			<Header header="Kullanıcı Düzenleme">
					<button className="btn btn-outline-primary">Bütün Kullanıcılar</button>
			</Header>
			<div className="row d-flex">
				<form>
					<div className="form-group">
						<label>Ad Soyad</label>
						<input type="text" className="form-control" />
					</div>
					<div className="form-group">
						<label>E-posta adresi</label>
						<input type="text" className="form-control" placeholder="E-posta adresi" />
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue="" />
						<label className="form-check-label">Admin</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue="" />
						<label className="form-check-label">Şöför</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue="" />
						<label className="form-check-label">Hasta</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="checkbox" defaultValue="" />
						<label className="form-check-label">Hastane Personeli</label>
					</div>
					<button type="submit" className="btn btn-primary">
						Kaydet
					</button>
				</form>

			</div>
		</>

	);
}