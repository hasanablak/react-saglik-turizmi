import { useNavigate } from "react-router-dom";
import { Header } from "../../components";

export default function UserUpdate() {
	const navigate = useNavigate();
	return (
		<>
			<Header header="Kullanıcı Düzenleme">
				<button className="btn btn-outline-primary" onClick={() => navigate('/users')}>Bütün Kullanıcılar</button>
			</Header>
			<div className="row d-flex">
				<form>
					<div className="form-group">
						<label>Ad Soyad</label>
						<input type="text" className="form-control" value="Hasan Ablak" />
					</div>
					<div className="form-group">
						<label>E-posta adresi</label>
						<input value="0hasanablak@gmail.com" type="text" className="form-control" placeholder="E-posta adresi" />
					</div>
					<div className="form-check">
						<input name="type" checked className="form-check-input" type="checkbox" defaultValue="1" />
						<label className="form-check-label">Admin</label>
					</div>
					<div className="form-check">
						<input name="type" checked className="form-check-input" type="checkbox" defaultValue="" />
						<label className="form-check-label">Şöför</label>
					</div>
					<div className="form-check">
						<input name="type" className="form-check-input" type="checkbox" defaultValue="" />
						<label className="form-check-label">Hasta</label>
					</div>
					<div className="form-check">
						<input name="type" className="form-check-input" type="checkbox" defaultValue="" />
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