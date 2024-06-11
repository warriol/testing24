
export class ProductsPage {
  private productos = [
      { id: '#product-1', nombre: 'Blue Top', hover: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center', locator: 'div:nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn' },
      { id: '#product-16', nombre: 'Sleeves Top', hover: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(4) > div > div.single-products > div.productinfo.text-center', locator: 'div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn' },
      { id: '#product-21', nombre: 'Blue Cotton', hover: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(5) > div > div.single-products > div.productinfo.text-center', locator: 'div:nth-child(5) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn' },
      { id: '#product-24', nombre: 'Colour Blocked', hover: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(6) > div > div.single-products > div.productinfo.text-center', locator: 'div:nth-child(6) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn' },
      { id: '#product-37', nombre: 'Grunt Blue', hover: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(7) > div > div.single-products > div.productinfo.text-center', locator: 'div:nth-child(7) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn' },
      { id: '#product-41', nombre: 'Beautiful Peacock', hover: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(8) > div > div.single-products > div.productinfo.text-center', locator: 'div:nth-child(8) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn' },
      { id: '#product-43', nombre: 'GRAPHIC DESIGN', hover: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(9) > div > div.single-products > div.productinfo.text-center', locator: 'div:nth-child(9) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn' },
  ];

  public seleccionarProducto() {
    return this.productos;
  }
  private productoscase12 = [
    { id: '#product-1', nombre: 'Blue Top', hover: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3) > div > div.single-products > div.productinfo.text-center', locator: 'div:nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn' },
    { id: '#product-2', nombre: 'Men T-shirt', hover: 'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(4) > div > div.single-products > div.productinfo.text-center', locator: 'div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn' },
   ];
   
   public seleccionarProductocase12() {
    return this.productoscase12;
  }
}

