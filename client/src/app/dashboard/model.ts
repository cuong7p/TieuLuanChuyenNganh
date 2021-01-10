export class Hoadon{
    maHD!: Int32Array;
    tenHD!: string;
    trangthaiHD!: string;
    ngayXN!: string;
    diachigiaohang!: string;
    tongDon!: Int32Array;
    mGD!: Int32Array;
}

export class Giaodich{
    maGD!: Int32Array;
    tenGD!: string;
    tenCongThanhToan!: string;
    ngayGD!: string;
    userID!: Int32Array;
    hoadon!: Hoadon;
}

export class SanphamInHodon{
    maHD!: Int32Array;
    maSp!: Int32Array;
    sanPham!: Product;
    soluong!: Int32Array;
    donGia!: Int32Array;
}

export class Product{
    maSP!: Int32Array;
    tenSP!: string;
    mota!: string;
    tenNSX!: string;
    tennhomSP!: string;
    donGia!: Int32Array;
    soLuong!: Int32Array;
    tinhTrang!: string;
    urlHinh!: string;
    quantity!: number;
}
