window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'view_promotion',                  // Nombre del evento. En este caso, siempre debe ser view_promotion
  ecommerce: {
    items: [{
      promotion_id: 'nvd21',                // ID de la promoción
      promotion_name: 'navidad_2021',       // Nombre de la campaña de promoción
      creative_name: 'dto_50_por_ciento',   // Mensaje del banner de la promoción
      creative_slot: 'sidebar1',            // Posición del banner (puede haber varios elementos en la misma ubicación, por ejemplo,en un slider)
      location_id: 'sidebar'                // Ubicación del banner
    },                                      // Fin primera promoción
    {
      promotion_id: 'nvd21',                // ID de la promoción
      promotion_name: 'navidad_2021',       // Nombre de la campaña de promoción
      creative_name: 'envios_gratis_compras_mayores de 100_euros',  // Mensaje del banner de la promoción
      creative_slot: 'sidebar2',            // Posición del banner (puede haber varios elementos en la misma ubicación, por ejemplo,en un slider)
      location_id: 'sidebar'                // Ubicación del banner
    }                                       // Fin segunda promoción
    ]                                       // Fin array items
  }                                         // Fin objeto ecommerce
}                                           // Fin datalayer.push
);
