import Link from "next/link";
import Image from "next/image";

function NavSide() {
  return (
    <aside>
      <div className="flex h-32 w-32 justify-center">
        <Image src="/next.svg" alt="Logo website" width={200} height={100} />
      </div>
      <ul className="menu w-56 rounded-box">
        <li>
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2zm12-2h6a2 2 0 0 1 2 2v5h-8zm0 11h8v5a2 2 0 0 1-2 2h-6z"
              ></path>
            </svg>
            Trang chủ
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              ></path>
            </svg>
            Tạo đơn hàng
          </Link>
        </li>
        <li>
          <Link href={"/blog"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 17 17"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M2 2h10v4c-2 2-3 3-5 6 2-1 4-3 5-4v7h-10zM12 6c1-1 2-2 3-3l1 1c-1.3 1.3-2.7 2.7-4 4M4 6h6M4 12h3"
              />
            </svg>
            Viết tin tức
          </Link>
        </li>
        <li>
          <div className="divider divider-start">Quản lý</div>
        </li>
        <li>
          <Link href={"/manager/products"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 17 17"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M2 2h10v4c-2 2-3 3-5 6 2-1 4-3 5-4v7h-10zM12 6c1-1 2-2 3-3l1 1c-1.3 1.3-2.7 2.7-4 4M4 6h6M4 12h3"
              />
            </svg>
            Sản phẩm
          </Link>
        </li>
        <li>
          <Link href={"/manager/staffs"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 17 17"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M2 2h10v4c-2 2-3 3-5 6 2-1 4-3 5-4v7h-10zM12 6c1-1 2-2 3-3l1 1c-1.3 1.3-2.7 2.7-4 4M4 6h6M4 12h3"
              />
            </svg>
            Nhân viên
          </Link>
        </li>
        <li>
          <Link href={"/manager/orders"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 17 17"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M2 2h10v4c-2 2-3 3-5 6 2-1 4-3 5-4v7h-10zM12 6c1-1 2-2 3-3l1 1c-1.3 1.3-2.7 2.7-4 4M4 6h6M4 12h3"
              />
            </svg>
            Đơn hàng
          </Link>
        </li>
        <li>
          <Link href={"/manager/blogs"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 17 17"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M2 2h10v4c-2 2-3 3-5 6 2-1 4-3 5-4v7h-10zM12 6c1-1 2-2 3-3l1 1c-1.3 1.3-2.7 2.7-4 4M4 6h6M4 12h3"
              />
            </svg>
            Bài viết
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default NavSide;
