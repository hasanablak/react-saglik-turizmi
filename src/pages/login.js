import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { setAuth } from "../stores/auth";
import axios from "axios";
import { TxtLoading } from "../components";

export default function Login() {

	const [credenditinal, setCredentinal] = useState({ email: "", password: "" });
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const sendLoginForm = async (e) => {
		e.preventDefault();
		setLoading(true);
		await axios.post(process.env.REACT_APP_API_URL + "/login", credenditinal)
			.then((e) => {
				loginWasSuccessfully(e)
				setLoading(false);
			}).catch((e) => {
				setLoading(false);
			});

	}

	const loginWasSuccessfully = async (e) => {
		await dispatch(setAuth(e.data));
		navigate("/travellers");
	}

	return (
		<div className="row d-flex justify-content-center align-items-center h-100">
			<div className="col col-xl-8">
				<div className="card  justify-content-center align-items-center">
					<div className="card-body p-5">
						<h6 className="mb-3 header">Login</h6>
						<div className="card justify-content-center align-items-center p-3 w-100">
							<form className="d-flex mb-4 flex-column" onSubmit={sendLoginForm}>
								<div className="form-outline flex-fill mt-3">
									<label className="form-label" htmlFor="email">E-mail</label>
									<input
										required
										pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
										type="text"
										id="email"
										onChange={(v) => setCredentinal(f => ({ ...f, email: v.target.value }))}
										className="form-control form-control-lg" />
								</div>
								<div className="form-outline flex-fill mt-3">
									<label className="form-label" htmlFor="password">Password</label>
									<input
										required
										type="password"
										id="password"
										onChange={(v) => setCredentinal(f => ({ ...f, password: v.target.value }))}
										className="form-control form-control-lg" />
								</div>
								<div className="form-outline flex-fill my-3 mt-3">
									<button disabled={loading} type="submit"
										className="form-control form-control-md">
										{loading ?
											<TxtLoading /> :
											'Giriş yap'
										}
									</button>
								</div>
							</form>
						</div>

					</div>
				</div>

			</div>
		</div>
	);
}