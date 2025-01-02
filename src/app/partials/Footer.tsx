import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="footer bg-base-200 p-10 text-base-content">
        <aside>
          <Image src="/next.svg" alt="Logo website" width={80} height={80} />
          <p>
            Tâm An
            <br />
            Parmacy
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Sản phẩm</h6>
          <a className="link-hover link">Thảo dược</a>
          <a className="link-hover link">Chế phẩm</a>
          <a className="link-hover link">Tin tức</a>
          <a className="link-hover link">Quảng cáo</a>
        </nav>
        <nav>
          <h6 className="footer-title">Nhà thuốc</h6>
          <a className="link-hover link">Về chúng tôi</a>
          <a className="link-hover link">Liên lạc</a>
          <a className="link-hover link">Địa chỉ</a>
          <a className="link-hover link">Đường dây nóng</a>
        </nav>
        <nav>
          <h6 className="footer-title">Quy định</h6>
          <a className="link-hover link">Các quy định</a>
          <a className="link-hover link">Trách nhiệm và quyền lợi</a>
          <a className="link-hover link">Các văn bản khác</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
