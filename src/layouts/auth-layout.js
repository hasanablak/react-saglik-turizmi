import { BtnLogout } from '../components';
import { useNavigate, useLocation, } from 'react-router-dom';
export default function AuthLayout({ children }) {
	const navigate = useNavigate();
	const location = useLocation();
	return (<div className="row">
		<div className="col-md-2">
			<div className="card mt-2 text-center">
				<label>Menü</label>
				<ul className="list-group menu">
					<li className={`list-group-item ${location.pathname == '/travellers' && 'active'}`} onClick={() => navigate('/travellers')}>
						Yolcular
					</li>
					<li className={`list-group-item ${location.pathname == '/transports' && 'active'}`} onClick={() => navigate('/transports')}>Transferler</li>
					<li className={`list-group-item ${location.pathname == '/cars' && 'active'}`} onClick={() => navigate('/cars')}>Arabalar</li>
					<li className={`list-group-item ${location.pathname == '/users' && 'active'}`} onClick={() => navigate('/users')}>Kullanıcılar</li>
				</ul>
				<BtnLogout />
			</div>
		</div>
		<div className="col-md-10">
			{children}
		</div>
	</div>
	);
}