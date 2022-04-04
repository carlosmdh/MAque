window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'purchase',                    // Nombre del evento. En este caso, siempre debe ser purchase
  ecommerce: {
    currency: 'EUR',
    value: 29.98,                       // Valor total del pedido (precio de todos los productos + envío). NO INCLUYE IMPUESTOS
    tax: 3.00,                          // IMPUESTOS (VALOR)
    shipping: 5.00,                     // Coste de envío
    affiliation: 'My online shop',      // Afiliación (por ejemplo, identificación de afiliado, nombre de la tienda, etc.)
    transaction_id: 'abc123',           // ID de la transacción
    coupon: 'ENDOFSUMMER',              // Si se aplicó cupón al pedido, incluirlo aquí
    items: [{                           // Comienza una matriz donde se deben incluir todos los productos
      item_name: 'Product 1',           // Nombre de producto 1 de la lista
      item_id: 'product1',              // ID de producto 1 de la lista
      price: 11.99,                     // Precio del producto 1 de la lista. debe ser ununa cadena. No inlcuir incluir código de moneda. El separador de decimales a de ser un punto
      item_brand: 'brand A',            // Marca del producto
      item_category: 'Apparel',         // Categoría de nivel superior del producto
      item_category2: 'T-shirt',        // Si es posible desglosar las categorías (por ejemplo, ropa, luego camiseta, luego hombres), use item_category2, item_category3, etc. Puede usar desde item_category hasta item_category5
      item_variant: 'Blue',             // Variante de producto
      quantity: '1',                    // Cantidad de producto.
      item_coupon: 'SUMMER20'           // Si un cupón no se aplicó a todo el pedido sino a un producto, use item_coupon
    },{
      item_name: 'Product 2',
      item_id: 'product2',
      price: 12.99,
      item_brand: 'Brand B',
      item_category: 'Category B',
      item_category2: 'Shirt',
      item_variant: 'Blue',
      quantity: '1',
      item_coupon: '25OFF'
      }]
  }
});
