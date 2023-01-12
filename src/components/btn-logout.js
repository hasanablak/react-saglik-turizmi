import { useDispatch } from "react-redux"
import { ModifidedSwal } from "../helpers/modifided-swal";
import { setAuth } from "../stores/auth"
export default function () {
	const dispatch = useDispatch();

	const logOut = async () => {
		await ModifidedSwal().fire({
			icon: "question",
			title: "Do you want to logout?",
			showCancelButton: true,
			confirmButtonText: "No",
			cancelButtonText: "Yes"
		}).then(({ value: wantToStay }) => {
			if (!wantToStay) {
				dispatch(setAuth(""));
			}
		})
	}
	return (
		<div className="btn btn-warning mt-1" onClick={logOut}>Çıkış yap</div>
	)
}