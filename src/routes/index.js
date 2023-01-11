import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Login, Cars, CarCreate, CarUpdate } from "../pages"
import { Users, UserCreate, UserUpdate } from "../pages"
import { Transports, TransportCreate, TransportUpdate } from "../pages"
import { useSelector } from "react-redux";
import Layout from "../layouts";
import AuthLayout from "../layouts/auth-layout";
import GuestLayout from "../layouts/guest-layout";
export default function Index() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={
					<NoRequireAuth>
						<Login />
					</NoRequireAuth>
				} />
				<Route path="/cars" element={
					<RequireAuth>
						<Cars />
					</RequireAuth>
				} />
				<Route path="/cars/create" element={
					<RequireAuth>
						<CarCreate />
					</RequireAuth>
				} />
				<Route path="/cars/:car" element={
					<RequireAuth>
						<CarUpdate />
					</RequireAuth>
				} />


				<Route path="/users" element={
					<RequireAuth>
						<Users />
					</RequireAuth>
				} />
				<Route path="/users/create" element={
					<RequireAuth>
						<UserCreate />
					</RequireAuth>
				} />
				<Route path="/users/:user" element={
					<RequireAuth>
						<UserUpdate />
					</RequireAuth>
				} />

				<Route path="/transports" element={
					<RequireAuth>
						<Transports />
					</RequireAuth>
				} />
				<Route path="/transports/create" element={
					<RequireAuth>
						<TransportCreate />
					</RequireAuth>
				} />
				<Route path="/transports/:transport/update" element={
					<RequireAuth>
						<TransportUpdate />
					</RequireAuth>
				} />
			</Routes>
		</Layout>
	)
}

function NoRequireAuth({ children }) {
	const { token } = useSelector(state => state.auth);
	let location = useLocation();
	if (token) {
		return <Navigate to="/dashboard" state={{ from: location }} replace />;
	}
	return <GuestLayout>{children}</GuestLayout>;
}

function RequireAuth({ children }) {
	//const { token } = useSelector(state => state.auth); 
	let location = useLocation();
	let token = true;
	if (!token) {
		return <Navigate to="/" state={{ from: location }} replace />;
	}
	return <AuthLayout>{children}</AuthLayout>;
}
