const contactLoader = async () => {
	const data = await fetch('https://dummyjson.com/products');

	if (!data.ok) throw new Error('Unable to fetch the data');

	const json = await data?.json();

	return json?.products
}

export { contactLoader };