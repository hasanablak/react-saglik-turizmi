import { Header } from "../../components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ModifidedSwal } from "../../helpers/modifided-swal";
export default function UserCreate() {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		"fullname": "",
		"email": "",
		"types": []
	});

	useEffect(() => {
		console.log(user);
	}, [user]);

	const submitForm = (e) => {
		e.preventDefault();
		var formEl = document.forms.userCreateForm;
		const formData = new FormData(formEl);
		axios.post(process.env.REACT_APP_API_URL + '/users', formData)
			.then((e) => {
				userCreateWasSuccessfully()
			});
	}
	const userCreateWasSuccessfully = async () => {

		await ModifidedSwal().fire({
			icon: "success",
			title: "User was created",
			showConfirmButton: true,
			showCancelButton: true,
			confirmButtonText: 'Do you want to go page of the users lists?',
			cancelButtonText: 'Create another new user'
		}).then(({ value: wantToGoUserList }) => {
			if (wantToGoUserList) {
				navigate("/travellers");
			} else {
				document.forms.userCreateForm.reset();
			}
		});


	}

	return (
		<>
			<Header header="Kullanıcı Ekleme">
				<button className="btn btn-outline-primary" onClick={() => navigate('/users')}>Bütün Kullanıcılar</button>
			</Header>
			<div className="row d-flex">
				<form onSubmit={submitForm} id="userCreateForm">
					<div className="form-group">
						<label>Ad Soyad</label>
						<input name="name" type="text" required className="form-control" />
					</div>
					<div className="form-group">
						<label>E-posta adresi</label>
						<input name="email" type="email" required className="form-control" placeholder="E-posta adresi" />
					</div>
					<div className="form-group">
						<label>Şifre</label>
						<input name="password" type="password" required className="form-control" placeholder="E-posta adresi" />
					</div>
					<div className="from-group">
						<label>User Type</label>
						<div className="form-check">
							<input id="types.admin" name="types[]" className="form-check-input" type="checkbox" defaultValue="1" />
							<label htmlFor="types.admin" className="form-check-label">Admin</label>
						</div>
						<div className="form-check">
							<input id="types.driver" name="types[]" className="form-check-input" type="checkbox" defaultValue="" />
							<label htmlFor="types.driver" className="form-check-label">Şöför</label>
						</div>
						<div className="form-check">
							<input id="types.ill" name="types[]" className="form-check-input" type="checkbox" defaultValue="" />
							<label htmlFor="types.ill" className="form-check-label">Hasta</label>
						</div>
						<div className="form-check">
							<input id="types.hospital-attendant" name="types[]" className="form-check-input" type="checkbox" defaultValue="" />
							<label htmlFor="types.hospital-attendant" className="form-check-label">Hastane Personeli</label>
						</div>
					</div>
					<button type="submit" className="btn btn-primary">
						Kaydet
					</button>
				</form>

			</div>
		</>

	);
}