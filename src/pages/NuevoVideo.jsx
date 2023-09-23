/* Hooks */
import { useEffect, useState } from 'react';
/* React router */
import { useNavigate } from 'react-router-dom';
/* Model */
import { getData, postData } from '../model/videoModel';

export const NuevoVideo = () => {
	const navigate = useNavigate();
	const [titulo, setTitulo] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [imagen, setImagen] = useState('');
	const [urlvideo, setUrlvideo] = useState('');
	const [categoriaVideo, setCategoriaVideo] = useState('');
	const [categorias, setCategorias] = useState([]);
	let url = '/categorias';
	useEffect(() => {
		getData(url, setCategorias);
	}, [url]);

	const handleSubmit = e => {
		e.preventDefault();
		let data = {
			titulo,
			descripcion,
			imagen,
			url: urlvideo,
			categoria: categoriaVideo
		};
		postData('/videos', data).then(response => navigate('/'));
	};

	return (
		<section className='bg-fondoPrincipal w-full h-screen p-8 flex justify-center items-center'>
			<form
				onSubmit={handleSubmit}
				className='w-1/2 h-[70%] bg-fondoVideo shadow-md rounded p-10'>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='nombre'>
						Titulo
					</label>
					<input
						required={true}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='nombre'
						value={titulo}
						onChange={e => {
							setTitulo(e.target.value);
						}}
						type='text'
						placeholder='Nombre'
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='descripcion'>
						Descripcion
					</label>
					<input
						required={true}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='descripcion'
						value={descripcion}
						onChange={e => {
							setDescripcion(e.target.value);
						}}
						type='text'
						placeholder='Descripcion'
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='color'>
						imagen
					</label>
					<input
						required={true}
						className='h-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='color'
						type='text'
						value={imagen}
						onChange={e => {
							setImagen(e.target.value);
						}}
						placeholder='url de la imagen'
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='color'>
						url
					</label>
					<input
						required={true}
						className='h-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='color'
						type='url'
						value={urlvideo}
						onChange={e => {
							setUrlvideo(e.target.value);
						}}
						placeholder='direccion url del video'
					/>
				</div>
				<div className='w-full pt-4 inline-block relative'>
					<label className='block text-gray-700 text-sm font-bold mb-2'>
						categoria
					</label>
					<select
						className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
						value={categoriaVideo}
						onChange={e => setCategoriaVideo(e.target.value)}>
						<option value='' defaultValue='' disabled>
							seleccione una opcion
						</option>
						{categorias.map(categoria => (
							<option key={categoria.id} value={categoria.nombre}>
								{categoria.nombre}
							</option>
						))}
					</select>
					<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
						<svg
							className='fill-current h-4 w-4'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'>
							<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
						</svg>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center p-8'>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
						Crear Video
					</button>
				</div>
			</form>
		</section>
	);
};
