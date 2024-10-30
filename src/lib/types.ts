export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};
export type Money = {
  value: number;
  currencyCode: string;
};
export type Supplier = {
  id: number;
  name: string;
  address: string;
  description: string;
};
export type TypeProduct = {
  id: number;
  name: string;
  description: string;
};
export type ProductDrugStore = {
  id: number;
  name: string; // Tên thuốc
  ingredient: string; // Thành phần của thuốc
  unit: string; // Đơn vị tính
  howPack: string; // Quy cách
  typeUse: string; // Đường dùng
  price: Money; //Giá niêm yết
  images: Image[]; // Danh mục ảnh
  supplier: Supplier; // Nhà cung cấp
  stored: number; //kho
  availableForSale: boolean;
  updatedAt: string;
  dosage: string;
  destination: string;
  typeProduct: TypeProduct;
};
export type Product = Omit<ProductDrugStore, "images"> & {
  images: Image[];
  handle: string;
};
