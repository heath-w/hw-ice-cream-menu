var products = null;
console.log( 'products(1): ' + JSON.stringify( products ) );

document.onreadystatechange = function() {	
	if ( document.readyState === 'interactive' ) {
		$.getScript( 'js/products.js' )
			.done(
				function productsLoadSuccess( data, textStatus, jqxhr ) { 
					console.log( 'document.onreadystatechange - productsLoadSuccess()' );

					console.log( 'document.onreadystatechange - productsLoadSuccess() - textStatus', textStatus );
					console.log( 'document.onreadystatechange - productsLoadSuccess() - jqxhr.status', jqxhr.status );
					console.log( 'document.onreadystatechange - productsLoadSuccess() - data', data );

				  console.log( 'document.onreadystatechange - productsLoadSuccess() - Load was performed.' );

				  console.log( 'document.onreadystatechange - productsLoadSuccess() - products(2): ' + JSON.stringify( products ) );
				  console.log( 'document.onreadystatechange - productsLoadSuccess() - products(2)-"Regular Flavors": ' + JSON.stringify( products[ "Regular Flavors" ] ) );

				  processProducts();
				}
			)
			.fail(
				function productsLoadFail( errors ) {
					console.log( 'document.onreadystatechange - productsLoadFail()' );
					console.log( 'document.onreadystatechange - productsLoadFail() - errors', errors );
				}
			);
	}
};


function processProducts() {
	console.log( 'processProducts()' );

	var productKeys = Object.keys( products );

	console.log( 'processProducts() - productKeys: ', productKeys );

	productKeys.forEach( function loopOverProductKeys( productKey ) {
		console.log( 'processProducts() - loopOverProductKeys()' );
		console.log( 'processProducts() - loopOverProductKeys() - productKey: ', productKey );
		console.log( 'processProducts() - loopOverProductKeys() - products[productKey(', productKey, ')]: ', products[productKey] );
	});

	var regularFlavors = products[ "Regular Flavors" ];
	var seasonalFlavors = products[ "Seasonal Flavors" ];
	var servingOptions = products[ "Serving Options" ];
	var toppings = products.Toppings;

	console.log( 'processProducts() - regularFlavors: ', regularFlavors );
	console.log( 'processProducts() - seasonalFlavors: ', seasonalFlavors );
	console.log( 'processProducts() - servingOptions: ', servingOptions );
	console.log( 'processProducts() - toppings: ', toppings );

	console.log( 'processProducts() - regularFlavors: ', regularFlavors );

	regularFlavors.forEach( function loopOverRegularFlavors( regularFlavor ) {
		console.log( 'processProducts() - loopOverRegularFlavors()' );
		console.log( 'processProducts() - loopOverRegularFlavors() - regularFlavor: ', regularFlavor );

		console.log( 'processProducts() - loopOverRegularFlavors() - regularFlavor.name: ', regularFlavor.name );
		console.log( 'processProducts() - loopOverRegularFlavors() - regularFlavor.description: ', regularFlavor.description );
		console.log( 'processProducts() - loopOverRegularFlavors() - regularFlavor.price: ', regularFlavor.price );
	});

}




